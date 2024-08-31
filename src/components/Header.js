import React, { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import logo from './assets/images/logo.png';
import bell from './assets/images/bell.png';
import hamburger from './assets/images/hamburger.png';
import Login from './Login'; // Ensure this path is correct

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleLogoClick = () => {
        navigate('/'); // Navigate to root page
    };
    return (
        <header className="home-headers">
            <div className="notification-bar">
                <img className='bell-icon' src={bell} alt="Notification" />
                Are you an activity provider? <a href="/learn-more">Learn how to be listed</a>
            </div>
            <div className='header-content'>
                <div className="home-logo" onClick={handleLogoClick}>
                    <img src={logo} alt="KIDGAGE" style={{ cursor: 'pointer' }} />
                </div>
                <button 
                    className="menu-toggle" 
                    onClick={toggleMenu}
                >
                    <img 
                        src={hamburger} 
                        alt="Menu" 
                        className="menu-icon" 
                    />
                </button>
            </div>
            {isMenuOpen && (

                    <Login closeMenu={toggleMenu}/>
            )}
        </header>
    );
};

export default Header;
