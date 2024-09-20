import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ActivityInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faBookmark, faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Footer from './Footer';
import Calendar from './Calendar';
import Header from './Header';
import placeholder from '../components/assets/images/placeholder.jpg'

const ActivityInfo = () => {
    const location = useLocation(); // Access navigation state
    const { id: courseId } = location.state || {}; // Extract courseId from state
    const [course, setCourse] = useState(null);
    const [provider, setProvider] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);  // State to track the current image index

    useEffect(() => {
        if (!courseId) {
            console.error('No course ID provided');
            return;
        }

        const fetchCourseData = async () => {
            try {
                const courseResponse = await axios.get(`https://kidgage-backend.onrender.com/api/courses/course/${courseId}`);
                setCourse(courseResponse.data);

                if (courseResponse.data && courseResponse.data.providerId) {
                    const providerResponse = await axios.get(`https://kidgage-backend.onrender.com/api/users/provider/${courseResponse.data.providerId}`);
                    setProvider(providerResponse.data);
                } else {
                    console.error('Provider ID is missing from course data');
                }
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    console.error('Resource not found:', error.response.config.url);
                } else {
                    console.error('Error fetching course or provider data:', error);
                }
            }
        };

        fetchCourseData();
    }, [courseId]);  // Dependency on courseId

    // Function to decode and format base64 images
    const getBase64ImageSrc = (base64String) => `data:image/jpeg;base64,${base64String}`;

    // Slideshow effect for images
    useEffect(() => {
        if (course && course.images && course.images.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % course.images.length);  // Cycle through images
            }, 3000);  // 3 seconds interval

            return () => clearInterval(interval);  // Cleanup on component unmount
        }
    }, [course]);

    const handleShare = () => {
        const shareData = {
            title: course?.name || 'Check this out!',
            text: course?.description || 'Check out this activity on Kidgage!',
            url: window.location.href,
        };

        if (navigator.share) {
            navigator.share(shareData)
                .then(() => console.log('Successfully shared'))
                .catch((error) => console.log('Error sharing', error));
        } else {
            alert('Web Share API is not supported in your browser.');
        }
    };

    if (!course || !provider) {
        return <div>Loading...</div>;
    }

    return (
        <div className="activity-info-container">
            <Header/>
            <div className="activity-info-content">
                <div className="activity-info-breadcrumb">
                    <div className='activity-info-path'>
                        <FontAwesomeIcon icon={faHome} />
                        <FontAwesomeIcon icon={faChevronRight} />
                        Activity
                    </div>
                    <div className="activity-info-actions">
                        <button className="activity-info-action-btn" onClick={handleShare}>
                            <FontAwesomeIcon icon={faLocationArrow} /> Share
                        </button>
                        <button className="activity-info-action-btn">
                            <FontAwesomeIcon icon={faBookmark} /> Save
                        </button>
                    </div>
                </div>

                <h1 className="activity-info-heading">{course.name}</h1>
                <div className="activity-info-main">
                    <div className="activity-info-left-section">
                        {/* Display the current image in the slideshow */}
                        {course.images && course.images.length > 0 ? (
                            <img
                                src={getBase64ImageSrc(course.images[currentImageIndex])}
                                alt={`activity-${currentImageIndex}`}
                                className="activity-info-image"
                            />
                        ) : (
                            <img src={placeholder} alt="Placeholder" />
                        )}
                        <p className="activity-info-description">{course.description}</p>
                    </div>
                    <div className="activity-info-right-section">
                        <Calendar providerName={`${provider.firstName} ${provider.lastName}`} courseName={course.name} />
                    </div>
                </div>

                {/* Display course locations dynamically if available */}
                <div className="activity-info-locations">
                    {course.location && course.location.length > 0 ? (
                        course.location.map((loc, index) => (
                            <div key={index} className="activity-info-location">
                                <h3>Location {index + 1}</h3>
                                <p>{loc.address}, {loc.city}, {loc.phoneNumber}</p>
                            </div>
                        ))
                    ) : (
                        <p>No locations available</p>
                    )}
                </div>
                <div className="provider-trainer-container">
                    <div className="activity-info-provider">
                        <h2>Activity provided by</h2>
                        <p>{provider.firstName} {provider.lastName}</p>
                        <p>Commercial Registration: {provider.licenseNo}</p>
                        <img src={`data:image/jpeg;base64,${provider.logo}`} alt="Provider" className="activity-info-provider-image" />
                    </div>
                    <div className="activity-info-trainers">
                        <h2>Trainers</h2>
                        <div className="activity-info-trainer-images">
                            {[...Array(12)].map((_, index) => (
                                <img key={index} src={placeholder} alt={`trainer-${index + 1}`} className="activity-info-trainer-image" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ActivityInfo;
