import React, { useState } from 'react';
import './Header2.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import logo from './assets/images/logo.png';
import bell from './assets/images/bell.png';
import hamburger from './assets/images/hamburger.png';
import Login from './Login'; // Ensure this path is correct

const Header2 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
const navigate=useNavigate();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleLogoClick=()=>{
        navigate('/');
    }
    return (
        <header className="shome-headers">
            <div className="snotification-bar">
                <img className='sbell-icon' src={bell} alt="Notification" />
                Are you an activity provider? <a href="/learn-more">Learn how to be listed</a>
            </div>
            <div className='sheader-content'>
                <div className="shome-logo" onClick={handleLogoClick}>
                    <img src={logo} alt="KIDGAGE" style={{ cursor: 'pointer' }} />
                </div>
                <button 
                    className="smenu-toggle" 
                    onClick={toggleMenu}
                >
                    <img 
                        src={hamburger} 
                        alt="Menu" 
                        className="smenu-icon" 
                    />
                </button>
            </div>
            {isMenuOpen && (

                    <Login closeMenu={toggleMenu}/>
            )}
        </header>
    );
};

export default Header2;
