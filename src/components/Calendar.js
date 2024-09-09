import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt, FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';

const CustomDatePickerWrapper = styled.div`
   height:33vw;
  width: 22vw;
  font-family: Arial, sans-serif;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;

  .calendar-row {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .first-calender-icon{
  color: #3880C4;
   marginBottom: 20px;
   font-size: 1.5rem;
   margin-right: 10px;
}
  .date-line {
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color:  #3880C4;
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
    color:  #3880C4;
    padding: 5px 10px;
    background-color: #fff;
  }

  .highlighted-day {
    color:  #3880C4;
    background-color: #ecfdda;
    border: 1px solid #ace96c;
    border-radius: 50%;
    padding: 5px 10px;
  }

  .calendar-content {
    padding: 15px;

  justify-content: center;
    padding-top: 1.5vw;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
  }

  .custom-date-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 1.5rem;
    padding:10px;
    
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #3880C4;
  }
  
  .custom-date-header-time {
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;

    color: #3880C4;
    margin-bottom: 10px;
  }

 .react-datepicker {
  border: none;
  width: 90%;
  margin-bottom: 1vw;
  margin-left:1vw;
  display: flex;
  align-self: center;
  justify-content: center; /* Centers content horizontally */
}


  .react-datepicker__header {
    background-color: white;
    border-bottom: none;
    padding: 0;
  }

  .react-datepicker__current-month {
    color: #3880C4;
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 20px;
  }

  .react-datepicker__day-names {
    display: flex;
    border-bottom: 1px solid #e4e7ea;
    padding-bottom: 5px;
    justify-content: space-around;
    color: #fff;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 10px;
  }

  .react-datepicker__day {
    margin: 5px;
    width: 2vw;
    height: 2vw;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    color: #001689;
    background-color: #ecfdda;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: #3880C4;
    color: white;
  }

  .react-datepicker__day--today {
    border: 2px solid #3880C4;
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
      padding: 5px 20px;
      border: none;
      display: flex;
      cursor: pointer;
      align-items: center;
      font-size: 1rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 300px;

      svg {
        margin-left: 8px;
      }
    }
  }

  select {
    color: #3880C4;
    font-size: 1.2rem;
    border: none;
    font-weight: bold;
    margin-right: 15px;
  }
  @media (max-width: 1200px) {
    height: 38vw;
    width: 28vw;
    .calendar-row {
    margin-bottom: 10px;
  }
  .first-calender-icon{
   marginBottom: 20px;
   font-size: 1.2rem;
  }
  .date-line {
    font-size: 1rem;
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
    font-size: .8rem;
    padding: 3px 8px;
  
  }

  .highlighted-day {
    color:  #3880C4;
    background-color: #ecfdda;
    border: 1px solid #ace96c;
    border-radius: 50%;
    padding: 3px 8px;
  }

  .calendar-content {
    padding: 15px;

  justify-content: center;
    padding-top: 1vw;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
  }

  .custom-date-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 1.2rem;
    padding:10px;
    
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #3880C4;
  }
  
  .custom-date-header-time {
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;

    color: #3880C4;
    margin-bottom: 10px;
  }

 .react-datepicker {
  border: none;
  width: 90%;
  margin-bottom: 1vw;
  margin-left:1vw;
  display: flex;
  align-self: center;
  justify-content: center; /* Centers content horizontally */
}


  .react-datepicker__header {
    background-color: white;
    border-bottom: none;
    padding: 0;
  }

  .react-datepicker__current-month {
    font-size: 1rem;

    margin-bottom: 10px;
  }

  .react-datepicker__day-names {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  .react-datepicker__day {
    margin: 3px;
    width: 2.5vw;
    height: 2.5vw;
    font-size: .8rem;
  }
  .calender-book-button {
    display: flex;
    margin-top:10px;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: #16d298;
      color: white;
      border-radius: 25px;
      padding: 5px 5px;
      border: none;
      display: flex;
      cursor: pointer;
      align-items: center;
      font-size: .8rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 300px;

      svg {
        margin-left: 0px;
      }
    }
  }

  select {
    color: #3880C4;
    font-size: 1rem;
    border: none;
    font-weight: bold;
    margin-right: 15px;
  }
  }
  @media (max-width: 1079px) {
    height: 50vw;
    width: 35vw;
    .calendar-row {
    margin-bottom: 10px;
  }
  .first-calender-icon{
   marginBottom: 20px;
   font-size: 1.2rem;
}
  .date-line {
    font-size: 1rem;
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
    font-size: .8rem;
    padding: 3px 8px;
  
  }

  .highlighted-day {
    color:  #3880C4;
    background-color: #ecfdda;
    border: 1px solid #ace96c;
    border-radius: 50%;
    padding: 3px 8px;
  }

  .calendar-content {
    padding: 15px;

  justify-content: center;
    padding-top: 1vw;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
  }

  .custom-date-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 1.2rem;
    padding:10px;
    
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #3880C4;
  }
  
  .custom-date-header-time {
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;

    color: #3880C4;
    margin-bottom: 10px;
  }

 .react-datepicker {
  border: none;
  width: 90%;
  margin-bottom: 1vw;
  margin-left:1vw;
  display: flex;
  align-self: center;
  justify-content: center; /* Centers content horizontally */
}


  .react-datepicker__header {
    background-color: white;
    border-bottom: none;
    padding: 0;
  }

  .react-datepicker__current-month {
    font-size: 1rem;

    margin-bottom: 10px;
  }

  .react-datepicker__day-names {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  .react-datepicker__day {
    margin: 8px;
    width: 2vw;
    height: 2.5vw;
    font-size: 1rem;
  }
  .calender-book-button {
    display: flex;
    margin-top:2.5vw;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: #16d298;
      color: white;
      border-radius: 25px;
      padding: 5px 10px;
      border: none;
      display: flex;
      cursor: pointer;
      align-items: center;
      font-size: .8rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 300px;

      svg {
        margin-left: 0px;
      }
    }
  }

  select {
    color: #3880C4;
    font-size: 1rem;
    border: none;
    font-weight: bold;
    margin-right: 15px;
  }
  }
  @media (max-width: 1560px) {
    height: 40vw;
    width: 25vw;
    .calendar-row {
    margin-bottom: 10px;
  }
  .first-calender-icon{
   marginBottom: 20px;
   font-size: 1.2rem;
}
  .date-line {
    font-size: 1rem;
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
    font-size: .8rem;
    padding: 3px 8px;
  
  }

  .highlighted-day {
    color:  #3880C4;
    background-color: #ecfdda;
    border: 1px solid #ace96c;
    border-radius: 50%;
    padding: 3px 8px;
  }

  .calendar-content {
    padding: 15px;

  justify-content: center;
    padding-top: 1vw;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
  }

  .custom-date-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 1.2rem;
    padding:10px;
    
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #3880C4;
  }
  
  .custom-date-header-time {
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;

    color: #3880C4;
    margin-bottom: 10px;
  }

 .react-datepicker {
  border: none;
  width: 90%;
  margin-bottom: 1vw;
  margin-left:1vw;
  display: flex;
  align-self: center;
  justify-content: center; /* Centers content horizontally */
}


  .react-datepicker__header {
    background-color: white;
    border-bottom: none;
    padding: 0;
  }

  .react-datepicker__current-month {
    font-size: 1rem;

    margin-bottom: 10px;
  }

  .react-datepicker__day-names {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  .react-datepicker__day {
    margin: 5px;
    width: 2vw;
    height: 2.5vw;
    font-size: 1rem;
  }
  .calender-book-button {
    display: flex;
    margin-top:2.5vw;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: #16d298;
      color: white;
      border-radius: 25px;
      padding: 5px 10px;
      border: none;
      display: flex;
      cursor: pointer;
      align-items: center;
      font-size: .8rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 300px;

      svg {
        margin-left: 0px;
      }
    }
  }

  select {
    color: #3880C4;
    font-size: 1rem;
    border: none;
    font-weight: bold;
    margin-right: 15px;
  }
  }
  @media (min-width: 1900px) {
    height: 37vw;
    width: 23vw;
    .calendar-row {
    margin-bottom: 10px;
  }
  .first-calender-icon{
   marginBottom: 20px;
   font-size: 2rem;
}
  .date-line {
    font-size: 1.5rem;
  }

  .days-row {
    display: flex;
    justify-content: space-around;
    border-radius: 50px;
    border: 1px solid #f2f2f3;
    padding: 8px 0;
    margin-bottom: 15px;
  }

  .day {
    font-size: 1.5rem;
    padding: 5px 10px;
  
  }

  .highlighted-day {
    color:  #3880C4;
    background-color: #ecfdda;
    border: 1px solid #ace96c;
    border-radius: 50%;
    padding: 8px 10px;
  }

  .calendar-content {
    padding: 20px;

  justify-content: center;
    padding-top: 1vw;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
  }

  .custom-date-header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    font-size: 2.5rem;
    padding:10px;
    
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #3880C4;
  }
  
  .custom-date-header-time {
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;

    color: #3880C4;
    margin-bottom: 40px;
  }

 .react-datepicker {
  border: none;
  width: 100%;
  margin-bottom: 1vw;
  margin-left:0;
  display: flex;
  align-self: center;
  justify-content: center; /* Centers content horizontally */
}


  .react-datepicker__header {
    background-color: white;
    border-bottom: none;
    padding: 0;
  }

  .react-datepicker__current-month {
    font-size: 2rem;

    margin-bottom: 30px;
  }

  .react-datepicker__day-names {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }

  .react-datepicker__day {
    margin: 3px;
    width: 2vw;
    height: 2.5vw;
    font-size: 1.5rem;
  }
  .calender-book-button {
    display: flex;
    margin-top:2.5vw;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: #16d298;
      color: white;
      border-radius: 25px;
      padding: 5px 10px;
      border: none;
      display: flex;
      cursor: pointer;
      align-items: center;
      font-size: 1.2rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 300px;

      svg {
        margin-left: 0px;
      }
    }
  }

  select {
    color: #3880C4;
    font-size: 1.5rem;
    border: none;
    font-weight: bold;
    margin-right: 10px;
  }
  }
   @media (max-width: 1080px) {
    height: 53vw;
    width: 38vw;
    .calendar-row {
    margin-bottom: 10px;
  }
  .first-calender-icon{
   marginBottom: 20px;
   font-size: 1.2rem;
}
  .date-line {
    font-size: 1rem;
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
    font-size: .8rem;
    padding: 3px 8px;
  
  }

  .highlighted-day {
    color:  #3880C4;
    background-color: #ecfdda;
    border: 1px solid #ace96c;
    border-radius: 50%;
    padding: 3px 8px;
  }

  .calendar-content {
    padding: 15px;

  justify-content: center;
    padding-top: 1vw;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
  }

  .custom-date-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 1.2rem;
    padding:10px;
    
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #3880C4;
  }
  
  .custom-date-header-time {
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;

    color: #3880C4;
    margin-bottom: 10px;
  }

 .react-datepicker {
  border: none;
  width: 90%;
 
  margin-bottom: 0;
  margin-left:1vw;
  display: flex;
  align-self: center;
  justify-content: center; /* Centers content horizontally */
}


  .react-datepicker__header {
    background-color: white;
    border-bottom: none;
    padding: 0;
  }

  .react-datepicker__current-month {
    font-size: 1rem;

    margin-bottom: 10px;
  }

  .react-datepicker__day-names {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  .react-datepicker__day {
    margin: 5px;
    width: 3vw;
    height: 3vw;
    font-size: 1rem;
  }
  .calender-book-button {
    display: flex;
    margin-top:3vw;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: #16d298;
      color: white;
      border-radius: 25px;
      padding: 5px 10px;
      border: none;
      display: flex;
      cursor: pointer;
      align-items: center;
      font-size: .6rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 300px;

      svg {
        margin-left: 0px;
      }
    }
  }

  select {
    color: #3880C4;
    font-size: 1rem;
    border: none;
    font-weight: bold;
    margin-right: 15px;
  }
  }
  @media (max-width: 768px) {
    height: 65vw;
    width: 45vw;
    .calendar-row {
    margin-bottom: 10px;
  }
  .first-calender-icon{

   font-size: 1.2rem;
}
  .date-line {
    font-size: .8rem;
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
    font-size: .8rem;
    padding: 3px 8px;
  
  }

  .highlighted-day {
    color:  #3880C4;
    background-color: #ecfdda;
    border: 1px solid #ace96c;
    border-radius: 50%;
    padding: 3px 8px;
  }

  .calendar-content {
    padding: 15px;

  justify-content: center;
    padding-top: 1vw;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
  }

  .custom-date-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 1.2rem;
    padding:10px;
    
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #3880C4;
  }
  
  .custom-date-header-time {
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;

    color: #3880C4;
    margin-bottom: 10px;
  }

 .react-datepicker {
  border: none;
  width: 90%;
 
  margin-bottom: 0;
  margin-left:1vw;
  display: flex;
  align-self: center;
  justify-content: center; /* Centers content horizontally */
}


  .react-datepicker__header {
    background-color: white;
    border-bottom: none;
    padding: 0;
  }

  .react-datepicker__current-month {
    font-size: 1rem;

    margin-bottom: 10px;
  }

  .react-datepicker__day-names {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  .react-datepicker__day {
    margin: 4px;
    width: 4vw;
    height: 4vw;
    font-size: 1rem;
  }
  .calender-book-button {
    display: flex;
    margin-top:2vw;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: #16d298;
      color: white;
      border-radius: 25px;
      padding: 5px 10px;
      border: none;
      display: flex;
      cursor: pointer;
      align-items: center;
      font-size: .6rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 300px;

      svg {
        margin-left: 0px;
      }
    }
  }

  select {
    color: #3880C4;
    font-size: 1rem;
    border: none;
    font-weight: bold;
    margin-right: 15px;
  }
  }
  @media (max-width: 600px) {
    height: 80vw;
    width: 55vw;
    .calendar-row {
    margin-bottom: 10px;
  }
  .first-calender-icon{

   font-size: 1.2rem;
}
  .date-line {
    font-size: .8rem;
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
    font-size: .8rem;
    padding: 3px 8px;
  
  }

  .highlighted-day {
    color:  #3880C4;
    background-color: #ecfdda;
    border: 1px solid #ace96c;
    border-radius: 50%;
    padding: 3px 8px;
  }

  .calendar-content {
    padding: 15px;

  justify-content: center;
    padding-top: 1vw;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
  }

  .custom-date-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 1.2rem;
    padding:10px;
    
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #3880C4;
  }
  
  .custom-date-header-time {
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;

    color: #3880C4;
    margin-bottom: 10px;
  }

 .react-datepicker {
  border: none;
  width: 90%;
 
  margin-bottom: 0;
  margin-left:1vw;
  display: flex;
  align-self: center;
  justify-content: center; /* Centers content horizontally */
}


  .react-datepicker__header {
    background-color: white;
    border-bottom: none;
    padding: 0;
  }

  .react-datepicker__current-month {
    font-size: 1rem;

    margin-bottom: 10px;
  }

  .react-datepicker__day-names {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  .react-datepicker__day {
    margin: 4px;
    width: 4vw;
    height: 4vw;
    font-size: 1rem;
  }
  .calender-book-button {
    display: flex;
    margin-top:2vw;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: #16d298;
      color: white;
      border-radius: 25px;
      padding: 5px 10px;
      border: none;
      display: flex;
      cursor: pointer;
      align-items: center;
      font-size: .6rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 300px;

      svg {
        margin-left: 0px;
      }
    }
  }

  select {
    color: #3880C4;
    font-size: 1rem;
    border: none;
    font-weight: bold;
    margin-right: 15px;
  }
  }
  @media (max-width: 500px) {
    height: 95vw;
    width: 70vw;
    .calendar-row {
    margin-bottom: 10px;
  }
  .first-calender-icon{

   font-size: 1.2rem;
}
  .date-line {
    font-size: .8rem;
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
    font-size: .8rem;
    padding: 3px 8px;
  
  }

  .highlighted-day {
    color:  #3880C4;
    background-color: #ecfdda;
    border: 1px solid #ace96c;
    border-radius: 50%;
    padding: 3px 8px;
  }

  .calendar-content {
    padding: 15px;

  justify-content: center;
    padding-top: 1vw;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
  }

  .custom-date-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 1rem;
    padding:10px;
    
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #3880C4;
  }
  
  .custom-date-header-time {
    font-size: .8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;

    color: #3880C4;
    margin-bottom: 10px;
  }

 .react-datepicker {
  border: none;
  width: 90%;
 
  margin-bottom: 0;
  margin-left:1vw;
  display: flex;
  align-self: center;
  justify-content: center; /* Centers content horizontally */
}


  .react-datepicker__header {
    background-color: white;
    border-bottom: none;
    padding: 0;
  }

  .react-datepicker__current-month {
    font-size: .8rem;

    margin-bottom: 10px;
  }

  .react-datepicker__day-names {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  .react-datepicker__day {
    margin: 4px;
    width: 5vw;
    height: 5vw;
    font-size: .8rem;
  }
  .calender-book-button {
    display: flex;
    margin-top:2vw;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: #16d298;
      color: white;
      border-radius: 25px;
      padding: 5px 10px;
      border: none;
      display: flex;
      cursor: pointer;
      align-items: center;
      font-size: .6rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 300px;

      svg {
        margin-left: 0px;
      }
    }
  }

  select {
    color: #3880C4;
    font-size: .8rem;
    border: none;
    font-weight: bold;
    margin-right: 5px;
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
        <FaCalendarAlt className="first-calender-icon" />
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
          <FaCalendarAlt className='first-calender-icon' />
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