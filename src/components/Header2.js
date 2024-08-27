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
                <div className={`search-bar ${isSearchExpanded ? 'expanded' : ''}`}>
                    <div className="search-bar-toggle" onClick={toggleSearch}>
                        <span>Search</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className="search-items">
    <div className={`search-item ${activeInput === 0 ? 'active' : ''}`}>
        <label>Location</label>
        <input 
            type="text" 
            placeholder="Search activities near you" 
            onFocus={() => handleInputFocus(0)}
            onBlur={handleInputBlur}
            disabled={activeInput !== null && activeInput !== 0}
        />
    </div>
    <div className="divider"></div>
    <div className={`search-item ${activeInput === 1 ? 'active' : ''}`}>
        <label>Ages</label>
        <input 
            type="text" 
            placeholder="All ages" 
            onFocus={() => handleInputFocus(1)}
            onBlur={handleInputBlur}
            disabled={activeInput !== null && activeInput !== 1}
        />
    </div>
    <div className="divider"></div>
    <div className={`search-item ${activeInput === 2 ? 'active' : ''}`}>
        <label>When</label>
        <input 
            type="text" 
            placeholder="All Dates & All Days" 
            onFocus={() => handleInputFocus(2)}
            onBlur={handleInputBlur}
            disabled={activeInput !== null && activeInput !== 2}
        />
    </div>
    <div className="divider"></div>
    <div className={`search-item ${activeInput === 3 ? 'active' : ''}`}>
        <label>Activity</label>
        <input 
            type="text" 
            placeholder="All activities" 
            onFocus={() => handleInputFocus(3)}
            onBlur={handleInputBlur}
            disabled={activeInput !== null && activeInput !== 3}
        />
    </div>
    <button className="search-button">
        <FontAwesomeIcon icon={faSearch} />
    </button>
</div>

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