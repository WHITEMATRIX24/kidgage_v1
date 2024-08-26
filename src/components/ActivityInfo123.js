import React, { useState, useEffect } from 'react';
import './ActivityInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTheaterMasks, faMusic, faLocationArrow, faBookmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Footer from './Footer';
import Footer2 from './Footer2';
import Calendar from './Calender';
import ActivityImg from './assets/images/football.jpg';
import LocationImg from './assets/images/mapimg.png';

const ActivityInfo = () => {
    const [course, setCourse] = useState(null);
    const [provider, setProvider] = useState(null);
    const courseId = '66ab808e13912199840ad54b';

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                const courseResponse = await axios.get(`http://localhost:5000/api/courses/course/${courseId}`);
                setCourse(courseResponse.data);

                if (courseResponse.data && courseResponse.data.providerId) {
                    const providerResponse = await axios.get(`http://localhost:5000/api/users/provider/${courseResponse.data.providerId}`);
                    setProvider(providerResponse.data);
                } else {
                    console.error('Provider ID is missing');
                }
            } catch (error) {
                console.error('Error fetching course or provider data:', error);
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
            <header className="activity-info-header">KIDGAGE HEADER</header>
            <div className="activity-info-gap"></div>
            <div className="activity-info-gap"></div>
            <div className="activity-info-header-content">
                <div className="activity-info-row">
                    <div className="activity-info-home">
                        <div className="activity-info-home-icon">
                            <FontAwesomeIcon icon={faTheaterMasks} /> Activity
                        </div>
                    </div>
                    <div className="activity-info-actions">
                        <button className="activity-info-action-btn" onClick={handleShare}>
                            <FontAwesomeIcon icon={faLocationArrow} className='activity-info-share' /> Share
                        </button>
                        <button className="activity-info-action-btn">
                            <FontAwesomeIcon icon={faBookmark} className='activity-info-save' /> Save
                        </button>
                    </div>
                </div>
                <div className="activity-info-item">
                    <div className="activity-info-icon">
                        <FontAwesomeIcon icon={faTheaterMasks} />
                    </div>
                    <span className='activity-info-icon-text'>Sports & Games</span>
                    <div className="activity-info-icon">
                        <FontAwesomeIcon icon={faMusic} />
                    </div>
                    <span className='activity-info-icon-text'>Football</span>
                </div>
            </div>
            <div className="activity-info-gap"></div>
            <div className="activity-info-gap"></div>
            <div className="activity-info-content">
                <div className="activity-info-left-section">
                    <h2 className="activity-info-heading">{course.name}</h2>
                    <div className='activity-info-gap'></div>
                    <img src={ActivityImg} alt="activity image" className='activity-info-image' />
                    <h3 className="activity-info-heading">Description</h3>
                    <div className="activity-info-gap"></div>
                    <p className="activity-info-description">
                        {course.description}
                    </p>
                    <h3 className="activity-info-heading">LOCATION</h3>
                    <img src={LocationImg} alt="location image" className='activity-info-location-image' />
                </div>
                <div className="activity-info-right-section">
                    <div className="activity-info-gap"></div>
                    <div className="activity-info-gap"></div>
                    <div className="activity-info-main-image"><Calendar /></div>
                    <h3 className="activity-info-provider-heading">Activity Provided By</h3>
                    <p className="activity-info-provider-details">
                        {provider.firstName} {provider.lastName} <br />
                        Registration number: {provider.licenseNo}
                    </p>
                    <img src={`data:image/jpeg;base64,${provider.logo}`} alt="Provider" className="activity-info-provider-image" />
                    <h3 className="activity-info-trainers-heading">Trainers</h3>
                    <div className="activity-info-trainers">
                        <img src={ActivityImg} alt="trainer-image" className="activity-info-trainer-image" />
                        <img src={ActivityImg} alt="trainer-image" className="activity-info-trainer-image" />
                        <img src={ActivityImg} alt="trainer-image" className="activity-info-trainer-image" />
                        <img src={ActivityImg} alt="trainer-image" className="activity-info-trainer-image" />
                    </div>
                </div>
            </div>
            <Footer />
            <Footer2 />
        </div>
    );
};

export default ActivityInfo;
