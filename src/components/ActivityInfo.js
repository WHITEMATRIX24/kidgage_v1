import React, { useState, useEffect } from 'react';
import './ActivityInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTheaterMasks, faMusic, faLocationArrow, faBookmark, faHome, faMapLocation, faLocation, faLocationDot, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Footer from './Footer';
import Footer2 from './Footer2';
import Calendar from './Calendar';
import ActivityImg1 from './assets/images/foot.jpg';
import ActivityImg2 from './assets/images/foot1.jpg';
import ActivityImg3 from './assets/images/foot2.jpg';
import LocationImg from './assets/images/mapimg.png';
import providerImg from './assets/images/abc.png'
import Header2 from './Header2';
import { FaChevronRight } from 'react-icons/fa';
const ActivityInfo = () => {
    const [course, setCourse] = useState(null);
    const [provider, setProvider] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const courseId = '66ab808e13912199840ad54b';

    const activityImages = [ActivityImg1, ActivityImg2, ActivityImg3]; // Array of images

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
            setFade(false); // Start fade-out transition
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % activityImages.length);
                setFade(true); // Start fade-in transition
            }, 1000); // Duration of fade-out transition
        }, 3000); // Total time for image change (2s display + 0.5s transition)

        return () => clearInterval(interval); // Cleanup interval on component unmount
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
            <div className="activity-info-gap"></div>
            <div className="activity-info-header-content">
                <div className="activity-info-row">
                    <div className="activity-info-home">
                        <div className="activity-info-home-icon">
                            <FontAwesomeIcon icon={faHome} /> <span style={{ margin: '0 8px' }}>
                                <FontAwesomeIcon icon={faChevronRight} fontSize={'12px'} />
                            </span> {/* ">" Symbol */}
                            <span>Activity</span> {/* Text */}
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
                        <FontAwesomeIcon icon={faMusic} />
                    </div>
                    <span className='activity-info-icon-text'>Football</span>
                </div>
            </div>
            <div className="activity-info-gap"></div>
            <div className="activity-info-gap"></div>
            <div className="activity-info-content">
                <div className="activity-info-left-section">
                    <h2 className="activity-info-heading">Activity Name</h2>
                    <div className='activity-info-gap'></div>
                    <div className="activity-info-gap"></div>
                    <img src={activityImages[currentImageIndex]} alt="activity image" className='activity-info-image' />
                    <h3 className="activity-info-heading-title">{course.name}</h3>
                    <div className="activity-info-gap"></div>
                    <p className="activity-info-description">
                        {course.description}
                    </p>
                    <div className='location-details'>
                        <h3 className="activity-info-heading-location">Location</h3>
                        <li>
                            <a href='https://maps.app.goo.gl/7U6x1A3orcWMy9rc7' className='activity-info-location'> <FontAwesomeIcon icon={faLocationDot} className='activity-info-location-icon' /> Muaither area</a>
                            <a href='https://maps.app.goo.gl/rm6wK6wZXdcUKdPC6' className='activity-info-location'> <FontAwesomeIcon icon={faLocationDot} className='activity-info-location-icon' /> Doha</a>
                            <a href='https://maps.app.goo.gl/mXMKd9P3Pb53MEeJA' className='activity-info-location'> <FontAwesomeIcon icon={faLocationDot} className='activity-info-location-icon' /> Dukhan</a>
                        </li> </div>
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

                    <h3 className="activity-info-trainers-heading">Trained by</h3>
                    <div className="activity-info-trainers">
                        <img src={ActivityImg1} alt="trainer-image" className="activity-info-trainer-image" />
                        <img src={ActivityImg1} alt="trainer-image" className="activity-info-trainer-image" />
                        <img src={ActivityImg1} alt="trainer-image" className="activity-info-trainer-image" />
                        <img src={ActivityImg1} alt="trainer-image" className="activity-info-trainer-image" />
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
};

export default ActivityInfo;
