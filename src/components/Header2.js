import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import hamburger from './assets/images/hamburger.png';
import './Header2.css';
import logo from './assets/images/logo.png';
import Login from './Login'; // Ensure this path is correct


const Header2 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeInput, setActiveInput] = useState(null);
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleInputFocus = (index) => {
        setActiveInput(index);
    };

    const handleInputBlur = () => {
        setActiveInput(null);
    };

    const toggleSearch = () => {
        setIsSearchExpanded(!isSearchExpanded);
    };

    return (
        <header className="home-header">
            <div className='header-content'>
                <div className="home-logo">
                    <img src={logo} alt="KIDGAGE" />
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

export default Header2;