import { useNavigate } from 'react-router-dom';
import { Pagination } from '@mui/material';
import Box from '@mui/material/Box';
import image from '../components/assets/images/image.png';
import banner1 from '../components/assets/images/AD01.png'
import banner2 from '../components/assets/images/AD02 copfy.png'
import football1 from '../components/assets/images/foot1.jpg'
import football2 from '../components/assets/images/foot2.jpg'
import football from '../components/assets/images/child-613199_1280.jpg'
import football3 from '../components/assets/images/soccer-7392844_1280.jpg'
import football4 from '../components/assets/images/foot.jpg'
import logoside from '../components/assets/images/abc.png'
import logo from '../components/assets/images/abs.png'
import calendar from '../components/assets/images/calendar.png'
import baby from '../components/assets/images/baby.png'
import share from '../components/assets/images/share.png'
import './Activities.css';
import './AcademyList.css';
import Footer from './Footer';
import Header2 from './Header2';
import ico from './assets/images/ico.png';
import SearchBar from './SearchBar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const activities = [
    {
        id: 1,
        image: require('../components/assets/images/child-613199_1280.jpg'),
        logoImage: require('../components/assets/images/abs.png'),
        baby: require('../components/assets/images/baby.png'),
        calendar: require('../components/assets/images/calendar.png'),
        title: 'Summer Football Camp',
        ageRange: '0 - 15ys 9ms',
        days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        activeDays: ['Mo', 'Fr'], // Days that are active
        description:
            'Join us for an exhilarating morning football camp designed for young athletes eager to develop their skills and enjoy the beautiful game. Our camp offers a perfect blend of fun, fitness, and football fundamentals, tailored to players of all ...',
        location: 'Location ',
        reviews: '100+ reviews',
        rating: '⭐⭐⭐⭐⭐',
        promoted: false,
    },
    {
        id: 2,
        image: require('../components/assets/images/foot1.jpg'),
        logoImage: require('../components/assets/images/abs.png'),
        baby: require('../components/assets/images/baby.png'),
        calendar: require('../components/assets/images/calendar.png'),
        title: 'Summer Football Camp',
        ageRange: '0 - 15ys 9ms',
        days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        activeDays: ['Mo', 'Fr'], // Days that are active
        description:
            'Join us for an exhilarating morning football camp designed for young athletes eager to develop their skills and enjoy the beautiful game. Our camp offers a perfect blend of fun, fitness, and football fundamentals, tailored to players of all ...',
        location: 'Location ',
        reviews: '100+ reviews',
        rating: '⭐⭐⭐⭐⭐',
        promoted: false,
    },
    {
        id: 3,
        image: require('../components/assets/images/foot2.jpg'),
        logoImage: require('../components/assets/images/abs.png'),
        baby: require('../components/assets/images/baby.png'),
        calendar: require('../components/assets/images/calendar.png'),
        title: 'Summer Football Camp',
        ageRange: '0 - 15ys 9ms',
        days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        activeDays: ['Mo', 'Fr'], // Days that are active
        description:
            'Join us for an exhilarating morning football camp designed for young athletes eager to develop their skills and enjoy the beautiful game. Our camp offers a perfect blend of fun, fitness, and football fundamentals, tailored to players of all ...',
        location: 'Location ',
        reviews: '100+ reviews',
        rating: '⭐⭐⭐⭐⭐',
        promoted: false,
    },
    {
        id: 4,
        image: require('../components/assets/images/foot.jpg'),
        logoImage: require('../components/assets/images/abs.png'),
        baby: require('../components/assets/images/baby.png'),
        calendar: require('../components/assets/images/calendar.png'),
        title: 'Summer Football Camp',
        ageRange: '0 - 15ys 9ms',
        days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        activeDays: ['Mo', 'Fr'], // Days that are active
        description:
            'Join us for an exhilarating morning football camp designed for young athletes eager to develop their skills and enjoy the beautiful game. Our camp offers a perfect blend of fun, fitness, and football fundamentals, tailored to players of all ...',
        location: 'Location ',
        reviews: '100+ reviews',
        rating: '⭐⭐⭐⭐⭐',
        promoted: false,
    },
    {
        id: 5,
        image: require('../components/assets/images/soccer-7392844_1280.jpg'),
        logoImage: require('../components/assets/images/abc.png'),
        baby: require('../components/assets/images/baby.png'),
        calendar: require('../components/assets/images/calendar.png'),
        title: 'Summer Football Camp',
        ageRange: '0 - 15ys 9ms',
        days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        activeDays: ['Mo', 'Fr'], // Days that are active
        description:
            'Join us for an exhilarating morning football camp designed for young athletes eager to develop their skills and enjoy the beautiful game. Our camp offers a perfect blend of fun, fitness, and football fundamentals, tailored to players of all ...',
        location: 'Location ',
        reviews: '100+ reviews',
        rating: '⭐⭐⭐⭐⭐',
        promoted: true,
    },
    {
        id: 6,
        image: require('../components/assets/images/child-613199_1280.jpg'),
        logoImage: require('../components/assets/images/abs.png'),
        baby: require('../components/assets/images/baby.png'),
        calendar: require('../components/assets/images/calendar.png'),
        title: 'Summer Football Camp',
        ageRange: '0 - 15ys 9ms',
        days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        activeDays: ['Mo', 'Fr'], // Days that are active
        description:
            'Join us for an exhilarating morning football camp designed for young athletes eager to develop their skills and enjoy the beautiful game. Our camp offers a perfect blend of fun, fitness, and football fundamentals, tailored to players of all ...',
        location: 'Location ',
        reviews: '100+ reviews',
        rating: '⭐⭐⭐⭐⭐',
        promoted: true,
    },
    // Add more card objects if needed
];


