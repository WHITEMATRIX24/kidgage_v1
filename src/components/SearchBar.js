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
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const searchBarRef = useRef(null);
  const dropdownRef = useRef(null);
  const activityDropdownRef = useRef(null);

  const locations = ["Doha", "Al Wakrah", "Al Khor", "Al Rayyan", "Al Shamal", "Al Shahaniya", "Umm Salal", "Dukhan", "Mesaieed"];
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (showDropdown) {
        handleDropdownKeyNavigation(event, locations, handleLocationSelect);
      } else if (showActivityDropdown) {
        handleDropdownKeyNavigation(event, activities, handleActivitySelect);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showDropdown, showActivityDropdown, highlightedIndex]);

  const handleDropdownKeyNavigation = (event, options, handleSelect) => {
    if (event.key === "ArrowDown") {
      setHighlightedIndex((prevIndex) => Math.min(prevIndex + 1, options.length - 1));
    } else if (event.key === "ArrowUp") {
      setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (event.key === "Enter" && highlightedIndex !== -1) {
      handleSelect(options[highlightedIndex]);
      setHighlightedIndex(-1);
    }
  };

  const handleOptionClick = (option) => {
    setHighlightedIndex(-1);
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
      console.log('Searching with:', { selectedLocation, selectedDob, selectedDate, selectedActivity });
      setMissingSelection(false); // Reset if all selections are valid

      // Refresh the page after a successful search
      window.location.reload();
    } else {
      setMissingSelection(true);
    }
  };


  const getLabelClassName = (selectedValue, defaultValue) => {
    return selectedValue === defaultValue ? "missing-selection-label" : "";
  };

  return (
    <header className="header" ref={searchBarRef}>
      <div className='content'>
        <div className='sbar'>
          <div className='items'>
            <div className="item" onClick={() => handleOptionClick("location")}>
              <label className={getLabelClassName(selectedLocation, "Location")} style={{
                color: missingSelection && selectedLocation === "Location" ? "red" : "#3880C4",
              }}>
                {selectedLocation}
                <FontAwesomeIcon icon={faChevronDown} />
              </label>
              <span className="sub-label" style={{
                color: missingSelection && selectedLocation === "Location" ? "red" : "inherit",
              }}>Search activities near you</span>
              {showDropdown && (
                <div className="dropdown-menu" ref={dropdownRef}>
                  {locations.map((location, index) => (
                    <div
                      key={location}
                      className={highlightedIndex === index ? "highlighted" : ""}
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
              <label className={getLabelClassName(selectedDob, "Age")} style={{
                color: missingSelection && selectedDob === "Age" ? "red" : "#3880C4",
              }}>
                {selectedDob}
                <FontAwesomeIcon icon={faChevronDown} />
              </label>
              <span className="sub-label" style={{
                color: missingSelection && selectedDob === "Age" ? "red" : "inherit",
              }}>Enter DOB</span>
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
              <label className={getLabelClassName(selectedDate, null)} style={{
                color: missingSelection && !selectedDate ? "red" : "#3880C4",
              }}>
                {selectedDate ? selectedDate.toLocaleDateString("en-GB") : "Date"}
                <FontAwesomeIcon icon={faChevronDown} />
              </label>
              <span className="sub-label" style={{
                color: missingSelection && !selectedDate ? "red" : "inherit",
              }}>All dates and days</span>
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
              <label className={getLabelClassName(selectedActivity, "Activity")} style={{
                color: missingSelection && selectedActivity === "Activity" ? "red" : "#3880C4",
              }}>
                {selectedActivity}
                <FontAwesomeIcon icon={faChevronDown} />
              </label>
              <span className="sub-label" style={{
                color: missingSelection && selectedActivity === "Activity" ? "red" : "inherit",
              }}>All activities</span>
              {showActivityDropdown && (
                <div className="dropdown-menu" ref={activityDropdownRef}>
                  {activities.map((activity, index) => (
                    <div
                      key={activity}
                      className={highlightedIndex === index ? "highlighted" : ""}
                      onClick={() => handleActivitySelect(activity)}
                      style={{
                        color: missingSelection && !selectedDate ? "red" : "inherit",
                      }}
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
        </div>

      </div>
    </header>
  );
};

export default SearchBar;
