import React, { useState, useEffect } from 'react';
import './ActivityInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faBookmark, faHome } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Footer from './Footer';
import Footer2 from './Footer2';
import Calendar from './Calendar';
import ActivityImg from './assets/images/football.jpg';
import Header2 from './Header2';

const ActivityInfo = () => {
    const [course, setCourse] = useState(null);
    const [provider, setProvider] = useState(null);
    const courseId = '66e1a5727794b0bb53067ce9';

useEffect(() => {
    const fetchCourseData = async () => {
        try {
            const courseResponse = await axios.get(`http://localhost:5000/api/courses/course/${courseId}`);
            setCourse(courseResponse.data);

            if (courseResponse.data && courseResponse.data.providerId) {
                const providerResponse = await axios.get(`http://localhost:5000/api/users/provider/${courseResponse.data.providerId}`);
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
}, []);

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
        <Header2 />
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
                    <img src={ActivityImg} alt="activity" className="activity-info-image" />
                    <h2>Description</h2>
                    <p className="activity-info-description">{course.description}</p>
                </div>
                <div className="activity-info-right-section">
                    <Calendar providerName={`${provider.firstName} ${provider.lastName}`} courseName={course.name} />
                </div>
            </div>

            <div className="activity-info-locations">
                <div className="activity-info-location">
                    <h3>Location 1</h3>
                    <p>{course.location}</p>
                </div>
                <div className="activity-info-location">
                    <h3>Location 2</h3>
                    <p>Address and contact info</p>
                </div>
                <div className="activity-info-location">
                    <h3>Location 3</h3>
                    <p>Address and contact info</p>
                </div>
                <div className="activity-info-location">
                    <h3>Location 4</h3>
                    <p>Address and contact info</p>
                </div>
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
                            <img key={index} src={ActivityImg} alt={`trainer-${index + 1}`} className="activity-info-trainer-image" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        <Footer2 />
    </div>
);

};

export default ActivityInfo;