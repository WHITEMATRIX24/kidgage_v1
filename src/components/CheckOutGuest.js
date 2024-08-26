import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CheckOutGuest.css';

const CheckOutGuest = () => {
  const location = useLocation();
  const { attendees = 0, totalAmount = 0, courseId = '', courseName = '', startDate, endDate, selectedSlot, providerName } = location.state || {};

  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    phoneNumber: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/personal/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          firstName: formData.fName,
          lastName: formData.lName,
        }),
      });
      const parentEmail = formData.email;
      if (response.ok) {
        navigate('/attendee-info', { 
          state: { 
            attendees, 
            totalAmount, 
            courseId, 
            courseName,
            startDate,
            endDate,
            selectedSlot,
            providerName, // Pass providerName to AttendeeInfo
            parentEmail 
          } 
        });
      } else {
        const result = await response.json();
        alert(result.message || 'Error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please try again.');
    }
  };

  return (
    <div className='form-body'>
      <div className="co-form-container">
        <h2>A little bit about you</h2>
        <form onSubmit={handleSubmit}>
          <label>Full Name *</label>
          <div className='side-by-side'>
            <input
              type="text"
              name="fName"
              value={formData.fName}
              onChange={handleChange}
              required
              placeholder='First Name'
            />
            <input
              type="text"
              name="lName"
              value={formData.lName}
              onChange={handleChange}
              required
              placeholder='Last Name'
            />
          </div>
          <label>E-mail address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Phone number *</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <button className='submit-button' type="submit">Proceed to Next</button>
        </form>
      </div>
    </div>
  );
};

export default CheckOutGuest;
