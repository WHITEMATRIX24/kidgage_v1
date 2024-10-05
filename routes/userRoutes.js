const express = require('express');
const multer = require('multer');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Adjust the path as necessary

const router = express.Router();

// Set up multer for file handling
const storage = multer.memoryStorage();
const upload = multer({ storage });
// Signup Route
router.post('/signup', upload.single('crFile'), async (req, res) => {
  try {
    const {
      username,
      email,
      phoneNumber,
      fullName,
      designation,
      description,
      location,
      website,
      instaId,
      agreeTerms
    } = req.body;

    // Validate description character length on the server-side
    if (description.length < 450 || description.length > 500) {
      return res.status(400).json({ message: 'Description must be between 450 to 500 characters.' });
    }

    // Create new user document
    const newUser = new User({
      username,
      email,
      phoneNumber,
      fullName,
      designation,
      description,
      location,
      website: website || null, // Optional
      instaId: instaId || null, // Optional
      crFile: req.file ? req.file.path : null, // Store file path
      agreeTerms,
    });

    await newUser.save();
    res.status(201).json({ message: 'Signed up successfully!' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'An error occurred during signup.' });
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

// Search Route
router.get('/search', async (req, res) => {
  const { query } = req.query;

  try {
    // Find the user by email or phone number
    const user = await User.findOne({
      $or: [{ email: query }, { phoneNumber: query }]
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Send the user details
    res.status(200).json(user);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// New route to get all users
// New route to get all verified users
router.get('/all', async (req, res) => {
  try {
    // Fetch only verified users with the specified fields (username, logo)
    const users = await User.find({ verificationStatus: 'verified' }, 'username logo');
    console.log('Fetched Users:', users); // Debugging log
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error.message); // Debugging log for errors
    res.status(400).json({ message: error.message });
  }
});



// Route to get provider details by providerId
router.get('/:providerId', async (req, res) => {
  const { providerId } = req.params;

  try {
      // Fetch provider details using the providerId
      const provider = await User.findById(providerId);

      if (!provider) {
          return res.status(404).json({ message: 'Provider not found' });
      }

      // Respond with provider name and logo
      res.json({
          name: provider.name,
          logo: provider.logo,
      });
  } catch (error) {
      console.error('Error fetching provider:', error);
      res.status(500).json({ message: 'Server error' });
  }
});

// Route to get provider details by providerId
router.get('provider/:providerId', async (req, res) => {
  const { providerId } = req.params;

  try {
      // Fetch provider details using the providerId
      const provider = await User.findById(providerId);

      if (!provider) {
          return res.status(404).json({ message: 'Provider not found' });
      }

      // Respond with more provider details
      res.json({
          name: provider.name,
          logo: provider.logo,
          email: provider.email,
          phone: provider.phone,
          address: provider.address,
          description: provider.description,  // Example additional field
      });
  } catch (error) {
      console.error('Error fetching provider:', error);
      res.status(500).json({ message: 'Server error' });
  }
});


router.get('/provider/:id', async (req, res) => {
  try {
    const provider = await User.findById(req.params.id);
    if (!provider) {
      return res.status(404).json({ message: 'Provider not found' });
    }
    res.status(200).json(provider);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});



module.exports = router;
