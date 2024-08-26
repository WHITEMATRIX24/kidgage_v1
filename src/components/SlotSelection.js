import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './SlotSelection.css';
import football from './assets/images/football.jpg';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const SlotSelection = () => {
  const location = useLocation();
  const courseId = location.state?.classId;
  const [course, setCourse] = useState(null);
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate('/bookingform', {
      state: {
        course,
        selectedSlot,
        startDate: course.startDate,
        endDate: course.endDate,
        providerName: provider.username // Pass provider name
      }
    });
  };
  

  useEffect(() => {
    const fetchCourseAndProvider = async () => {
      try {
        const courseResponse = await axios.get(`http://localhost:5000/api/courses/course/${courseId}`);
        const courseData = courseResponse.data;
        setCourse(courseData);

        const providerResponse = await axios.get(`http://localhost:5000/api/users/provider/${courseData.providerId}`);
        setProvider(providerResponse.data);

        setAvailableSlots(courseData.timeSlots.map(slot => `${slot.from} to ${slot.to}`));
      } catch (error) {
        console.error('Error fetching course or provider:', error);
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      fetchCourseAndProvider();
    }
  }, [courseId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!course || !provider) {
    return <div>Course or provider not found</div>;
  }

  return (
    <div className="slot-container">
      <nav aria-label="breadcrumb" className="slot-header">
        
        <ol className="breadcrumb slot-breadcrumb">
        
        <li className="breadcrumb-item"><a href="#home" className="slot-back-link">Home</a></li>
          <li className="breadcrumb-item"><a href="#category">{provider.academyType}</a></li>
          <li className="breadcrumb-item active" aria-current="page">{course.name}</li>
        </ol>
      </nav>
      <div className='slot-side-by'>
        <div className='slot-event-image'>
          <img src={football}></img>
        </div>
      <div className="slot-event-details">
        <h1>{course.name}</h1>
        <h2>(Provider: {provider.username})</h2>
        <p>{course.description}</p>
        
        <p>⏳ {course.duration} {course.durationUnit}</p>
        <p>💲 {course.feeAmount} {course.feeType}</p>
        <p>📍<a href={course.location}>View Location</a></p>
        <p> {course.days.join(', ')}</p>
        <p>📅{new Date(course.startDate).toLocaleDateString()} to {new Date(course.endDate).toLocaleDateString()}</p>
      </div>
      <div className="slot-booking-section">
        <h3>Select a Slot</h3>
        
        <div className="slot-time-selector">
          <p>Select a time:</p>
          {availableSlots.map((slot, index) => (
            <div key={index} className="slot-radio-container">
              <input
                type="radio"
                id={`slot-${index}`}
                name="slot"
                value={slot}
                checked={selectedSlot === slot}
                onChange={() => setSelectedSlot(slot)}
                disabled={availableSlots.length === 1}
              />
              <label htmlFor={`slot-${index}`} className="slot-radio-button"></label>
              <label htmlFor={`slot-${index}`}>{slot}</label>
            </div>
          ))}
        </div>
        <button className="slot-book-button" onClick={handleBookNowClick}>
          <span className="slot-book-icon"><i className="fa fa-bolt"></i> </span>
          Book Now
        </button>
        </div>
      </div>
    </div>
  );
};

export default SlotSelection;
