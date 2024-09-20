const express = require('express');
const router = express.Router();
const Banner = require('../models/Banner');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to get all banners
router.get('/', async (req, res) => {
    try {
        const banners = await Banner.find();
        res.json(banners);
    } catch (error) {
        console.error('Error fetching banners:', error);
        res.status(500).json({ message: 'Server error', error });
    }
});

// Route to add a banner
router.post('/addbanner', upload.single('image'), async (req, res) => {
    try {
        const { title, bookingLink } = req.body;
        const image = req.file.buffer.toString('base64');

        if (!image) {
            return res.status(400).json({ message: 'Image is required' });
        }

        const newBanner = new Banner({
            title,
            imageUrl: `data:image/png;base64,${image}`,
            bookingLink
        });

        const savedBanner = await newBanner.save();
        res.status(201).json({ message: 'Banner added successfully', banner: savedBanner });
    } catch (error) {
        console.error('Error adding banner:', error);
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;

