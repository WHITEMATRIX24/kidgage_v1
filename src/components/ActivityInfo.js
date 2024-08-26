import React from 'react';
import './ActivityInfo.css';
import dummyImage from './assets/images/football.jpg';  // Replace with your image path
import locationImage from './assets/images/mapimg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTheaterMasks, faMusic, faHouse, faBookmark, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import providerImage from './assets/images/football.jpg';  // Replace with your provider image path
import trainerImage1 from './assets/images/profile.png';  // Replace with your trainer image paths
import trainerImage2 from './assets/images/profile.png';
import trainerImage3 from './assets/images/profile.png';
import trainerImage4 from './assets/images/profile.png';
import Footer from './Footer';
import Footer2 from './Footer2';
import Calendar from './Calender';
const ActivityInfo = () => {
    return (
        <div className="activity-info-container">
            <header className="activity-info-header">KIDGAGE HEADER</header>
            <div className="activity-info-gap"></div>
            <div className="activity-info-gap"></div>
            <div className="activity-info-header-content">
                <div className="activity-info-row">
                    <div className="activity-info-home">
                        <div className="activity-info-home-icon">
                            <FontAwesomeIcon icon={faHouse} className="activity-info-home-icon-icon" /> <span className="activity-info-separator">{'>'}</span> Activity
                        </div>
                    </div>
                    <div className="activity-info-actions">
                        <button className="activity-info-action-btn"><FontAwesomeIcon icon={faLocationArrow} className='activity-info-share' /> Share </button>
                        <button className="activity-info-action-btn"><FontAwesomeIcon icon={faBookmark} className='activity-info-share' />Save</button>
                    </div>
                </div>
                <div className="activity-info-item">
                    <div className="activity-info-icon">
                        <FontAwesomeIcon icon={faTheaterMasks} />
                    </div>
                    <span className='activity-info-icon-text'>Dance & Drama</span>
                    <div className="activity-info-icon">
                        <FontAwesomeIcon icon={faMusic} />
                    </div>
                    <span className='activity-info-icon-text'>Music</span>
                </div>
            </div>
            <div className="activity-info-gap"></div>
            <div className="activity-info-gap"></div>
            <div className="activity-info-content">
                <div className="activity-info-left-section">
                    <h2 className="activity-info-heading">Activity Name</h2>
                    <div className='activity-info-gap'></div>
                    <img src={dummyImage} alt="Activity" className="activity-info-image" />
                    <h3 className="activity-info-heading">TITLE</h3>
                    <div className="activity-info-gap"></div>
                    <p className="activity-info-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac ligula eu nisl mollis convallis. Quisque ut libero in nunc aliquet.
                    </p>
                    <h3 className="activity-info-heading">LOCATION</h3>
                    <img src={locationImage} alt="Location" className="activity-info-location-image" />
                </div>
                <div className="activity-info-right-section">
                    <div className="activity-info-gap"></div>
                    <div className="activity-info-gap"></div>
                    <div className="activity-info-main-image"><Calendar /></div>
                    <h3 className="activity-info-provider-heading">Activity Provided By</h3>
                    <p className="activity-info-provider-details">
                        Provider Name <br />
                        Registration number: XXXXXX
                    </p>
                    <img src={providerImage} alt="Provider" className="activity-info-provider-image" />
                    <h3 className="activity-info-trainers-heading">Trainers</h3>
                    <div className="activity-info-trainers">
                        <img src={trainerImage1} alt="Trainer 1" className="activity-info-trainer-image" />
                        <img src={trainerImage2} alt="Trainer 2" className="activity-info-trainer-image" />
                        <img src={trainerImage3} alt="Trainer 3" className="activity-info-trainer-image" />
                        <img src={trainerImage4} alt="Trainer 4" className="activity-info-trainer-image" />
                    </div>
                </div>
            </div>
            <Footer />
            <Footer2 />
        </div>
    );
};

export default ActivityInfo;