const Activities = () => {
    const location = useLocation();
    const { category } = location.state || {}; // Get category from state, fallback to empty object
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // Separate the activities based on their promoted status
    const promotedActivities = activities.filter(activity => activity.promoted);
    const nonPromotedActivities = activities.filter(activity => !activity.promoted);

    const sendMessage = (activityName) => {
        const message = `Hello! I am interested in booking the ${activityName} provided by Sparta Academy. Can you please provide more details?`;
        const whatsappUrl = `https://wa.me/9447526695?text=${encodeURIComponent(message)}`;
        console.log("WhatsApp URL:", whatsappUrl); // Log the URL for debugging
        window.open(whatsappUrl, '_blank');
    };
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/activity-info');
    };

    // State to keep track of which dropdowns are open
    const [openDropdowns, setOpenDropdowns] = useState({});

    // Function to toggle dropdown visibility
    const toggleDropdown = (id) => {
        setOpenDropdowns((prevOpenDropdowns) => ({
            ...prevOpenDropdowns,
            [id]: !prevOpenDropdowns[id],
        }));
    };
    useEffect(() => {
        const fetchCourses = async () => {
          try {
            const response = await axios.get('http://localhost:5000/api/courses/by-course-type', {
              params: { courseType: category }
            });
            setCourses(response.data);
            setLoading(false);
          } catch (error) {
            setError('Error fetching courses');
            setLoading(false);
          }
        };
    
        if (category) {
          fetchCourses();
        }
      }, [category]);
    
    return (
        <>
            {/* Fixed Navbar */}
            <Header2 />
            <SearchBar />
            
            {/* promoted */}
            <div style={{ height: '22px' }}>
                    {/* <div className="activities-list">
                {courses.length > 0 ? (
                courses.map((course, index) => (
                    <div key={index} className="course-item">
                    <h2 className="course-name">{course.name}</h2>
                    <p className="course-description">{course.description}</p>
                    <p className="course-fee">Fee: QAR {course.feeAmount}</p>
                    </div>
                ))
                ) : (
                <p>No courses available for this category.</p>
                )}
            </div> */}
            </div>

            <div className='promoted-container'>
                {/* promoted card 1 */}
                {promotedActivities.map((activity) => (
                    <>
                        {/* Render the first card */}
                        <div key={activity.id} className="promoted-card ">
                            <div className="promoted-image" onClick={handleClick}>
                                <img src={activity.image} alt="Activity Image" />
                                <div className="promoted-overlay">
                                    <div className="promoted-label">Promoted</div>
                                </div>
                            </div>
                            <div className="activity-detailss" onClick={handleClick}>
                                <div className='info-with-img'>
                                    <div className='descp'>
                                        <h3>{activity.title}</h3>
                                        <div>
                                            <p className="location">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <span style={{ marginLeft: '5px' }}> {activity.location} </span>
                                            </p>
                                        </div>
                                        <div className="info-row">
                                            <img src={activity.baby}
                                                alt='baby'
                                                style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }}
                                            />
                                            <div className="age-group">
                                                <span className="age-text">{activity.ageRange}</span>
                                            </div>
                                            <img src={activity.calendar}
                                                alt='calendar'
                                                style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }}
                                            />
                                            <div className="day-selector">
                                                {activity.days.map((day) => (
                                                    <span key={day} className={`day ${activity.activeDays.includes(day) ? 'active' : ''}`}>
                                                        {day}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <p>{activity.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '3px' }}></div>
                                <div className="additional-info" style={{ display: 'flex', flexDirection: 'column', position: 'relative', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto' }}>
                                    <div className="pinfo-image" style={{ marginLeft: '0px' }}>
                                        <img src={activity.logoImage} alt="Info Image" style={{ width: '100%', height: 'auto' }} />
                                    </div>
                                
                                </div>
                            </div>
                            {/* Activity Actions Section */}
                            <div className="activity-actions">
                                <div className='activity-buttons'>
                                    <button
                                        className="book-now"
                                        style={{ backgroundColor: '#5EA858' }}
                                        onClick={() => sendMessage(activity.title, activity.location)}>
                                        <i className="fa-brands fa-whatsapp"></i>
                                        <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>Book Now</span>
                                    </button>
                                    <button className="share" style={{ backgroundColor: '#3880C4' }}>
                                        <i className="fa-solid fa-share"></i>
                                        <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Share</span>
                                    </button>
                                    <button className="save" style={{ backgroundColor: '#3880C4' }}>
                                        <i className="fa-regular fa-bookmark"></i>
                                        <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Save</span>
                                    </button>
                                </div>
                                <div className='more-btn'>
                                    <button className="more">See more from this provider</button>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>


            <div style={{ height: '60px' }}></div>
            {/* --------cards starts -----------*/}

            {/* card 1 */}
            <div className='card-container'>
                <div className='card-container-top'>
                {[...nonPromotedActivities, ...courses].map((item) => (
    <div className="activity-card cards" key={item.id || item._id}>
        <div className="activity-image">
            <img src={item.image || (item.images && item.images[0])} alt="Activity Image" />
        </div>
        <div className="activity-details">
            <div className='activity-card-in'>
                <div className='info-with-img'>
                    <div className='descp'>
                        <h3>{item.title || item.name}</h3>
                        <div>
                            <p className="location">
                                <i className="fa-solid fa-location-dot"></i>
                                <span style={{ marginLeft: '5px' }}>{item.location.join ? item.location.join(', ') : item.location}</span>
                            </p>
                        </div>
                        <div className="info-row">
                            <img src={item.baby || '/path-to-default-baby-image.jpg'} alt='baby' style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }} />
                            <div className="age-group">
                                <span className="age-text">{item.ageRange}</span>
                            </div>
                            <img src={item.calendar || '/path-to-default-calendar-image.jpg'} alt='calendar' style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }} />
                            <div className="day-selector">
                                {item.days.map((day) => (
                                    <span key={day} className={`day ${item.activeDays?.includes(day) ? 'active' : ''}`}>
                                        {day}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className={`description-logo-container ${openDropdowns[item.id || item._id] ? 'show' : 'hide'}`}>
                            <p className="activity-description">{item.description}</p>
                            <div className="additional-info">
                                <div className="info-image">
                                    <img src={item.logoImage || '/path-to-default-logo.jpg'} alt="Info Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '3px' }}></div>
                </div>
            </div>

            {/* Chevron dropdown for smaller screens only */}
            <div className="chevron-dropdown" onClick={() => toggleDropdown(item.id || item._id)}>
                <i className="fa-solid fa-chevron-down"></i>
            </div>

            {/* Activity Actions Section */}
            <div className={`activity-actions ${openDropdowns[item.id || item._id] ? 'show' : 'hide'}`}>
                <div className='activity-buttons'>
                    <button className="book-now" style={{ backgroundColor: '#5EA858' }} onClick={() => sendMessage(item.title || item.name, item.location.join ? item.location.join(', ') : item.location)}>
                        <i className="fa-brands fa-whatsapp"></i>
                        <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>Book Now</span>
                    </button>
                    <button className="share" style={{ backgroundColor: '#3880C4' }}>
                        <i className="fa-solid fa-share"></i>
                        <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Share</span>
                    </button>
                    <button className="save" style={{ backgroundColor: '#3880C4' }}>
                        <i className="fa-regular fa-bookmark"></i>
                        <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Save</span>
                    </button>
                </div>
                <div className='more-btn'>
                    <button className="more">See more from this provider</button>
                </div>
            </div>
        </div>
    </div>
))}

                    <div style={{ height: '0px' }}></div>
                </div>


            </div>
            {/* cards ends */}

            {/* banner section starts*/}

            <div class="banner-container">
                <div class="card bcard1">
                    <img src={banner1} alt="Image 1" />
                </div>
                {/* <div style={{ height: '10px' }}></div> */}
                <div class="card bcard2">
                    <img src={banner2} alt="Image 2" />
                </div>
                <div style={{ height: '40px' }}></div>

            </div>
            {/* banner section ends */}

            <div className='gapss'></div>


            {/* Footer Section */}
            <Footer />
        </>
    );
};

export default Activities;
