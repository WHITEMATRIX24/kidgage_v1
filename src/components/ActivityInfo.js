import React, { useState, useEffect } from 'react';
import './ActivityInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTheaterMasks, faMusic, faLocationArrow, faBookmark, faHome, faMapLocation, faLocation, faLocationDot, faChevronRight, faFootball } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Footer from './Footer';
import Calendar from './Calendar';
import ActivityImg1 from './assets/images/foot.jpg';
import ActivityImg2 from './assets/images/foot1.jpg';
import ActivityImg3 from './assets/images/foot2.jpg';
import providerImg from './assets/images/abc.png';
import Trainer1 from './assets/images/trainer1.jpg'
import Trainer2 from './assets/images/traner2.jpg'
import Header2 from './Header2';

const ActivityInfo = () => {
    const [course, setCourse] = useState(null);
    const [provider, setProvider] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const courseId = '66ab808e13912199840ad54b';

    const activityImages = [ActivityImg1, ActivityImg2, ActivityImg3];

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                const courseResponse = await axios.get(`https://kidgage-backend.onrender.com/api/courses/course/${courseId}`);
                setCourse(courseResponse.data);

                if (courseResponse.data && courseResponse.data.providerId) {
                    const providerResponse = await axios.get(`https://kidgage-backend.onrender.com/api/users/provider/${courseResponse.data.providerId}`);
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

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % activityImages.length);
                setFade(true);
            }, 1000);
        }, 3000);

        return () => clearInterval(interval);
    }, [activityImages.length]);

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
            <Header2 className='activity-info-header' />
            <div className="activity-info-gap"></div>

            <div className="activity-info-header-content">
                <div className="activity-info-row">
                    <div className="activity-info-home">
                        <div className="activity-info-home-icon">
                            <FontAwesomeIcon icon={faHome} /> <span style={{ margin: '0 8px' }}>
                                <FontAwesomeIcon icon={faChevronRight} fontSize={'12px'} />
                            </span>
                            <span>Activity</span>
                        </div>
                    </div>
                    <div className="activity-info-actions">
                        <button className="activity-info-action-btn" onClick={handleShare}>
                            <FontAwesomeIcon icon={faLocationArrow} className='activity-info-share' /> Share
                        </button>
                        <button className="activity-info-action-btn">
                            <FontAwesomeIcon icon={faBookmark} className='activity-info-share' /> Save
                        </button>
                    </div>
                </div>
                <div className="activity-info-item">
                    <div className="activity-info-icon">
                        <FontAwesomeIcon icon={faFootball} className='activity-info-icon-icon' />
                    </div>
                    <span className='activity-info-icon-text'>Football</span>
                </div>
            </div>
            <div className="activity-info-gap"></div>
            <div className="activity-info-content">
                <div className="activity-info-left-section">
                    <h2 className="activity-info-heading">{course.name}</h2>
                    <div className="activity-info-gap"></div>
                    <img src={activityImages[currentImageIndex]} alt="activity image" className='activity-info-image' />
                    <div className="activity-info-gap"></div>
                    <p className="activity-info-description">
                        {course.description}
                    </p>
                    <div className='location-details'>
                        <h3 className="activity-info-heading-location">Location</h3>
                        <li>
                            <a href='https://maps.app.goo.gl/rm6wK6wZXdcUKdPC6' className='activity-info-location'> <FontAwesomeIcon icon={faLocationDot} className='activity-info-location-icon' /> Doha</a>
                        </li>
                    </div>
                    <div className="activity-info-iframe-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115436.81334236015!2d51.42664383993854!3d25.290747612501807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dd496bdae6f5%3A0x8e62e52b05668a3f!2zQXNjIHNwb3J0IFNoZXJib3JuZSDYp9mKINin2LMg2LPZiiDYp9iz2KjZiNix2Kog2LTZitix2KjZiNmG!5e0!3m2!1sen!2sin!4v1725110558742!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>

                <div className="activity-info-right-section">
                    <div className="activity-info-gap"></div>
                    <div className="activity-info-gap"></div>
                    <div className="activity-info-main-image"><Calendar /></div>
                    <div className='activity-info-gap'></div>
                    <h3 className="activity-info-provider-heading">Activity Provided By</h3>
                    <p className="activity-info-provider-details">
                        ABC Sports Center <br />
                        Registration number: {provider.licenseNo}
                    </p>
                    <img src={providerImg} alt="Provider" className="activity-info-provider-image" />

                    <h3 className="activity-info-trainers-heading">Trained by</h3>
                    <div className="activity-info-trainers">
                        <img src={Trainer1} alt="trainer" className="activity-info-trainer-image" />
                        <img src={Trainer2} alt="trainer" className="activity-info-trainer-image" />
                        <img src={Trainer1} alt="trainer" className="activity-info-trainer-image" />
                        <img src={Trainer2} alt="trainer-image" className="activity-info-trainer-image" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ActivityInfo;
