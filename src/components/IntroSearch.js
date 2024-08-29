import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import "./IntroSearch.css";
import Calendar2 from "react-calendar";
import "react-calendar/dist/Calendar.css";

const IntroSearch = () => {
  const [activeOption, setActiveOption] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showDobCalendar, setShowDobCalendar] = useState(false); // Separate calendar for date of birth
  const [selectedDate, setSelectedDate] = useState(null); // Initially null for "Date" label
  const [selectedDob, setSelectedDob] = useState("Age"); // State for selected date of birth
  const [selectedLocation, setSelectedLocation] = useState("Doha");
  const [selectedActivity, setSelectedActivity] = useState("Activity");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isActivityDropdownVisible, setIsActivityDropdownVisible] = useState(false);
  const [missingSelection, setMissingSelection] = useState(false); // State to track missing selections
  const searchBarRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigation

  const locations = [
    "Doha",
    "Al Wakrah",
    "Al Khor",
    "Al Rayyan",
    "Al Shamal",
    "Al Shahaniya",
    "Umm Salal",
    "Dukhan",
    "Mesaieed",
  ];

  const activities = ["Swimming", "Skating", "Cricket", "MMA", "Basketball"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setActiveOption(null);
        setShowCalendar(false);
        setShowDobCalendar(false);
        setIsDropdownVisible(false);
        setIsActivityDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    if (option === "location") {
      setIsDropdownVisible(!isDropdownVisible);
      setIsActivityDropdownVisible(false);
    } else if (option === "activity") {
      setIsActivityDropdownVisible(!isActivityDropdownVisible);
      setIsDropdownVisible(false);
    } else if (option === "age") {
      setShowDobCalendar(!showDobCalendar); // Toggle DOB calendar
      setShowCalendar(false);
    } else if (option === "date") {
      setShowCalendar(!showCalendar); // Toggle Date calendar
      setShowDobCalendar(false);
    } else {
      setActiveOption(option === activeOption ? null : option);
      setIsDropdownVisible(false);
      setIsActivityDropdownVisible(false);
      setShowCalendar(false);
      setShowDobCalendar(false);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleDobChange = (date) => {
    setSelectedDob(date.toLocaleDateString("en-GB")); // Update DOB label
    setShowDobCalendar(false);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsDropdownVisible(false);
  };

  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
    setIsActivityDropdownVisible(false);
  };

  const handleSearchClick = () => {
    // Validate that all options are selected
    if (
      selectedLocation &&
      selectedDob !== "Age" &&
      selectedDate &&
      selectedActivity !== "Activity"
    ) {
      // Navigate to the activities page if all options are selected
      navigate("/activityinfo");
    } else {
      // Show missing selection alert by setting missingSelection to true
      setMissingSelection(true);
    }
  };

  return (
    <div className="intro-search">
      <div className="intro-content">
        <h1 className="intro-title">Find an activity your child will love</h1>
        <p className="intro-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa lacus,
        </p>
      </div>
      <div className="search-container" ref={searchBarRef}>
        <div className="intro-search-bar">
          <div className="search-options">
            <span
              className={`search1-option ${
                activeOption === "location" ? "active" : ""
              }`}
              onClick={() => handleOptionClick("location")}
            >
              <div className="sss">
                <h4>Location</h4>
                <p style={{ color: missingSelection && !selectedLocation ? "red" : "inherit" }}>
                  {selectedLocation}
                  <i className="fas fa-chevron-down"></i>
                </p>
              </div>
              {isDropdownVisible && (
                <div className="dropdown">
                  <ul>
                    {locations.map((loc, index) => (
                      <li
                        key={index}
                        onClick={() => handleLocationSelect(loc)}
                        className="dropdown-item"
                      >
                        {loc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </span>
            <span className="separator-log">|</span>
            <span
              className={`search1-options ${
                activeOption === "age" ? "active" : ""
              }`}
              onClick={() => handleOptionClick("age")}
              style={{ color: missingSelection && selectedDob === "Age" ? "red" : "inherit" }}
            >
              {selectedDob}
            </span>
            <span className="separator-log">|</span>
            <span
              className={`search1-options ${
                activeOption === "date" ? "active" : ""
              }`}
              onClick={() => handleOptionClick("date")}
              style={{ color: missingSelection && !selectedDate ? "red" : "inherit" }}
            >
              {selectedDate ? selectedDate.toLocaleDateString("en-GB") : "Date"} {/* Show "Date" if none selected */}
            </span>
            <span className="separator-log">|</span>
            <span
              className={`search4-option ${
                activeOption === "activity" ? "active" : ""
              }`}
              onClick={() => handleOptionClick("activity")}
              style={{ color: missingSelection && selectedActivity === "Activity" ? "red" : "inherit" }}
            >
              <div className="sss">
                <p>
                  {selectedActivity}
                </p>
              </div>
              {isActivityDropdownVisible && (
                <div className="dropdown2">
                  <ul>
                    {activities.map((activity, index) => (
                      <li
                        key={index}
                        onClick={() => handleActivitySelect(activity)}
                        className="dropdown-item"
                      >
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </span>
          </div>
          <button className="intro-search-button" onClick={handleSearchClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="intro-search-icon"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
        {showDobCalendar && (
          <div className="calendar-dropdown">
            <Calendar2
              onChange={handleDobChange}
              value={new Date()} // Set to current date by default
              maxDate={new Date()} // Restrict to dates in the past
              className="custom-cal"
            />
          </div>
        )}
        {showCalendar && (
          <div className="calendar-dropdown2">
            <Calendar2
              onChange={handleDateChange}
              value={selectedDate || new Date()} // Default to current date if none selected
              minDetail="month" // Show months
              className="custom-cal"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroSearch;
