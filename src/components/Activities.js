import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '@mui/material';
import Box from '@mui/material/Box';
import image from '../components/assets/images/image.png';
import banner1 from '../components/assets/images/poster1.png'
import banner2 from '../components/assets/images/poster3.png'
import football1 from '../components/assets/images/footbal1.jpeg'
import football2 from '../components/assets/images/football2.jpeg'
import football from '../components/assets/images/football.jpg'
import logoside from '../components/assets/images/abc.png'
import logo from '../components/assets/images/abs.png'
import calendar from '../components/assets/images/calendar.png'
import baby from '../components/assets/images/baby.png'
import share from '../components/assets/images/share.png'
import './Activities.css';
import './AcademyList.css';
import Footer from './Footer';
import Header from './Header';
import ico from './assets/images/ico.png';
import SearchBar from './SearchBar';

const Activities = () => {

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

    return (
        <>
            {/* Fixed Navbar */}
            <Header />
            <SearchBar />
            {/* promoted */}
            <div style={{ height: '22px' }}></div>
            <div className='promoted-container '>
                {/*promoted  card 1 */}
                <div className="promoted-card card1">
                    <div className="promoted-image" onClick={handleClick}>
                        <img src={football1} alt="Activity Image" />
                    </div>
                    <div className="activity-detailss" onClick={handleClick}>

                        <div className='info-with-img'>

                            <div className='descp'>
                                <h3>Summer Football Camp</h3>

                                <div className="info-row">
                                    <img src={baby} alt='baby' style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }} />
                                    <div className="age-group">
                                        <span className="age-text">  0 - 15ys 9ms</span>
                                    </div>
                                    <img src={calendar} alt='baby' style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }} />
                                    <div className="day-selector">
                                        <span className="day">Su</span><span className="day active">Mo</span><span className="day">Tu</span><span className="day">We</span><span className="day">Th</span>
                                        <span className="day active">Fr</span><span className="day ">Sa</span>
                                    </div>

                                </div>
                                <div>
                                    <p>
                                        Join us for an exhilarating morning football camp designed for young athletes eager to develop their skills and enjoy the beautiful game. Our camp offers a perfect blend of fun, fitness, and football fundamentals, tailored to players of all ...</p>
                                    <div>
                                        <p className="plocation"><i class="fa-solid fa-location-dot"></i>
                                            <span style={{ marginLeft: '5px', fontSize: '12px' }}> Location </span></p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div style={{ height: '3px' }}></div>
                        <div className="additional-info" style={{ display: 'flex', flexDirection: 'column', position: 'relative', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto' }}>
                            <div className="info-image" style={{ marginLeft: '0px' }}>
                                <img src={logoside} alt="Info Image" style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div className="activity-reviewss" style={{ marginLeft: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <span>⭐⭐⭐⭐⭐</span>
                                <span className='review-text'>
                                    100+ reviews</span>
                            </div>
                        </div>





                    </div>
                    {/* Activity Actions Section */}
                    <div className="activity-actions">
                        <button
                            className="book-now"
                            style={{ backgroundColor: '#5EA858' }}
                            onClick={() => sendMessage('Summer Football Camp', 'Location Name')}>
                            <i className="fa-brands fa-whatsapp"></i>
                            <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>Book Now</span>
                        </button>
                        <button className="share" style={{ backgroundColor: '#3880C4' }}>
                            <i class="fa-solid fa-share"></i>
                            {/* <img src={share} alt='baby' style={{ width: '20%', height: '50%' }} /> */}
                            <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Share</span>

                        </button>
                        <button className="save" style={{ backgroundColor: '#3880C4' }}> <i class="fa-regular fa-bookmark"></i>
                            <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Save</span>
                        </button>
                        <div className='more-btn'>
                            <button className="more">See more from this provider</button>
                        </div>
                    </div>
                </div>
                {/* promoted card2 */}
                <div className="promoted-card card2">
                    <div className="promoted-image" onClick={handleClick}>
                        <img src={football1} alt="Activity Image" />
                    </div>
                    <div className="activity-detailss" onClick={handleClick}>

                        <div className='info-with-img'>

                            <div className='descp'>
                                <h3>Summer Football Camp</h3>

                                <div className="info-row">
                                    <img src={baby} alt='baby' style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }} />
                                    <div className="age-group">
                                        <span className="age-text">  0 - 15ys 9ms</span>
                                    </div>
                                    <img src={calendar} alt='baby' style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }} />
                                    <div className="day-selector">
                                        <span className="day">Su</span><span className="day active">Mo</span><span className="day">Tu</span><span className="day">We</span><span className="day">Th</span>
                                        <span className="day active">Fr</span><span className="day ">Sa</span>
                                    </div>

                                </div>
                                <div>
                                    <p>
                                        Join us for an exhilarating morning football camp designed for young athletes eager to develop their skills and enjoy the beautiful game. Our camp offers a perfect blend of fun, fitness, and football fundamentals, tailored to players of all ...</p>
                                    <div>
                                        <p className="plocation"><i class="fa-solid fa-location-dot"></i>
                                            <span style={{ marginLeft: '5px', fontSize: '12px' }}> Location </span></p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div style={{ height: '3px' }}></div>
                        <div className="additional-info" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto' }}>
                            <div className="info-image" style={{ marginLeft: '0px' }}>
                                <img src={logo} alt="Info Image" style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div className="activity-reviewss" style={{ marginLeft: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <span>⭐⭐⭐⭐⭐</span>
                                <span className='review-text'>
                                    100+ reviews</span>
                            </div>
                        </div>
                    </div>
                    {/* Activity Actions Section */}
                    <div className="activity-actions">
                        <button
                            className="book-now"
                            style={{ backgroundColor: '#5EA858' }}
                            onClick={() => sendMessage('Summer Football Camp', 'Location Name')}>
                            <i className="fa-brands fa-whatsapp"></i>
                            <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>Book Now</span>
                        </button>
                        <button className="share" style={{ backgroundColor: '#3880C4' }}>
                            <i class="fa-solid fa-share"></i>
                            <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Share</span>

                        </button>
                        <button className="save" style={{ backgroundColor: '#3880C4' }}> <i class="fa-regular fa-bookmark"></i>
                            <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Save</span>
                        </button>
                        <div className='more-btn'>
                            <button className="more">See more from this provider</button>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height: '60px' }}></div>
            {/* --------cards starts -----------*/}

            {/* card 1 */}
            <div className='card-container'>
                <div className='card-container-top'>
                    <div className="activity-card cards">
                        <div className="activity-image">
                            <img src={football1} alt="Activity Image" />

                        </div>
                        <div className="activity-details">

                            <div className='activity-card-in'>
                            <div className='info-with-img'>

                            <div className='descp'>
                                <h3>Summer Football Camp</h3>

                                <div className="info-row">
                                    <img src={baby} alt='baby' style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }} />
                                    <div className="age-group">
                                        <span className="age-text">  0 - 15ys 9ms</span>
                                    </div>
                                    <img src={calendar} alt='baby' style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }} />
                                    <div className="day-selector">
                                        <span className="day">Su</span><span className="day active">Mo</span><span className="day">Tu</span><span className="day">We</span><span className="day">Th</span>
                                        <span className="day active">Fr</span><span className="day ">Sa</span>
                                    </div>

                                </div>
                                <div>
                                    <p>
                                        Join us for an exhilarating morning football camp designed for young athletes eager to develop their skills and enjoy the beautiful game. Our camp offers a perfect blend of fun, fitness, and football fundamentals, tailored to players of all ...</p>
                                    <div>
                                        <p className="plocation"><i class="fa-solid fa-location-dot"></i>
                                            <span style={{ marginLeft: '5px', fontSize: '12px' }}> Location </span></p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: '3px' }}></div>
                            <div className="additional-info" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto' }}>
                                <div className="info-image" style={{ marginLeft: '0px' }}>
                                    <img src={logoside} alt="Info Image" style={{ width: '100%', height: 'auto' }} />
                                </div>
                                <div className="activity-reviewss" style={{ marginLeft: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span>⭐⭐⭐⭐⭐</span>
                                    <span className='review-text'>
                                        100+ reviews</span>
                                </div>
                            </div>
                        </div>

                        </div>
                         {/* Activity Actions Section */}
                         <div className="activity-actions" style={{ 'margin-top': '15px' }}>
                                <button
                                    className="book-now"
                                    style={{ backgroundColor: '#5EA858' }}
                                    onClick={() => sendMessage('Summer Football Camp', 'Location Name')}>
                                    <i className="fa-brands fa-whatsapp"></i>
                                    <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>Book Now</span>
                                </button>
                                <button className="share" style={{ backgroundColor: '#3880C4' }}>
                                    <i class="fa-solid fa-share"></i>
                                    <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Share</span>

                                </button>
                                <button className="save" style={{ backgroundColor: '#3880C4' }}> <i class="fa-regular fa-bookmark"></i>
                                    <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Save</span>
                                </button>
                                <div className='more-btn'>
                                    <button className="more">See more from this provider</button>
                                </div>                        
                            </div>
                           
                        </div>
                        
                    </div>
                    <div style={{ height: '0px' }}></div>

                    {/* card 2 */}
                    <div className="activity-card cards">
                        <div className="activity-image">
                            <img src={football2} alt="Activity Image" />

                        </div>
                        <div className="activity-details">

                            <div className='activity-card-in'>
                            <div className='info-with-img'>

                            <div className='descp'>
                                <h3>Summer Football Camp</h3>

                                <div className="info-row">
                                    <img src={baby} alt='baby' style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }} />
                                    <div className="age-group">
                                        <span className="age-text">  0 - 15ys 9ms</span>
                                    </div>
                                    <img src={calendar} alt='baby' style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }} />
                                    <div className="day-selector">
                                        <span className="day">Su</span><span className="day active">Mo</span><span className="day">Tu</span><span className="day">We</span><span className="day">Th</span>
                                        <span className="day active">Fr</span><span className="day ">Sa</span>
                                    </div>

                                </div>
                                <div>
                                    <p>
                                        Join us for an exhilarating morning football camp designed for young athletes eager to develop their skills and enjoy the beautiful game. Our camp offers a perfect blend of fun, fitness, and football fundamentals, tailored to players of all ...</p>
                                    <div>
                                        <p className="plocation"><i class="fa-solid fa-location-dot"></i>
                                            <span style={{ marginLeft: '5px', fontSize: '12px' }}> Location </span></p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: '3px' }}></div>
                            <div className="additional-info" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto' }}>
                                <div className="info-image" style={{ marginLeft: '0px' }}>
                                    <img src={logo} alt="Info Image" style={{ width: '100%', height: 'auto' }} />
                                </div>
                                <div className="activity-reviewss" style={{ marginLeft: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span>⭐⭐⭐⭐⭐</span>
                                    <span className='review-text'>
                                        100+ reviews</span>
                                </div>
                            </div>
                            </div>
                        </div>
                            {/* Activity Actions Section */}
                            <div className="activity-actions" style={{ 'margin-top': '15px' }}>
                                <button
                                    className="book-now"
                                    style={{ backgroundColor: '#5EA858' }}
                                    onClick={() => sendMessage('Summer Football Camp', 'Location Name')}>
                                    <i className="fa-brands fa-whatsapp"></i>
                                    <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>Book Now</span>
                                </button>
                                <button className="share" style={{ backgroundColor: '#3880C4' }}>
                                    <i class="fa-solid fa-share"></i>
                                    <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Share</span>

                                </button>
                                <button className="save" style={{ backgroundColor: '#3880C4' }}> <i class="fa-regular fa-bookmark"></i>
                                    <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Save</span>
                                </button>
                                <div className='more-btn'>
                                    <button className="more">See more from this provider</button>
                                </div>                        </div>
                        </div>
                    </div>
                </div>
            <div style={{ height: '20px' }}></div>


                {/* card 3 */}
                <div className="activity-card cards">
                    <div className="activity-image">
                        <img src={football2} alt="Activity Image" />

                    </div>
                    <div className="activity-details">

<div className='activity-card-in'>
<div className='info-with-img'>

<div className='descp'>
    <h3>Summer Football Camp</h3>

    <div className="info-row">
        <img src={baby} alt='baby' style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }} />
        <div className="age-group">
            <span className="age-text">  0 - 15ys 9ms</span>
        </div>
        <img src={calendar} alt='baby' style={{ width: '6.2%', height: 'auto', marginTop: '-2%' }} />
        <div className="day-selector">
            <span className="day">Su</span><span className="day active">Mo</span><span className="day">Tu</span><span className="day">We</span><span className="day">Th</span>
            <span className="day active">Fr</span><span className="day ">Sa</span>
        </div>

    </div>
    <div>
        <p>
            Join us for an exhilarating morning football camp designed for young athletes eager to develop their skills and enjoy the beautiful game. Our camp offers a perfect blend of fun, fitness, and football fundamentals, tailored to players of all ...</p>
        <div>
            <p className="plocation"><i class="fa-solid fa-location-dot"></i>
                <span style={{ marginLeft: '5px', fontSize: '12px' }}> Location </span></p>
        </div>
    </div>
