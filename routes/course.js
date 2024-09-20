const express = require('express');
const router = express.Router();
const Course = require('../models/Course');


// Route to search for a course by name
router.get('/search', async (req, res) => {
    try {
        const { name } = req.query;

        // Find course by name (case-insensitive search)
        const course = await Course.findOne({ name: { $regex: new RegExp(name, 'i') } });

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

router.get('/course/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
// Example backend code
router.get('/by-course-type', async (req, res) => {
    const { courseType } = req.query;

    try {
        const courses = await Course.find({ courseType: courseType });
        res.status(200).json(courses);
    } catch (error) {
        console.error('Error fetching courses by courseType:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;
