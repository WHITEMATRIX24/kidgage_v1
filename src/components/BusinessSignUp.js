import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client'; // Import socket.io client
import Button from './Button';
import './SignUpForm.css';

// Socket.io connection
const socket = io('https://kidgage-adminbackend.onrender.com'); // Replace with your server URL

const BusinessSignUp = ({ handleNavigation }) => {
  const initialFormState = {
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    fullName: '',
    designation: '',
    crFile: null,
    description: '',
    location: '',
    agreeTerms: false,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [charCount, setCharCount] = useState(0);
  const charLimit = 500;

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === 'description') {
      setCharCount(value.length);
    }

    if (files) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (charCount < 450 || charCount > charLimit) {
      setError('Description must be between 450 to 500 characters.');
      setSuccess('');
      return;
    }

    setError('');
    
    // Prepare data to be sent
    const data = {
      ...formData,
      // Include other necessary fields as needed
    };

    try {
      // Emit data to the server using Socket.io
      socket.emit('businessSignUp', data); // Adjust the event name as needed
      setSuccess('Signed Up Successfully!'); // Update the success message

      // Optionally, clear the form data after submission
      setFormData(initialFormState);
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
      setSuccess('');
      setError('Failed to sign up. Please try again.'); // Display error message
    }
  };

  const [fileError, setFileError] = useState('');

  const handleFileChange = (e) => {
    const { name, files } = e.target;

    if (files) {
      const file = files[0];
      if (file && file.size > 1024 * 1024) {
        setFileError(`The file size of ${file.name} exceeds 1MB.`);
        setFormData(prevState => ({
          ...prevState,
          [name]: null
        }));
      } else {
        setFileError('');
        setFormData(prevState => ({
          ...prevState,
          [name]: file
        }));
      }
    }
  };

  return (
    <div className='s-form-body'>
      <form className="signup-form-bs" onSubmit={handleSubmit}>
        <h2>JOIN OUR PROVIDER LIST, IT'S FREE</h2>
        <label className='sign-in-label'>Academy Name (As per Company Registration)</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Academy Name" required />
        
        <label className='sign-in-label'>Academy Bio</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Ex. You may include a brief introduction containing activities, classes you provide, age category etc.."
          rows="4"
          cols="50"
          maxLength={charLimit}
          required
        />
        <p>{charCount}/{charLimit} characters</p>

        <input type="url" name="location" value={formData.location} onChange={handleChange} placeholder="Enter location URL" />
        
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail ID" required />
        
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone number" required />
        
        <label className='sign-in-label' htmlFor="crFile">CR Doc</label>
        <input type="file" name="crFile" onChange={handleFileChange} accept=".pdf" />
        {fileError && <p className="error-message">{fileError}</p>}

        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full name" required />
        <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" required />

        <div className="terms-container">
          <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required />
          <label htmlFor="agreeTerms">I agree that all provided information are correct for administrators verification.</label>
        </div>
        
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <Button primary>Submit for Verification</Button>
      </form>
    </div>
  );
};

export default BusinessSignUp;
