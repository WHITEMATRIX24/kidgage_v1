import React from 'react';
import Tabs from './Tabs';
import { FaTimes } from 'react-icons/fa'; // Import the FaTimes icon
import Button from './Button';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = ({ closeMenu }) => {
  return (
    <div className="login-container">
        <FaTimes className='close-btn-minus' onClick={closeMenu}/> {/* Use FaTimes icon here */}
        <Tabs>
        <div label={<><i className="fas fa-user tab-icon"></i> Parent</>}>
          <p>For parents and guardians</p>
          <Link to="/personal-signin"><Button primary>Log in to Kidgage</Button></Link>
          <Link to="/personal-signup"><Button>Create an Account</Button></Link>
        </div>
        <div label={<><i className="fas fa-building tab-icon"></i> Business</>}>
          <p>For business users</p>
          <Link to="/business-signin"><Button primary>Activities Manager</Button></Link>
          <Link to="/business-signup"><Button>Get Started</Button></Link>
        </div>
      </Tabs>
    </div>
  );
};

export default Login;
