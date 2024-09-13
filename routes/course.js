const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Example backend code
router.get('/by-course-type', async (req, res) => {
    const { courseType } = req.query;

    try {
        // Find courses by type and include locations
        const courses = await Course.find({ courseType: courseType }).select('name description days feeAmount feeType locations'); 
        res.status(200).json(courses);
    } catch (error) {
        console.error('Error fetching courses by courseType:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

  
module.exports = router;
