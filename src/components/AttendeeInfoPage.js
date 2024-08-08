import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaPlus, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import './CheckOutGuest.css';

const AttendeeInfo = () => {
  const location = useLocation();
  const { attendees = 0, totalAmount = 0, courseId = '', courseName = '', startDate, endDate, selectedSlot, parentEmail, providerName } = location.state || {};

  const [formData, setFormData] = useState({
    email: parentEmail,
    students: Array(attendees).fill({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      levelOfExpertise: '',
      interests: [],
      newInterest: ''
    })
  });

  const [parentId, setParentId] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchParentData = async () => {
      try {
        const response = await fetch(`https://kidgage-backend.onrender.com/api/personal/search?query=${parentEmail}`);
        const data = await response.json();

        if (response.ok) {
          setParentId(data._id);
        } else {
          console.error('Parent not found:', data.message);
        }
      } catch (error) {
        console.error('Error fetching parent data:', error);
      }
    };

    if (parentEmail) {
      fetchParentData();
    }
  }, [parentEmail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStudentChange = (index, e) => {
    const { name, value } = e.target;
    const newStudents = [...formData.students];
    newStudents[index] = {
      ...newStudents[index],
      [name]: value,
    };
    setFormData(prevData => ({ ...prevData, students: newStudents }));
  };

  const handleStudentInterestChange = (studentIndex, e) => {
    const { name, value } = e.target;
    const newStudents = [...formData.students];
    newStudents[studentIndex] = {
      ...newStudents[studentIndex],
      [name]: value,
    };
    setFormData(prevData => ({ ...prevData, students: newStudents }));
  };

  const handleAddStudentInterest = (index) => {
    const { newInterest } = formData.students[index];
    if (newInterest && !formData.students[index].interests.includes(newInterest)) {
      const newStudents = [...formData.students];
      newStudents[index] = {
        ...newStudents[index],
        interests: [...newStudents[index].interests, newInterest],
        newInterest: ''
      };
      setFormData(prevData => ({ ...prevData, students: newStudents }));
    }
  };

  const handleRemoveStudentInterest = (studentIndex, interest) => {
    const newStudents = [...formData.students];
    newStudents[studentIndex] = {
      ...newStudents[studentIndex],
      interests: newStudents[studentIndex].interests.filter(i => i !== interest)
    };
    setFormData(prevData => ({ ...prevData, students: newStudents }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Promise.all(formData.students.map(async (student) => {
        if (student.firstName && student.lastName) { // Ensure required fields are filled
          await axios.post('https://kidgage-backend.onrender.com/api/student/add', {
            parent: parentId,
            firstName: student.firstName,
            lastName: student.lastName,
            dob: student.dateOfBirth,
            gender: student.gender,
            levelOfExpertise: student.levelOfExpertise,
            interests: student.interests
          });
        }
      }));
      navigate('/attendeecard', {
        state: {
          courseName,
          startDate,
          endDate,
          selectedSlot,
          totalAmount,
          attendees,
          parentEmail,
          providerName ,
          courseId// Pass providerName to AttendeeCard
        }
      });
    } catch (error) {
      console.error('Error adding students:', error);
    }
  };

  return (
    <div className='form-body'>
      <div className="co-form-container">
        
        <form onSubmit={handleSubmit}>
          <h2>About the attendee(s)</h2>
          {formData.students.map((student, index) => (
            <div key={index} className="weekly-booking">
              <h2>Attendee {index + 1}</h2>
              <div className="name-container">
                <div>
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={student.firstName}
                    onChange={(e) => handleStudentChange(index, e)}
                    required
                  />
                </div>
                <div>
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={student.lastName}
                    onChange={(e) => handleStudentChange(index, e)}
                    required
                  />
                </div>
              </div>
              <div className="dob-gender-container">
                <div>
                  <label>Date of Birth *</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={student.dateOfBirth}
                    onChange={(e) => handleStudentChange(index, e)}
                    required
                  />
                </div>
                <div>
                  <label>Gender *</label>
                  <select
                    name="gender"
                    value={student.gender}
                    onChange={(e) => handleStudentChange(index, e)}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="levelOfExpertise">Level of Expertise</label>
                <select
                  id="levelOfExpertise"
                  name="levelOfExpertise"
                  value={student.levelOfExpertise}
                  onChange={(e) => handleStudentChange(index, e)}
                >
                  <option value="">Select Level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
              <div className="interests-container">
                <label>Interests</label>
                <div className='side-by-side'>
                  <div className="add-interests">
                    <input
                      type="text"
                      name="newInterest"
                      value={student.newInterest}
                      onChange={(e) => handleStudentInterestChange(index, e)}
                      placeholder="You can add swimming, dancing etc..."
                      className='new-interest-ip'
                    />
                    <button type="button" onClick={() => handleAddStudentInterest(index)} style={{ width: '18%' }}>
                      <FaPlus />
                    </button>
                  </div>
                  <div className="interest-box">
                    {student.interests.map((interest, interestIndex) => (
                      <div key={interestIndex} className="interest-item">
                        <span>{interest}</span>
                        <button
                          type="button"
                          className="remove-interest-btn"
                          onClick={() => handleRemoveStudentInterest(index, interest)}
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button className='submit-button' type="submit">Proceed to Confirmation</button>
        </form>
        
      </div>
    </div>
  );
};

export default AttendeeInfo;
