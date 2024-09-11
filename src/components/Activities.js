import React from 'react';
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
import { useState } from 'react';


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



    return (
        <>
            {/* Fixed Navbar */}
            <Header2 />
            <SearchBar />
            {/* promoted */}
            <div style={{ height: '22px' }}></div>

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
                                    {/* <div className="activity-reviewss" style={{ marginLeft: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <span className="star-rating">{activity.rating}</span>
                                        <span className='review-text'>{activity.reviews}</span>
                                    </div> */}
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
                    {nonPromotedActivities.map((activity) => (
                        <div className="activity-card cards" key={activity.id}>
                            <div className="activity-image">
                                <img src={activity.image} alt="Activity Image" />
                            </div>
                            <div className="activity-details">
                                <div className='activity-card-in'>
                                    <div className='info-with-img'>
                                        <div className='descp'>
                                            <h3>{activity.title}</h3>
                                            <div>
                                                <p className="location">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <span style={{ marginLeft: '5px' }}>{activity.location}</span>
                                                </p>
                                            </div>
                                            <div className="info-row">
                                                <img src={activity.baby} alt='baby' style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }} />
                                                <div className="age-group">
                                                    <span className="age-text">{activity.ageRange}</span>
                                                </div>
                                                <img src={activity.calendar} alt='calendar' style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }} />
                                                <div className="day-selector">
                                                    {activity.days.map((day) => (
                                                        <span key={day} className={`day ${activity.activeDays.includes(day) ? 'active' : ''}`}>
                                                            {day}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Flex container for description and logo image */}
                                            <div className={`description-logo-container ${openDropdowns[activity.id] ? 'show' : 'hide'}`}>
                                                <p className="activity-description">{activity.description}</p>
                                                <div className="additional-info">
                                                    <div className="info-image">
                                                        <img src={activity.logoImage} alt="Info Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ height: '3px' }}></div>
                                    </div>
                                </div>

                                {/* Chevron dropdown for smaller screens only */}
                                <div className="chevron-dropdown" onClick={() => toggleDropdown(activity.id)}>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>

                                {/* Activity Actions Section */}
                                <div className={`activity-actions ${openDropdowns[activity.id] ? 'show' : 'hide'}`}>
                                    <div className='activity-buttons'>
                                        <button className="book-now" style={{ backgroundColor: '#5EA858' }} onClick={() => sendMessage(activity.title, activity.location)}>
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

                {/*<div className="pagination-container">
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center', // Center align the pagination
                            margin: '0 auto', // Center container horizontally
                        }}
                    >
                        <Pagination
                            count={10}
                            shape="rounded"
                            boundaryCount={10}
                            siblingCount={10}
                            sx={{
                                "& .MuiPaginationItem-root": {
                                    fontSize: "1.5rem", // Adjust font size
                                    padding: "6px 12px", // Adjust padding for size
                                    backgroundColor: "rgba(173, 216, 230, 0.3)", // Light background for all items
                                    color: "#333", // Text color for non-selected items
                                    "&:hover": {
                                        backgroundColor: "rgba(173, 216, 230, 0.5)", // Slightly darker on hover
                                    },
                                    "&.Mui-selected": {
                                        backgroundColor: "#3880C4", // Darker background for the selected item
                                        color: "white", // White text for the selected item
                                        boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)", // Add a slight shadow for emphasis
                                    },
                                    borderRadius: "12px", // Round the corners more
                                    margin: "20px 4px", // Small margin between items
                                    "@media (max-width: 1460px)": {
                                        fontSize: "0.9rem", // Adjust font size for smaller screens
                                        padding: "4px 10px", // Adjust padding for smaller screens
                                        margin: "15px 2px", // Adjust margin for smaller screens
                                    },
                                    "@media (max-width: 900px)": {
                                        fontSize: "0.8rem", // Adjust font size for smaller screens
                                        padding: "4px 8px", // Adjust padding for smaller screens
                                        margin: "10px 2px", // Adjust margin for smaller screens
                                    },
                                },
                                "& .MuiPaginationItem-previousNext": {
                                    border: "2px solid #BDBDBD",
                                    padding: "10px 20px",
                                    marginLeft: "150px",
                                    marginRight: "50px", // Ensure size consistency with the other buttons
                                    backgroundColor: "rgba(173, 216, 230, 0.3)", // Light background for previous/next
                                    color: "#333", // Text color for non-selected items
                                    "&:hover": {
                                        backgroundColor: "rgba(173, 216, 230, 0.5)", // Slightly darker on hover
                                    },
                                    borderRadius: "12px", // Round the corners more
                                    "@media (max-width: 1460px)": {
                                        padding: "8px 16px", // Adjust padding for smaller screens
                                        marginLeft: "100px", // Adjust margin for smaller screens
                                        marginRight: "30px", // Adjust margin for smaller screens
                                    },
                                    "@media (max-width: 900px)": {
                                        padding: "8px 8px", // Adjust padding for smaller screens
                                        marginLeft: "10px", // Adjust margin for smaller screens
                                        marginRight: "10px", // Adjust margin for smaller screens
                                    },
                                },
                            }}

                        />
                    </Box>
                </div> */}

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
