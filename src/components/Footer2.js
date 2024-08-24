import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserFriends, faIndustry, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';

const Footer2 = () => {
    const navigate = useNavigate();

    const handleNavigation = (path, activeTab) => {
        navigate(path, { state: { activeTab } });
    };

    return (
        <footer className="n-footer">
            <nav className="n-footer-nav">
                <button onClick={() => handleNavigation("/shops", "shops")}>
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                </button>
                <button onClick={() => handleNavigation("/parents", "parents")}>
                    <FontAwesomeIcon icon={faUserFriends} size="lg" />
                </button>
                <button onClick={() => handleNavigation("/providers", "providers")}>
                    <FontAwesomeIcon icon={faIndustry} size="lg" />
                </button>
                <button onClick={() => handleNavigation("/about", "about")}>
                    <FontAwesomeIcon icon={faInfoCircle} size="lg" />
                </button>
                <button onClick={() => handleNavigation("/profile", "profile")}>
                    <FontAwesomeIcon icon={faUser} size="lg" />
                </button>
            </nav>
        </footer>
    );
};

export default Footer2;
