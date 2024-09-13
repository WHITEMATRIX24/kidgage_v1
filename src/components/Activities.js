import { useNavigate } from 'react-router-dom';
import banner1 from '../components/assets/images/AD01.png'
import banner2 from '../components/assets/images/ads2.png'
import smallBanner1 from '../components/assets/images/ad1.png';
import smallBanner2 from '../components/assets/images/ad2.png';
import football from '../components/assets/images/child-613199_1280.jpg'
import placeholderLogo from '../components/assets/images/abs.png'
import calendar from '../components/assets/images/calendar.png'
import baby from '../components/assets/images/baby.png'
import './Activities.css';
import './AcademyList.css';
import Footer from './Footer';
import Header2 from './Header2';
import SearchBar from './SearchBar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const allDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


const Activities = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const location = useLocation();
    const { category } = location.state || {}; // Get category from state, fallback to empty object
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1025);
        };

        // Check the screen size when the component mounts
        handleResize();

        // Add event listener to check the window size on resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const sendMessage = (activityName) => {
        const message = `Hello! I am interested in booking the ${activityName} provided by Sparta Academy. Can you please provide more details?`;
        const whatsappUrl = `https://wa.me/9447526695?text=${encodeURIComponent(message)}`;
        console.log("WhatsApp URL:", whatsappUrl); // Log the URL for debugging
        window.open(whatsappUrl, '_blank');
    };
    const navigate = useNavigate();

    const handleClick = (courseId) => {
        navigate('/activity-info', { state: { id: courseId } });
    };
    const formatFeeType = (feeType) => {
        return feeType
            .split('_') // Split by underscore
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
            .join(' '); // Join them with a space
    };

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('https://kidgage-backend.onrender.com/api/courses/by-course-type', {
                    params: { courseType: category }
                });
                console.log('API Response:', response.data); // Log the full response

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


            </div>

            <div className='promoted-container'>
                {/* promoted card 1 */}
                {courses.length > 0 ? (
                    courses
                        .filter((course) => course.promoted) // Filter to only include promoted courses
                        .map((activity) => (
                            <div key={activity._id} className="promoted-card ">
                                <div className="promoted-image" onClick={() => handleClick(activity._id)}>
                                    {activity.images && activity.images.length > 0 ? (
                                        <img src={`data:image/png;base64,${activity.images[0]}`} alt="Activity Image" />
                                    ) : (
                                        <img src={football} alt="Placeholder" />
                                    )}
                                    <div className="promoted-overlay">
                                        <div className="promoted-label">Promoted</div>
                                    </div>
                                </div>
                                <div className="activity-detailss" onClick={() => handleClick(activity._id)}>
                                    <h3>{activity.name}</h3>
                                    <div className='info-with-img'>
                                        <div className='pdescp'>
                                            <div>
                                                <p className="location">
                                                    {/* <i className="fa-solid fa-location-dot"></i> */}
                                                    <span style={{ color: '#5EA858', fontWeight: 'bold' }}>QAR. {activity.feeAmount} {formatFeeType(activity.feeType)}</span>

                                                </p>
                                            </div>
                                            <div className="infop-row">
                                                <img src={baby} alt='baby' style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }} />
                                                <div className="age-group">
                                                    <span className="age-text">0 - 15ys 9ms</span>
                                                </div>
                                                <img src={calendar} alt='calendar' style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }} />
                                                <div className="day-selector">
                                                    {allDays.map((day) => (
                                                        <span key={day} className={`day ${activity.days.includes(day) ? 'active' : ''}`}>
                                                            {day}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className='pdesc'>
                                                <p>{activity.description || 'No description available'}</p>
                                            </div>
                                        </div>
                                        <div className='gap-after' style={{ height: '3px' }}></div>
                                        <div className="additional-info" style={{ display: 'flex', flexDirection: 'column', position: 'relative', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto' }}>
                                            <div className="pinfo-image" style={{ marginLeft: '0px' }}>
                                                <img src={activity.logoImage || placeholderLogo} alt="Info Image" style={{ width: '100%', height: 'auto' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Activity Actions Section */}
                                <div className="activity-actions">
                                    <div className='activity-buttons'>
                                        <button className="book-now" style={{ backgroundColor: '#5EA858' }} onClick={() => sendMessage(activity.name, activity.location)}>
                                            <i className="fa-brands fa-whatsapp"></i>
                                            <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>Book Now</span>
                                        </button>
                                        <button className="share" style={{ backgroundColor: '#3880C4' }}>
                                            <i className="fa-solid fa-share"></i>
                                            <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>Share</span>
                                        </button>
                                        <button className="save" style={{ backgroundColor: '#3880C4' }}>
                                            <i className="fa-regular fa-bookmark"></i>
                                            <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>Save</span>
                                        </button>
                                    </div>
                                    <div className='more-btn'>
                                        <button className="more">See more from this provider</button>
                                    </div>
                                </div>
                            </div>
                        ))
                ) : (
                    <p>No promoted activities available at the moment.</p>
                )}

            </div>


            <div className='gap-bw' style={{ height: '60px' }}></div>
            {/* --------cards starts -----------*/}

            <div className='activity-bottom'>
                {/* card 1 */}
                <div className='card-container'>
                    <div className='card-container-top'>
                        {courses.length > 0 ? (
                            courses
                                .filter((course) => !course.promoted) // Filter out promoted courses
                                .map((course) => (
                                    <div className="activity-card cards" key={course._id} onClick={() => handleClick(course._id)}>
                                        <div className="activity-image">
                                            {/* Display image if available */}
                                            {course.images && course.images.length > 0 ? (
                                                <img src={`data:image/png;base64,${course.images[0]}`} alt="Course Image" />
                                            ) : (
                                                <img src={football} alt="Placeholder" />
                                            )}
                                        </div>
                                        <div className="activity-details">
                                            <div className='activity-card-in'>
                                                <div className='info-with-img'>
                                                    <div className='descp'>
                                                        <h3>{course.name}</h3>
                                                        <div>
                                                            <p className="location">

                                                                {/* <i className="fa-solid fa-location-dot"></i> */}
                                                                <span style={{ marginLeft: '5px' }}>
                                                                    {/* Display location if available */}
                                                                    {/* {course.location && Array.isArray(course.location) && course.location.length > 0
                                                                ? course.location[0]
                                                                : 'Location not available'} */}
                                                                    <span style={{ color: '#5EA858', fontWeight: 'bold' }}>QAR. {course.feeAmount} {formatFeeType(course.feeType)}</span>

                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="info-row">
                                                            {/* Display age range if applicable */}
                                                            <img src={baby} alt='baby' style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }} />
                                                            <div className="age-group">
                                                                <span className="age-text">0 - 15ys 9ms</span>
                                                            </div>
                                                            <img src={calendar} alt='calendar' style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }} />
                                                            <div className="day-selector">
                                                                {allDays.map((day) => (
                                                                    <span
                                                                        key={day}
                                                                        className={`day ${course.days.includes(day) ? 'active' : ''}`}
                                                                    >
                                                                        {day}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        {/* Flex container for description and logo image */}
                                                        <div className={`description-logo-container`}>
                                                            <p className="activity-description">
                                                                {course.description || 'No description available'}
                                                            </p>
                                                            <div className="additional-info">
                                                                <div className="info-image">
                                                                    {/* Display additional info image if available */}
                                                                    <img src={course.logoImage || placeholderLogo} alt="Info Image" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='gap-after' style={{ height: '3px' }}></div>
                                                </div>
                                            </div>

                                            {/* Chevron dropdown for smaller screens only */}
                                            <div className="chevron-dropdown">
                                                See More
                                                <i className="fa-solid fa-chevron-down"></i>
                                            </div>

                                            {/* Activity Actions Section */}
                                            <div className='activity-actions'>
                                                <div className='activity-buttons'>
                                                    <button className="book-now" style={{ backgroundColor: '#5EA858' }} onClick={() => sendMessage(course.name, course.location)}>
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
                                ))
                        ) : (
                            <p>No courses available for this category.</p>
                        )}

                    </div>
                </div>
                {/* cards ends */}

                {/* banner section starts*/}

                <div className="banner-container">
                    <div className="card bcard1">
                        <img
                            src={isSmallScreen ? smallBanner1 : banner1}
                            alt="Banner 1"
                        />
                    </div>
                    <div className="card bcard2">
                        <img
                            src={isSmallScreen ? smallBanner2 : banner2}
                            alt="Banner 2"
                        />
                    </div>
                    <div style={{ height: '40px' }}></div>
                </div>
                {/* banner section ends */}
            </div>

            <div className='gapss'></div>


            {/* Footer Section */}
            <Footer />
        </>
    );
};

export default Activities;
