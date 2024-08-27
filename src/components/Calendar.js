import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt, FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';

const CustomDatePickerWrapper = styled.div`
  height: 20cm;
  width: 11cm;
  font-family: Arial, sans-serif;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;

  .calendar-row {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .date-line {
    font-size: 1.2rem;
    font-weight: 500;
    color: #001689;
    margin-left: 10px;
  }

  .days-row {
    display: flex;
    justify-content: space-around;
    border-radius: 50px;
    border: 1px solid #f2f2f3;
    padding: 5px 0;
    margin-bottom: 15px;
  }

  .day {
    font-size: 1rem;
    font-weight: bold;
    color: #4a5d8d;
    padding: 5px 10px;
    background-color: #fff;
  }

  .highlighted-day {
    color: #4a5d8d;
    background-color: #ecfdda;
    border: 1px solid #ace96c;
    border-radius: 50%;
    padding: 5px 10px;
  }

  .calendar-content {
    padding: 15px;
    padding-top: 1cm;
    height: 15cm;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
  }

  .custom-date-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 1.6rem;
    font-weight: 600;
    color: #001689;
  }
  
  .custom-date-header-time {
    font-size: 1.2rem;
    font-weight: 600;
    color: #001689;
    margin-bottom: 20px;
  }

  .react-datepicker {
    border: none;
    width: 100%;
    margin-bottom: .5cm;
  }

  .react-datepicker__header {
    background-color: white;
    border-bottom: none;
    padding: 0;
  }

  .react-datepicker__current-month {
    color: #001689;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .react-datepicker__day-names {
    display: flex;
    border-bottom: 1px solid #e4e7ea;
    padding-bottom: 5px;
    justify-content: space-around;
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  .react-datepicker__day {
    margin: 5px;
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: #001689;
    background-color: #ecfdda;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: #001689;
    color: white;
  }

  .react-datepicker__day--today {
    border: 2px solid #001689;
  }

  .react-datepicker__day:hover {
    background-color: #e0e7ff;
  }

  .react-datepicker__day--disabled {
    color: #ccc;
    background-color: #fff;
  }

  .calender-book-button {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: #16d298;
      color: white;
      border-radius: 25px;
      padding: 10px 20px;
      border: none;
      display: flex;
      align-items: center;
      font-size: 1rem;
      font-weight: bold;

      svg {
        margin-left: 8px;
      }
    }
  }

  select {
    color: #525975;
    font-size: 1.2rem;
    border: none;
    font-weight: bold;
    margin-right: 15px;
  }

  @media (max-width: 768px) {
    width: 70%;
    padding: 10px;

    .calendar-content {
      height: auto;
      padding: 20px;
      padding-top: 0.5cm;
      margin-top: 5px;
    }

    .custom-date-header {
      font-size: 1.4rem;
      margin-bottom: 10px;
    }

    .custom-date-header-time {
      font-size: 1rem;
      margin-bottom: 10px;
    }

    .react-datepicker__current-month {
      font-size: 1.2rem;
    }

    .react-datepicker__day-names {
      font-size: 1rem;
    }

    .react-datepicker__day {
      width: 30px;
      height: 30px;
    }

    .date-line {
      font-size: 1rem;
    }

    .day {
      font-size: 0.9rem;
      padding: 3px 8px;
    }

    .highlighted-day {
      padding: 3px 8px;
    }

    .calender-book-button {
      flex-direction: row;
      align-items: flex-start;

      button {
        font-size: 0.9rem;
        padding: 8px 15px;
       
      }

      select {
        font-size: 1rem;
        margin-right: 0;
      }
    }
  }

  @media (max-width: 480px) {
  width: 100%;
    padding: 10px;
    .custom-date-header {
      font-size: 1.2rem;
    }

    .custom-date-header-time {
      font-size: 0.9rem;
    }

    .react-datepicker__day-names {
      font-size: 0.9rem;
    }

    .react-datepicker__day {
      width: 28px;
      height: 28px;
    }

    .day, .highlighted-day {
      font-size: 0.8rem;
      padding: 2px 6px;
    }

    .calender-book-button {
      button {
        font-size: 0.8rem;
        padding: 6px 12px;
      }

      select {
        font-size: 0.9rem;
      }
    }
  }
`;

const CustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [courseDetails, setCourseDetails] = useState(null);
  const [allowedDays, setAllowedDays] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const courseId = '66ab808e13912199840ad54b';
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/courses/course/${courseId}`);
        const courseData = response.data;

        setCourseDetails(courseData);
        setAllowedDays(courseData.days.map(day => daysMapping[day]));
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  const daysMapping = { "Sun": 0, "Mon": 1, "Tue": 2, "Wed": 3, "Thu": 4, "Fri": 5, "Sat": 6 };

  const filterDates = (date) => {
    const day = date.getDay();
    const isAllowedDay = allowedDays.includes(day);
    const isFutureDate = date >= new Date().setHours(0, 0, 0, 0); // Ensure it's today or a future date
    return isAllowedDay && isFutureDate;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' }; // "October 1, 2024"
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <CustomDatePickerWrapper>
      <div className="calendar-row">
        <FaCalendarAlt size={24} color="#001689" />
        {courseDetails && (
          <div className="date-line">
            {formatDate(courseDetails.startDate)} - {formatDate(courseDetails.endDate)}
          </div>
        )}
      </div>

      <div className="days-row">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, index) => (
          <div key={day} className={`day ${allowedDays.includes(index) ? "highlighted-day" : ""}`}>
            {day}
          </div>
        ))}
      </div>

      <div className='calendar-content'>
        <div className="custom-date-header">
          <FaCalendarAlt size={27} color="#001689" style={{ marginRight: '10px' }} />
          Single <br />
        </div>
        <div className='custom-date-header-time'>Select a date and time:</div>

        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          filterDate={filterDates}
          minDate={new Date(courseDetails?.startDate)}
          maxDate={new Date(courseDetails?.endDate)}
          inline
        />

        <div className="calender-book-button">
          <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
            <option value="" disabled>Select Timing</option>
            {courseDetails?.timeSlots.map((slot, index) => (
              <option key={index} value={slot._id}>{`${slot.from} - ${slot.to}`}</option>
            ))}
          </select>
          <button>
            Book Now <FaWhatsapp />
          </button>
        </div>
      </div>
    </CustomDatePickerWrapper>
  );
};

export default CustomCalendar;
