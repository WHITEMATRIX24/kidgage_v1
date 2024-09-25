import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import football from '../components/assets/images/placeholder.jpg'
import placeholderLogo from '../components/assets/images/placeholder.jpg'
import calendar from '../components/assets/images/calendar.png'
import baby from '../components/assets/images/baby.png'
import boy from '../components/assets/images/boy.png'
import girl from '../components/assets/images/girl.png'

import './Activities.css';
import Footer from './Footer';
import Header from './Header';
import SearchBar from './SearchBar';
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
    const [ageRange, setAgeRange] = useState({});
    const [providers, setProviders] = useState({}); // Change to an object to map providerId to provider details

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1025);
        };

        // Check the screen size when the component 
        handleResize();

        // Add event listener to check the window size on resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const sendMessage = (activityName, providerName) => {
        const message = `Hello! I am interested in booking the ${activityName} provided by ${providerName}. Can you please provide more details?`;
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
    const calculateAgeRange = (startDate, endDate) => {
        const today = new Date();

        // Convert ISO strings to Date objects
        let start = new Date(startDate);
        let end = new Date(endDate);

        // Check if both dates are valid
        if (!start || !end || isNaN(start.getTime()) || isNaN(end.getTime())) {
            return 'unvailable';
        }

        // Helper function to calculate the difference in years and months
        const calculateDifference = (fromDate, toDate) => {
            let years = toDate.getFullYear() - fromDate.getFullYear();
            let months = toDate.getMonth() - fromDate.getMonth();

            // Adjust if the month difference is negative
            if (months < 0) {
                years--;
                months += 12;
            }

            return { years, months };
        };

        // Calculate the differences from both start and end dates to today
        const startDiff = calculateDifference(start, today);
        const endDiff = calculateDifference(end, today);

        // Function to format the age in 'x years y months' format
        const formatAge = ({ years, months }) => {
            let ageString = `${years} yr`;
            if (months > 0) {
                ageString += ` ${months} mo`;
            }
            return ageString;
        };

        // Sort the age differences to always display the smallest age first
        const sortedAges = [startDiff, endDiff].sort((a, b) => {
            if (a.years === b.years) {
                return a.months - b.months;
            }
            return a.years - b.years;
        });

        // Return the age range in 'smallest-age-to-largest-age' format with years and months
        return `${formatAge(sortedAges[0])} - ${formatAge(sortedAges[1])}`;
    };

    // Example usage:
    console.log(calculateAgeRange('2015-08-15', '2020-04-10')); // Output: e.g. "4 years 5 months - 9 years 1 month"

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(
                    'https://kidgage-backend.onrender.com/api/courses/by-course-type',
                    {
                        params: { courseType: category },
                    }
                );

                console.log('API Response:', response.data); // Log the full response

                if (response.data && Array.isArray(response.data)) {
                    setCourses(response.data); // Assuming response.data is an array of courses

                    // Create an array to hold all provider data
                    const providerPromises = response.data.map(async (course) => {
                        if (course.providerId) {
                            try {
                                const providerResponse = await axios.get(
                                    `https://kidgage-backend.onrender.com/api/users/provider/${course.providerId}`
                                );
                                console.log(
                                    `Provider Response for course ${course._id}:`,
                                    providerResponse.data
                                ); // Log each provider response

                                return { [course.providerId]: providerResponse.data }; // Return the provider data mapped by providerId
                            } catch (providerError) {
                                console.error(
                                    `Error fetching provider for course ${course._id}:`,
                                    providerError
                                );
                                return null; // Return null if there's an error fetching the provider
                            }
                        } else {
                            console.error(
                                `Provider ID is missing from course data for course ${course._id}`
                            );
                            return null; // Return null if providerId is missing
                        }
                    });

                    // Wait for all provider fetches to complete
                    const providersArray = await Promise.all(providerPromises);

                    // Combine all providers into a single object using reduce
                    const providersObject = providersArray.reduce((acc, provider) => {
                        if (provider) {
                            return { ...acc, ...provider };
                        }
                        return acc;
                    }, {});

                    setProviders(providersObject); // Set the providers in state
                } else {
                    console.error('Course data is empty or not an array');
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching courses:', error); // Log the error for debugging
                setError('Error fetching courses');
                setLoading(false);
            }
        };

        if (category) {
            fetchCourses();
        }
    }, [category]);


    // Define handleShare as a separate function
    const handleShare = (course) => {
        const shareData = {
            title: course || 'Check this out!',
            text: 'Check out this course on Kidgage!',
            url: window.location.href,
        };

        if (navigator.share) {
            navigator.share(shareData)
                .then(() => console.log(shareData))
                .catch((error) => console.log('Error sharing', error));
        } else {
            alert('Web Share API is not supported in your browser.');
        }
    };


    const [advertisements, setAdvertisements] = useState([]);

    useEffect(() => {
        fetchAdvertisements();
    }, []);
    const [wishlist, setWishlist] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const addToWishlist = (event) => {
        try {
            // Get current wishlist from local storage
            const storedWishlist = localStorage.getItem('wishlistEvents');
            const currentWishlist = storedWishlist ? JSON.parse(storedWishlist) : [];

            // Add the event to the wishlist if it's not already in it
            const isEventInWishlist = currentWishlist.some(wishlistEvent => wishlistEvent._id === event._id);
            if (!isEventInWishlist) {
                const updatedWishlist = [...currentWishlist, event];
                localStorage.setItem('wishlistEvents', JSON.stringify(updatedWishlist));
                setWishlist(updatedWishlist); // Update local wishlist state
                setShowPopup(true); // Show popup on success
            }
        } catch (error) {
            console.error('Error adding to wishlist:', error);
        }
    };
    const fetchAdvertisements = async () => {
        try {
            const response = await axios.get('https://kidgage-backend.onrender.com/api/advertisement');
            setAdvertisements(response.data);
        } catch (error) {
            console.error('Error fetching advertisements:', error);
        }
    };

    const [isExpanded, setIsExpanded] = useState(false);

    const getGenderImage = (preferredGender) => {
        if (preferredGender === 'Male') {
          return boy;
        } else if (preferredGender === 'Female') {
          return girl;
        } else {
          return baby; // Default to 'Any' or not mentioned
        }
    }

    const [searchParams, setSearchParams] = useState(null);

    // Function to handle search
    const handleSearch = (searchData) => {
      setSearchParams(searchData);
      console.log('Received search data:', searchData);
  
      // You can now use the `searchData` to make API requests or filter data.
      // For example:
      // fetchData(searchData);
    };

    return (
        <>
            {/* Fixed Navbar */}
            <Header />
            <SearchBar onSearch={handleSearch} />

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
                                            <img src={getGenderImage(activity.preferredGender)} alt="gender" style={{ width: '5%', height: 'auto', marginTop: '-1%' ,marginRight:'10px' }} />
                                            <div className="age-group">
                                                    {activity.ageGroup && activity.ageGroup.length > 0 ? (
                                                        <span className="age-text">{calculateAgeRange(activity.ageGroup[0].ageStart, activity.ageGroup[0].ageEnd)}</span>
                                                    ) : (
                                                        <span className="age-text">Unavailable</span>
                                                    )}
                                                </div>
                                                <img src={calendar} alt='calendar' style={{ width: '5%', height: 'auto', marginTop: '-2%'}} />
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
                                                {providers[activity.providerId] && providers[activity.providerId].logo ? (
                                                    <img src={`data:image/jpeg;base64,${providers[activity.providerId].logo}`} alt="Provider" />
                                                ) : (
                                                    <img src={placeholderLogo} alt="Placeholder Provider" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Activity Actions Section */}
                                <div className="activity-actions">
                                    <div className='activity-buttons'>
                                        <button
                                            className="book-now"
                                            style={{ backgroundColor: '#5EA858' }}
                                            onClick={() => {
                                                const provider = providers[activity.providerId];
                                                const providerName = provider ? provider.firstName : 'Unknown Provider';
                                                sendMessage(activity.name, providerName);
                                            }}
                                        >
                                            <i className="fa-brands fa-whatsapp"></i>
                                            <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>Book Now</span>
                                        </button>

                                        <button className="share" style={{ backgroundColor: '#3880C4' }} onClick={() => handleShare(activity.name)}>
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
                                    <div className="activity-card cards" key={course._id} >
                                        <div className="activity-image" onClick={() => handleClick(course._id)}>
                                            {/* Display image if available */}
                                            {course.images && course.images.length > 0 ? (
                                                <img src={`data:image/png;base64,${course.images[0]}`} alt="Course Image" />
                                            ) : (
                                                <img src={football} alt="Placeholder" />
                                            )}
                                        </div>
                                        <div className="activity-details" >
                                            <div className='activity-card-in' onClick={() => handleClick(course._id)}>
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
                                                            <img src={getGenderImage(course.preferredGender)} alt="gender" style={{ width: '5%', height: 'auto', marginTop: '-1%',marginRight:'10px'  }} />
                                                            <div className="age-group">
                                                                {course.ageGroup && course.ageGroup.length > 0 ? (
                                                                    <span className="age-text">{calculateAgeRange(course.ageGroup[0].ageStart, course.ageGroup[0].ageEnd)}</span>
                                                                ) : (
                                                                    <span className="age-text">Unavailable</span>
                                                                )}
                                                            </div>
                                                            <img src={calendar} alt='calendar' style={{ width: '5%', height: 'auto', marginTop: '-2%' }} />
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
                                                        <div className={`description-logo-container ${isExpanded ? 'visible' : 'hidden'}`}>
                                                        <p className="activity-description">
                                                                {course.description || 'No description available'}
                                                            </p>
                                                            <div className="additional-info">
                                                                <div className="info-image">
                                                                    {/* Display additional info image if available */}
                                                                    {providers[course.providerId] && providers[course.providerId].logo ? (
                                                                        <img src={`data:image/jpeg;base64,${providers[course.providerId].logo}`} alt="Provider" />
                                                                    ) : (
                                                                        <img src={placeholderLogo} alt="Placeholder Provider" />
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='gap-after' style={{ height: '3px' }}></div>
                                                </div>
                                            </div>

                                            {/* Chevron dropdown for smaller screens only */}
                                            <div className="chevron-dropdown" onClick={() => setIsExpanded(!isExpanded)}>
    {isExpanded ? 'See Less' : 'See More'}
    <i className={`fa-solid fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
</div>


                                            {/* Activity Actions Section */}
                                            <div className={`activity-actions ${isExpanded ? 'visible' : 'hidden'}`}>
                                            <div className='activity-buttons'>
                                                    <button
                                                        className="book-now"
                                                        style={{ backgroundColor: '#5EA858' }}
                                                        onClick={() => {
                                                            const provider = providers[course.providerId];
                                                            const providerName = provider ? provider.firstName : 'Unknown Provider';
                                                            sendMessage(course.name, providerName);
                                                        }}
                                                    >
                                                        <i className="fa-brands fa-whatsapp"></i>
                                                        <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>Book Now</span>
                                                    </button>

                                                    <button className="share" style={{ backgroundColor: '#3880C4' }} onClick={() => handleShare(course.name)}>
                                                        <i className="fa-solid fa-share"></i>
                                                        <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Share</span>
                                                    </button>
                                                    <button className="save" style={{ backgroundColor: '#3880C4' }} onClick={() => addToWishlist(course)}>
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
                    {advertisements.length > 0 ? (
                        advertisements.map((ad, index) => (
                            <div key={ad._id} className={`card bcard${index + 1}`}>
                                <img
                                    src={isSmallScreen ? `data:image/jpeg;base64,${ad.mobileImage}` : `data:image/jpeg;base64,${ad.desktopImage}`}
                                    alt={`Banner ${index + 1}`}
                                />
                            </div>
                        ))
                    ) : (
                        <p>No advertisements found.</p> // Fallback content
                    )}
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
