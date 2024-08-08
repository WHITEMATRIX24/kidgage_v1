import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { attendees, totalAmount, courseId, courseName, startDate, endDate, selectedSlot, providerName } = location.state || {};

  const handleGuestCheckout = () => {
    navigate('/checkoutguest', { 
      state: { 
        attendees, 
        totalAmount, 
        courseId, 
        courseName,
        startDate,
        endDate,
        selectedSlot,
        providerName // Pass providerName to checkout guest
      } 
    });
  };

  return (
    <div className="wrapper">
      <div className="checkout-container">
        <div className="options-container">
          <button className="guest-button" onClick={handleGuestCheckout}>Checkout as guest</button>
          <p>or</p>
          <Link to="/personal-signup">
            <button className="account-button">Create an Account</button>
          </Link>
          <p className="login-link">
            Already have an account? <Link to="/personal-signup">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
