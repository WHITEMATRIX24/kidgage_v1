import React, { useState, useRef, useEffect } from "react";
import Calendar2 from 'react-calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

const SearchBar = () => {
  const [activeOption, setActiveOption] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showDobCalendar, setShowDobCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDob, setSelectedDob] = useState("Age");
  const [selectedLocation, setSelectedLocation] = useState("Location");
  const [selectedActivity, setSelectedActivity] = useState("Activity");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showActivityDropdown, setShowActivityDropdown] = useState(false);
  const [missingSelection, setMissingSelection] = useState(false);
  const searchBarRef = useRef(null);

  const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const activities = ["Swimming", "Skating", "Cricket", "MMA", "Basketball"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setActiveOption(null);
        setShowCalendar(false);
        setShowDobCalendar(false);
        setShowDropdown(false);
        setShowActivityDropdown(false);
        setMissingSelection(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    if (option === "location") {
      setShowDropdown(!showDropdown);
      setShowActivityDropdown(false);
      setShowCalendar(false);
      setShowDobCalendar(false);
    } else if (option === "activity") {
      setShowActivityDropdown(!showActivityDropdown);
      setShowDropdown(false);
      setShowCalendar(false);
      setShowDobCalendar(false);
    } else if (option === "age") {
      setShowDobCalendar(!showDobCalendar);
      setShowDropdown(false);
      setShowActivityDropdown(false);
      setShowCalendar(false);
    } else if (option === "date") {
      setShowCalendar(!showCalendar);
      setShowDropdown(false);
      setShowActivityDropdown(false);
      setShowDobCalendar(false);
    } else {
      setActiveOption(option === activeOption ? null : option);
      setShowDropdown(false);
      setShowActivityDropdown(false);
      setShowCalendar(false);
      setShowDobCalendar(false);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleDobChange = (date) => {
    setSelectedDob(date.toLocaleDateString("en-GB"));
    setShowDobCalendar(false);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setShowDropdown(false);
  };

  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
    setShowActivityDropdown(false);
  };

  const handleSearchClick = () => {
    if (
      selectedLocation !== "Location" &&
      selectedDob !== "Age" &&
      selectedDate &&
      selectedActivity !== "Activity"
    ) {
      // Perform search or navigation
      console.log('Searching with:', { selectedLocation, selectedDob, selectedDate, selectedActivity });
    } else {
      setMissingSelection(true);
    }
  };

  return (
    <header className="header" ref={searchBarRef}>
      <div className='content'>
        <div className='sbar'>
          <div className='items'>
            <div className="item" onClick={() => handleOptionClick("location")}>
              <label>
                {selectedLocation}
                <FontAwesomeIcon icon={faChevronDown} />
              </label>
              <span className="sub-label">Search activities near you</span>
              {showDropdown && (
                <div className="dropdown-menu">
                  {locations.map((location) => (
                    <div
                      key={location}
                      onClick={() => handleLocationSelect(location)}
                    >
                      {location}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="dividers" />
            <div className="item" onClick={() => handleOptionClick("age")}>
              <label>
                {selectedDob}
                <FontAwesomeIcon icon={faChevronDown} />
              </label>
              <span className="sub-label">Enter DOB</span>
              {showDobCalendar && (
                <div className="calendar-dropdowns">
                  <Calendar2
                    onChange={handleDobChange}
                    value={selectedDob === "Age" ? new Date() : new Date(selectedDob)}
                    maxDate={new Date()}
                    className="custom-cal"
                  />
                </div>
              )}
            </div>
            <div className="dividers" />
            <div className="item" onClick={() => handleOptionClick("date")}>
              <label>
                {selectedDate ? selectedDate.toLocaleDateString("en-GB") : "Date"}
                <FontAwesomeIcon icon={faChevronDown} />
              </label>
              <span className="sub-label">All dates and days</span>
              {showCalendar && (
                <div className="calendar-dropdowna">
                  <Calendar2
                    onChange={handleDateChange}
                    value={selectedDate || new Date()}
                    minDetail="month"
                    className="custom-cal"
                  />
                </div>
              )}
            </div>
            <div className="dividers" />
            <div className="item" onClick={() => handleOptionClick("activity")}>
              <label>
                {selectedActivity}
                <FontAwesomeIcon icon={faChevronDown} />
              </label>
              <span className="sub-label">All activities</span>
              {showActivityDropdown && (
                <div className="dropdown-menu">
                  {activities.map((activity) => (
                    <div
                      key={activity}
                      onClick={() => handleActivitySelect(activity)}
                    >
                      {activity}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="dividers" />
            <button className="sbutton" onClick={handleSearchClick}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          {missingSelection && (
            <p className="missing-selection">Please select all options.</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default SearchBar;
