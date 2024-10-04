import React, { useState } from 'react';
import Button from './Button';
import axios from 'axios';
import './SignUpForm.css';

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
  const [charCount, setCharCount] = useState(0); // For character count
  const charLimit = 500; // Set character limit

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === 'description') {
      setCharCount(value.length); // Update character count when typing in description
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
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) data.append(key, formData[key]);
    });
  
    try {
      // Send the account creation request to the admin dashboard backend
      const response = await axios.post('https://kidgage-adminbackend.onrender.com/api/verify-account', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.data.success) {
        setSuccess('Request sent for verification!');
      } else {
        setError('Failed to send request for verification.');
      }
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
      setError('Error sending request for verification.');
      setSuccess('');
    }
  };
  
  const [fileError, setFileError] = useState('');

  const handleFileChange = (e) => {
    const { name, value, type, files } = e.target;

    // Handle file upload and check file size
    if (files) {
        const file = files[0];
        if (file && file.size > 1024 * 1024) { // 1MB in bytes
            setFileError(`The file size of ${file.name} exceeds 1MB.`);
            setFormData(prevState => ({
                ...prevState,
                [name]: []
            }));
        } else {
            setFileError(''); // Clear error if file size is valid
            setFormData(prevState => ({
                ...prevState,
                [name]: Array.from(files)
            }));
        }
    } else {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
};
  return (
    <div className='s-form-body'>
      <form className="signup-form-bs" onSubmit={handleSubmit}>
        <h2>JOIN OUR PROVIDER LIST, ITS FREE</h2>
        <label className='sign-in-label'>Academy Name (As per Company Registration)</label>
        <div className='side-by-side'>
          <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Academy Name" required />
        </div>

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
        <p>{charCount}/{charLimit} characters</p> {/* Live character count */}
        <input type="url" name="location" value={formData.location} onChange={handleChange} placeholder="Enter location URL" />
        <div className='side-by-side'>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail ID" required />
          <div className="phone-number-container" style={{ position: 'relative', width: '100%' }}>
            <span
              className="country-code"
              style={{
                position: 'absolute',
                left: '10px',
                top: '16px',
                transform: 'translateY(-50%)',
                fontSize: 'small',
                color: '#555',
              }}
            >
              +974
            </span>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone number"
              required
              style={{ paddingLeft: '50px' }}
            />
          </div>
        </div>

        
        
        <label className='sign-in-label' htmlFor="crFile">CR Doc</label>
        <input type="file" name="crFile" onChange={handleFileChange} accept=".pdf" />
        {/* <label className='sign-in-label' htmlFor="idCard">ID Card</label>
        <input type="file" name="idCard" onChange={handleChange} accept=".pdf" /> */}
        {fileError && <p className="error-message">{fileError}</p>}
        {/* <label className='sign-in-label' htmlFor="logo">Business Logo</label>
        <input type="file" name="logo" onChange={handleChange} accept=".png, .jpg, .jpeg" /> */}
        {/* <div className='side-by-side'>
        <input type="text" name="licenseNo" value={formData.licenseNo} onChange={handleChange} placeholder="License number" required />
        </div> */}
        {/* <div className='side-by-side'>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm password" required />
        </div> */}
        <div className='side-by-side'>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full name" required />
          <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" required />
        </div>
        <div className="terms-container">
          <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required />
          <label htmlFor="agreeTerms">I agree that all provided information are correct for administrators verification.
          </label>
        </div>
        
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <Button primary>Submit for Verification</Button>
      </form>
    </div>
  );
};

export default BusinessSignUp;
