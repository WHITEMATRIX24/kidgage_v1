const express = require('express');
const multer = require('multer');
const CourseCategory = require('../models/CourseCategory'); // Adjust the path as necessary

const router = express.Router();

// Set up multer for file handling
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/categories', async (req, res) => {
    try {
        const categories = await CourseCategory.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
