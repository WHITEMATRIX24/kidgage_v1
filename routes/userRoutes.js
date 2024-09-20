const express = require('express');
const multer = require('multer');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Adjust the path as necessary

const router = express.Router();

// Set up multer for file handling
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/signup', upload.fields([
  { name: 'logo', maxCount: 1 },
  { name: 'crFile', maxCount: 1 },
  { name: 'idCard', maxCount: 1 },
  { name: 'academyImg', maxCount: 1 }
]), async (req, res) => {
  const { username, email, phoneNumber, password, firstName, lastName, licenseNo, description, location, agreeTerms, academyType } = req.body;

  const files = req.files;
  const fileBase64 = {};

  if (files) {
    if (files.logo) fileBase64.logo = files.logo[0].buffer.toString('base64');
    if (files.crFile) fileBase64.crFile = files.crFile[0].buffer.toString('base64');
    if (files.idCard) fileBase64.idCard = files.idCard[0].buffer.toString('base64');
    if (files.academyImg) fileBase64.academyImg = files.academyImg[0].buffer.toString('base64');
  }

  try {
    const existingUser = await User.findOne({ $or: [{ email }, { phoneNumber }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email or phone number already exists.' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      username,
      email,
      phoneNumber,
      password: hashedPassword,
      firstName,
      lastName,
      logo: fileBase64.logo,
      crFile: fileBase64.crFile,
      idCard: fileBase64.idCard,
      licenseNo,
      academyImg: fileBase64.academyImg,
      description,
      location,
      agreeTerms,
      academyType,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});


// Sign-In Route
router.post('/signin', async (req, res) => {
  const { emailOrPhone, password } = req.body;

  try {
    // Find the user by email or phone number
    const user = await User.findOne({
      $or: [{ email: emailOrPhone }, { phoneNumber: emailOrPhone }]
    });

    if (!user) {
      return res.status(400).json({ message: 'Eemail/phone is incorrect' });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Password is incorrect' });
    }

    // Successful sign-in
    res.status(200).json({ message: 'Sign-in successful', user });
  } catch (err) {
    console.error('Sign-in error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


// New route to get all users
router.get('/all', async (req, res) => {
  try {
    const users = await User.find({}, 'username logo'); // Fetch only the username and logo fields
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



module.exports = router;