</div>
<div style={{ height: '3px' }}></div>
<div className="additional-info" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto' }}>
    <div className="info-image" style={{ marginLeft: '0px' }}>
        <img src={logoside} alt="Info Image" style={{ width: '100%', height: 'auto' }} />
    </div>
    <div className="activity-reviewss" style={{ marginLeft: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span>⭐⭐⭐⭐⭐</span>
        <span className='review-text'>
            100+ reviews</span>
    </div>
</div>
</div>
                            <div style={{ height: '5px' }}></div>


                            <p className="plocation"><i class="fa-solid fa-location-dot"></i>
                                <span style={{ marginLeft: '5px', fontSize: '12px' }}> Location </span></p>

                        </div>
                        {/* Activity Actions Section */}
                        <div className="activity-actions" style={{ 'margin-top': '15px' }}>
                            <button
                                className="book-now"
                                style={{ backgroundColor: '#5EA858' }}
                                onClick={() => sendMessage('Summer Football Camp', 'Location Name')}>
                                <i className="fa-brands fa-whatsapp"></i>
                                <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>Book Now</span>
                            </button>
                            <button className="share" style={{ backgroundColor: '#3880C4' }}>
                                <i class="fa-solid fa-share"></i>
                                <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Share</span>

                            </button>
                            <button className="save" style={{ backgroundColor: '#3880C4' }}> <i class="fa-regular fa-bookmark"></i>
                                <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Save</span>
                            </button>
                            <div className='more-btn'>
                                <button className="more">See more from this provider</button>
                            </div>                        
                            </div>
                    </div>
                    
                </div>
                
                <div className="pagination-container">
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
          fontSize: "1rem", // Adjust font size
          padding: "6px 12px", // Adjust padding for size
          backgroundColor: "rgba(173, 216, 230, 0.3)", // Light background for all items
          color: "#333", // Text color for non-selected items
          "&:hover": {
            backgroundColor: "rgba(173, 216, 230, 0.5)", // Slightly darker on hover
          },
          "&.Mui-selected": {
            backgroundColor: "#605CA2", // Darker background for the selected item
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
            </div>
                <div style={{ height: '40px' }}></div>

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





            <div  className='gapss'></div>


            {/* Footer Section */}
            <Footer />
        </>
    );
};

export default Activities;
