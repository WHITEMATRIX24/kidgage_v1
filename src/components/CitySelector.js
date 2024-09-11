import React, { useState } from 'react';
import './CitySelector.css';

const CitySelector = ({ onCitySelect }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
    onCitySelect(city);
  };

  return (
    <div className="city-selector-overlay">
      <div className="city-selector-modal">
            <h5>Select Your Nearest City</h5>
              {['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'].map((city) => (
                <li key={city} onClick={() => handleCityClick(city)}>
                  {city}
                </li>
              ))}
        </div>
      </div>
  );
};

export default CitySelector;
