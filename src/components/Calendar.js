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
    font-family: 'Poppins', sans-serif;
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
    font-family: 'Poppins', sans-serif;
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

  justify-content: center;
    padding-top: 1cm;
    height: 17cm;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
  }

  .custom-date-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 1.6rem;
    padding:10px;
    
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #001689;
  }
  
  .custom-date-header-time {
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;

    color: #001689;
    margin-bottom: 20px;
  }

 .react-datepicker {
  border: none;
  width: 100%;
  margin-bottom: 0.5cm;
  
  display: flex;
  justify-content: center; /* Centers content horizontally */
}


  .react-datepicker__header {
    background-color: white;
    border-bottom: none;
    padding: 0;
  }

  .react-datepicker__current-month {
    color: #001689;
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 20px;
  }

  .react-datepicker__day-names {
    display: flex;
    border-bottom: 1px solid #e4e7ea;
    padding-bottom: 5px;
    justify-content: space-around;
    color: #fff;
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 20px;
  }

  .react-datepicker__day {
    margin: 5px;
    width: 40px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
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
    margin-top:20px;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: #16d298;
      color: white;
      border-radius: 25px;
      padding: 10px 20px;
      border: none;
      display: flex;
      cursor: pointer;
      align-items: center;
      font-size: 1.2rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 300px;

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

  // @media (max-width: 768px) {
  //   width: 100%;
  //   padding: 10px;

  //   .calendar-content {
  //     height: auto;
  //     width: 100%;
  //     padding: 20px;
  //     padding-top: 0.5cm;
  //     margin-top: 5px;
  //   }

  //   .custom-date-header {
  //     font-size: 1.4rem;
  //     margin-bottom: 10px;
  //   }

  //   .custom-date-header-time {
  //     font-size: 1rem;
  //     margin-bottom: 10px;
  //   }

  //   .react-datepicker__current-month {
  //     font-size: 1.2rem;
  //   }

  //   .react-datepicker__day-names {
  //     font-size: 1rem;
  //   }

  //   .react-datepicker__day {
  //     width: 30px;
  //     height: 30px;
  //   }

  //   .date-line {
  //     font-size: 1rem;
  //   }

  //   .day {
  //     font-size: 0.9rem;
  //     padding: 3px 8px;
  //   }

  //   .highlighted-day {
  //     padding: 3px 8px;
  //   }

  //   .calender-book-button {
  //     flex-direction: row;
  //     align-items: flex-start;

  //     button {
  //       font-size: 0.9rem;
  //       padding: 8px 15px;
       
  //     }

  //     select {
  //       font-size: 1rem;
  //       margin-right: 0;
  //     }
  //   }
  // }
  @media (min-width: 1800px) {
    height: 25cm;
    width: 15cm;
    padding: 20px;

    .calendar-content {
      height: 20cm;
      padding: 20px;
    }
    .date-line {
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: #001689;
    margin-left: 20px;
    margin-bottom:10px;
  }
.days-row {
    display: flex;
    justify-content: space-around;
    border-radius: 50px;
    border: 1px solid #f2f2f3;
    padding: 20px 0;
    margin-bottom: 15px;
  }
    .custom-date-header {
      font-size: 2rem;
      margin-bottom: 30px;
    }

    .custom-date-header-time {
      font-size: 1.5rem;
      margin-bottom: 30px;
    }

    .react-datepicker__current-month {
      font-size: 2rem;
    }

    .react-datepicker__day-names {
      font-size: 1.5rem;
    }

    .react-datepicker__day {
      width: 50px;
      height: 60px;
      font-size: 2rem;
    }

    .day, .highlighted-day {
      font-size: 1.4rem;
      padding: 8px 12px;
    }

    .calender-book-button {
      button {
        font-size: 1.5rem;
        padding: 12px 25px;
      }

      select {
        font-size: 1.5rem;
      }
    }
  }

  /* Media Query for screens larger than 2000px */
  @media (min-width: 2000px) {
    height: 28cm;
    width: 18cm;
    padding: 25px;

    .calendar-content {
      height: 22cm;
      padding: 25px;
    }

    .custom-date-header {
      font-size: 2.2rem;
      margin-bottom: 35px;
    }

    .custom-date-header-time {
      font-size: 1.7rem;
      margin-bottom: 35px;
    }

    .react-datepicker__current-month {
      font-size: 2.2rem;
    }

    .react-datepicker__day-names {
      font-size: 1.8rem;
    }

    .react-datepicker__day {
      width: 55px;
      height: 70px;
      font-size: 2.2rem;
    }

    .day, .highlighted-day {
      font-size: 1.6rem;
      padding: 10px 15px;
    }

    .calender-book-button {
      button {
        font-size: 1.8rem;
        padding: 15px 30px;
      }

      select {
        font-size: 1.8rem;
      }
    }
  }

  /* Media Query for screens larger than 3000px */
  @media (min-width: 3000px) {
    height: 35cm;
    width: 22cm;
    padding: 30px;

    .calendar-content {
      height: auto;
      padding: 30px;
    }

    .custom-date-header {
      font-size: 2.5rem;
      margin-bottom: 40px;
    }

    .custom-date-header-time {
      font-size: 2rem;
      margin-bottom: 40px;
    }

    .react-datepicker__current-month {
      font-size: 2.5rem;
    }

    .react-datepicker__day-names {
      font-size: 2rem;
    }

    .react-datepicker__day {
      width: 80px;
      height: 75px;
      font-size: 2.5rem;
    }

    .day, .highlighted-day {
      font-size: 1.8rem;
      padding: 12px 18px;
    }

    .calender-book-button {
      button {
        font-size: 2rem;
        padding: 20px 35px;
        margin-top:10%;
      }

      select {
        font-size: 2rem;
      }
    }
  }


  @media (max-width: 500px) {

  width: 100%;
  height: 10cm;
    padding: 10px;
    
    .custom-date-header {
      font-size: 1.2rem;
    }
    .calendar-content {
    height: 14cm;}
    .custom-date-header-time {
      font-size: 0.9rem;
    }

    .react-datepicker__day-names {
      font-size: 0.9rem;
    }

    .react-datepicker__day {
      width: 28px;
      height: 28px;
      font-size: 1.2rem;
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

const Calendar = ({ course, provider }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [courseDetails, setCourseDetails] = useState(null);
  const [allowedDays, setAllowedDays] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const courseId = '66ab808e13912199840ad54b';
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`https://kidgage-backend.onrender.com/api/courses/course/${courseId}`);
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
  const handleBookNow = () => {
    if (selectedDate && selectedTime) {
      const formattedDate = formatDate(selectedDate);
      const timeSlot = courseDetails.timeSlots.find(slot => slot._id === selectedTime);
      const message = `I'd like to book the course "${course}" provided by ${provider} on ${formattedDate} during the time slot ${timeSlot.from} - ${timeSlot.to}.`;
      const phoneNumber = '9447526695'; // Your phone number
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, '_blank');
    } else {
      alert("Please select both a date and a time slot.");
    }
  };
  return (
    <CustomDatePickerWrapper>
      <div className="calendar-row">
        <FaCalendarAlt size={35} color="#001689" marginBottom='20px' />
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
          <button onClick={handleBookNow}>
            <FaWhatsapp style={{ marginRight: '10px' }} /> Book Now
          </button>
        </div>
      </div>
    </CustomDatePickerWrapper>
  );
};

export default Calendar;
