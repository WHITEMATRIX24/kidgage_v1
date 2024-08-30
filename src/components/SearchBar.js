import React, { useState, useEffect, useRef } from "react";
import Calendar2 from 'react-calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';


const SearchBar = () => {
  const [activeInput, setActiveInput] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [activeOption, setActiveOption] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [age, setAge] = useState("");
  const searchBarRef = useRef(null);

  const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const activities = ["Swimming", "Skating", "Cricket", "MMA", "Basketball"];

  // const handleOptionClick = (option) => {
  //     setActiveOption(option === activeOption ? null : option);
  //     if (option !== "date") setShowCalendar(false);
  //   };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };






  const handleDateClick = () => {
    setShowCalendar(!showCalendar);
    setActiveOption("date");
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    if (value === "" || (parseInt(value) >= 0 && parseInt(value) <= 99)) {
      setAge(value);
    }
  };

  const incrementAge = () => {
    setAge((prev) =>
      parseInt(prev) < 99 ? (parseInt(prev) + 1).toString() : prev
    );
  };

  const decrementAge = () => {
    setAge((prev) =>
      parseInt(prev) > 0 ? (parseInt(prev) - 1).toString() : prev
    );
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
    <header className="header">
      <div className='content'>
        <div className={`sbar ${isSearchExpanded ? 'expanded' : ''}`}>
          <div className="items">


            <div className={`item ${activeInput === 0 ? 'active' : ''}`}>

              <label>Location
                <i
                  style={{ color: '#393939', cursor: 'pointer' }}
                  className="fa-solid fa-chevron-down"
                  onClick={handleIconClick}
                />
              </label>
              <select
                value={selectedOption}
                onChange={(e) => handleOptionClick(e.target.value)}
                onFocus={() => handleInputFocus(0)}
                onBlur={handleInputBlur}
                disabled={activeInput !== null && activeInput !== 0}
              >
                <option value="">Search activities near you</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>


            </div>
            <div className="dividers" />
            <div className={`item ${activeInput === 1 ? 'active' : ''}`}>
              <label>Ages <i style={{ color: '#393939' }} class="fa-solid fa-chevron-down"></i></label>
              <input
                type="text"
                placeholder="Enter D.O.B"
                onFocus={() => handleInputFocus(1)}
                onBlur={handleInputBlur}
                disabled={activeInput !== null && activeInput !== 1}
              />
            </div>
            <div className="dividers" />
            <div className={`item ${activeInput === 2 ? 'active' : ''}`}>
              <label>When <i style={{ color: '#393939' }} class="fa-solid fa-chevron-down"></i></label>
              <input
                type="text"
                placeholder="All dates & days"
                onFocus={() => handleInputFocus(2)}
                onBlur={handleInputBlur}
                disabled={activeInput !== null && activeInput !== 2}
              />
            </div>
            <div className="dividers" />
            <div className={`item ${activeInput === 3 ? 'active' : ''}`}>
              <label>Activity </label>
              <input
                type="text"
                placeholder="All activities"
                onFocus={() => handleInputFocus(3)}
                onBlur={handleInputBlur}
                disabled={activeInput !== null && activeInput !== 3}
              />
            </div>
            <div className="dividers" />
            <button className="sbutton">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          {isOpen && (
            <div className="dropdown-menu">
              {locations.map((location) => (
                <div
                  key={location}
                  onClick={() => handleItemClick(location)}
                >
                  {location}
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

    </header>
  );
};

export default SearchBar;