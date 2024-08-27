import React from 'react';
import { Pagination } from '@mui/material';
import image from '../components/assets/images/image.png';
import banner1 from '../components/assets/images/poster1.png'
import banner2 from '../components/assets/images/poster3.png'
import football1 from '../components/assets/images/footbal1.jpeg'
import football2 from '../components/assets/images/football2.jpeg'
import football from '../components/assets/images/football.jpg'
import logoside from '../components/assets/images/abc.png'
import logo from '../components/assets/images/abs.png'
import './Activities.css';
import './AcademyList.css';
import Footer from './Footer';
import Header2 from './Header2';
import ico from './assets/images/ico.png';

const Activities = () => {
    const sendMessage = (activityName) => {
        const message = `Hello! I am interested in booking the ${activityName} provided by Sparta Academy. Can you please provide more details?`;
        const whatsappUrl = `https://wa.me/9447526695?text=${encodeURIComponent(message)}`;
        console.log("WhatsApp URL:", whatsappUrl); // Log the URL for debugging
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            {/* Fixed Navbar */}
            <Header2 />
            {/* promoted */}
            <div className='activity-icons-container'>
                <img src={ico}></img>            </div>
            <div style={{ height: '22px' }}></div>

            <div className='promoted-container '>
                {/*promoted  card 1 */}
                <div className="promoted-card card1">
                    <div className="promoted-image">
                        <img src={football1} alt="Activity Image" />
                    </div>
                    <div className="activity-detailss">

                        <div className='info-with-img'>

                            <div className='descp'>
                                <h3>Summer Football Camp</h3>
                                <p>
                                    Join us for an exhilarating morning football camp designed for young athletes eager to develop their skills and enjoy the beautiful game. Our camp offers a perfect blend of fun, fitness, and football fundamentals, tailored to players of all ...</p>
                            </div>

                            

                            <div className="info-image" style={{marginRight:'25px'}}>
                                <img src={logoside} alt="Info Image" style={{ width: '100%', height: 'auto' }} />
                            </div>
                        </div>



                        <div className="info-row">
                            <div className="age-group">
                                <span className="age-text">👶 0 - 15ys 9ms</span>
                            </div>
                            <div className="day-selector">
                                <span className="day">Mo</span><span className="day">Tu</span><span className="day">We</span><span className="day">Th</span>
                                <span className="day active">Fr</span><span className="day active">Sa</span><span className="day active">Su</span>
                            </div>

                            {/* Additional Image and Reviews Section */}
                            <div className="additional-info" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                                <div className="activity-reviews" style={{ marginLeft: 'auto' }}>
                                    <span>⭐⭐⭐⭐⭐</span>
                                    <br /> <span className='review-text'>
                                    100+ reviews</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: '5px' }}></div>


                        <p className="plocation"><i class="fa-solid fa-location-dot"></i>
                            <span style={{ marginLeft: '5px', fontSize: '12px' }}> Location </span></p>


                    </div>
                    {/* Activity Actions Section */}
                    <div className="activity-actions">
                        <button
                            className="book-now"
                            style={{ backgroundColor: '#16D298' }}
                            onClick={() => sendMessage('Summer Football Camp', 'Location Name')}>
                            <i className="fa-brands fa-whatsapp"></i>
                            <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>Book Now</span>
                        </button>
                        <button className="share" style={{ backgroundColor: '#7889BC' }}>
                            <i class="fa-solid fa-share"></i>
                            <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Share</span>

                        </button>
                        <button className="save" style={{ backgroundColor: '#7889BC' }}> <i class="fa-regular fa-bookmark"></i>
                            <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Save</span>
                        </button>
                        <div className='more-btn'>
                            <button className="more">See more from this provider</button>
                        </div>
                    </div>
                </div>
                {/* promoted card2 */}
                <div className="promoted-card card2">
                    <div className="promoted-image">
                        <img src={football2} alt="Activity Image" />
                    </div>
                    <div className="activity-detailss">

                        <div className='info-with-img'>

                            <div className='descp'>
                                <h3>Football Camp</h3>
                                <p>
                                    Join us for exhilarating morning football camp designed for young athletes eager to develop their skills and enjoy the beautiful game. Our camp offers a perfect blend of fun, fitness, and football fundamentals, tailored to players of all ...</p>

                            </div>

                            <div className="info-image" style={{marginRight:'25px'}}>
                                <img src={logo} alt="Info Image" />
                            </div>
                        </div>



                        <div className="info-row">
                            <div className="age-group">
                                <span className="age-text">👶 0 - 15ys 9ms</span>
                            </div>
                            <div className="day-selector">
                                <span className="day active">Mo</span><span className="day">Tu</span><span className="day">We</span><span className="day">Th</span>
                                <span className="day active">Fr</span><span className="day">Sa</span><span className="day">Su</span>
                            </div>

                            {/* Additional Image and Reviews Section */}
                            <div className="additional-info" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                                <div className="activity-reviews" style={{ marginLeft: 'auto' }}>
                                    <span>⭐⭐⭐⭐⭐</span>
                                    <br /> <span className='review-text'>
                                    100+ reviews</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ height: '5px' }}></div>


                        <p className="plocation"><i class="fa-solid fa-location-dot"></i>
                            <span style={{ marginLeft: '5px', fontSize: '12px' }}> Location </span></p>


                    </div>
                    {/* Activity Actions Section */}
                    <div className="activity-actions">
                        <button
                            className="book-now"
                            style={{ backgroundColor: '#16D298' }}
                            onClick={() => sendMessage('Summer Football Camp', 'Location Name')}>
                            <i className="fa-brands fa-whatsapp"></i>
                            <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>Book Now</span>
                        </button>
                        <button className="share" style={{ backgroundColor: '#7889BC' }}>
                            <i class="fa-solid fa-share"></i>
                            <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Share</span>

                        </button>
                        <button className="save" style={{ backgroundColor: '#7889BC' }}> <i class="fa-regular fa-bookmark"></i>
                            <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Save</span>
                        </button>
                        <div className='more-btn'>
                            <button className="more" >See more from this provider</button>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height: '60px' }}></div>
            {/* --------cards starts -----------*/}
            {/* card 1 */}
            <div className='card-container'>
                <div className="activity-card cards">
                    <div className="activity-image">
                        <img src={football1} alt="Activity Image" />

                    </div>
                    <div className="activity-details">

                        <div className='activity-card-in'>
                            <div className='info-with-img'>

                                <div className='descp'>
                                    <h3>Activity name</h3>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.Placeat temporibus corrupti eaque. Ipsa, error accusamus aliquid ex impedit libero, voluptate accusantium,  eos non molestiae soluta rerum!
                                    </p>
                                    <p className="location"  style={{ marginTop: '25px' }}><i class="fa-solid fa-location-dot"></i>
                                        <span style={{ marginLeft: '5px' }}>Location</span>
                                    </p>
                                </div>

                                <div className="info-image" style={{marginRight:'30px'}} >
                                    <img src={logoside} alt="Info Image"  />
                                </div>
                            </div>

                            <div style={{ height: '20px' }}></div>

                            <div className="info-row">
                                <div className="age-group">
                                    <span className="age-text">👶 0 - 15ys 9ms</span>
                                </div>
                                <div className="day-selector">
                                    <span className="day active">Mo</span><span className="day">Tu</span><span className="day">We</span><span className="day">Th</span>
                                    <span className="day active">Fr</span><span className="day">Sa</span><span className="day">Su</span>
                                </div>

                                {/* Additional Image and Reviews Section */}
                                <div className="additional-info" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                                    <div className="activity-reviews" style={{ marginLeft: 'auto' }}>
                                        <span>⭐⭐⭐⭐⭐</span>
                                        <br /> <span className='review-text'>
                                        100+ reviews</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* Activity Actions Section */}
                        <div className="activity-actions" style={{'margin-top': '15px'}}>
                            <button
                                className="book-now"
                                style={{ backgroundColor: '#16D298' }}
                                onClick={() => sendMessage('Summer Football Camp', 'Location Name')}>
                                <i className="fa-brands fa-whatsapp"></i>
                                <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>Book Now</span>
                            </button>
                            <button className="share" style={{ backgroundColor: '#7889BC' }}>
                                <i class="fa-solid fa-share"></i>
                                <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Share</span>

                            </button>
                            <button className="save" style={{ backgroundColor: '#7889BC' }}> <i class="fa-regular fa-bookmark"></i>
                                <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Save</span>
                            </button>
                            <div className='more-btn'>
                            <button className="more">See more from this provider</button>
                        </div>                        </div>
                    </div>
                </div>
                <div style={{ height: '20px' }}></div>

                {/* card 2 */}
                <div className="activity-card cards">
                    <div className="activity-image">
                        <img src={football2} alt="Activity Image" />

                    </div>
                    <div className="activity-details">

                        <div className='activity-card-in'>
                            <div className='info-with-img'>

                                <div className='descp'>
                                    <h3>Activity name</h3>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.Placeat temporibus corrupti eaque. Ipsa, error accusamus aliquid ex impedit libero, voluptate accusantium,  eos non molestiae soluta rerum!
                                    </p>
                                    <p className="location"  style={{ marginTop: '25px' }}><i class="fa-solid fa-location-dot"></i>
                                        <span style={{ marginLeft: '5px' }}>Location</span>
                                    </p>
                                </div>

                                <div className="info-image"  style={{marginRight:'30px'}}>
                                    <img src={logo} alt="Info Image" />
                                </div>
                            </div>

                            <div style={{ height: '20px' }}></div>


                            <div className="info-row">
                                <div className="age-group">
                                    <span className="age-text">👶 0 - 15ys 9ms</span>
                                </div>
                                <div className="day-selector">
                                    <span className="day active">Mo</span><span className="day">Tu</span><span className="day">We</span><span className="day">Th</span>
                                    <span className="day active">Fr</span><span className="day">Sa</span><span className="day">Su</span>
                                </div>

                                {/* Additional Image and Reviews Section */}
                                <div className="additional-info" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                                    <div className="activity-reviews" style={{ marginLeft: 'auto' }}>
                                        <span>⭐⭐⭐⭐⭐</span>
                                        <br /> <span className='review-text'>
                                        100+ reviews</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* Activity Actions Section */}
                        <div className="activity-actions" style={{'margin-top': '15px'}}>
                            <button
                                className="book-now"
                                style={{ backgroundColor: '#16D298' }}
                                onClick={() => sendMessage('Summer Football Camp', 'Location Name')}>
                                <i className="fa-brands fa-whatsapp"></i>
                                <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>Book Now</span>
                            </button>
                            <button className="share" style={{ backgroundColor: '#7889BC' }}>
                                <i class="fa-solid fa-share"></i>
                                <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Share</span>

                            </button>
                            <button className="save" style={{ backgroundColor: '#7889BC' }}> <i class="fa-regular fa-bookmark"></i>
                                <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Save</span>
                            </button>
                            <div className='more-btn'>
                            <button className="more">See more from this provider</button>
                        </div>                        </div>
                    </div>
                </div>
                <div style={{ height: '20px' }}></div>


                {/* card 3 */}
                <div className="activity-card cards">
                    <div className="activity-image">
                        <img src={image} alt="Activity Image" />

                    </div>
                    <div className="activity-details">

                        <div className='activity-card-in'>
                            <div className='info-with-img'>

                                <div className='descp'>
                                    <h3>Activity name</h3>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.Placeat temporibus corrupti eaque. Ipsa, error accusamus aliquid ex impedit libero, voluptate accusantium,  eos non molestiae soluta rerum!
                                    </p>
                                    <p className="location" style={{ marginTop: '25px' }} ><i class="fa-solid fa-location-dot"></i>
                                        <span style={{ marginLeft: '5px' }}>Location</span>
                                    </p>
                                </div>

                                <div className="info-image"  style={{marginRight:'30px'}}>
                                    <img src={logo} alt="Info Image" />
                                </div>
                            </div>
                            <div style={{ height: '20px' }}></div>

                            <div className="info-row">
                                <div className="age-group">
                                    <span className="age-text">👶 0 - 15ys 9ms</span>
                                </div>
                                <div className="day-selector">
                                    <span className="day active">Mo</span><span className="day">Tu</span><span className="day">We</span><span className="day">Th</span>
                                    <span className="day active">Fr</span><span className="day">Sa</span><span className="day">Su</span>
                                </div>

                                {/* Additional Image and Reviews Section */}
                                <div className="additional-info" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                                    <div className="activity-reviews" style={{ marginLeft: 'auto' }}>
                                        <span>⭐⭐⭐⭐⭐</span>
                                        <br /><span className='review-text'>
                                        100+ reviews</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* Activity Actions Section */}
                        <div className="activity-actions" style={{'margin-top': '15px'}}>
                            <button
                                className="book-now"
                                style={{ backgroundColor: '#16D298' }}
                                onClick={() => sendMessage('Summer Football Camp', 'Location Name')}>
                                <i className="fa-brands fa-whatsapp"></i>
                                <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>Book Now</span>
                            </button>
                            <button className="share" style={{ backgroundColor: '#7889BC' }}>
                                <i class="fa-solid fa-share"></i>
                                <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Share</span>

                            </button>
                            <button className="save" style={{ backgroundColor: '#7889BC' }}> <i class="fa-regular fa-bookmark"></i>
                                <span style={{ marginLeft: '5px', fontWeight: 'bold' }}> Save</span>
                            </button>
                            <div className='more-btn'>
                            <button className="more">See more from this provider</button>
                        </div>                        </div>
                    </div>
                </div>
                <div style={{ height: '40px' }}></div>

            </div>
            {/* cards ends */}

            {/* banner section starts*/}

            <div class="banner-container">
                <div class="card">
                    <img src={banner1} alt="Image 1" />
                </div>
                {/* <div style={{ height: '10px' }}></div> */}
                <div class="card">
                    <img src={banner2} alt="Image 2" />
                </div>
            </div>
            {/* banner section ends */}

            <div className="pagination-container">
  <Pagination
    count={10}
    size="large"
    sx={{
      "& .MuiPaginationItem-root": {
        "&:hover": {
          backgroundColor: "#7889BC",
        },
        "&.Mui-selected": {
          backgroundColor: "#7889BC",
        },
      },
      "@media (max-width: 600px)": {
        "& .MuiPaginationItem-root": {
          "&:hover": {
            backgroundColor: "#7889BC",
          },
          "&.Mui-selected": {
            backgroundColor: "#7889BC",
          },
        },
      },
    }}
  />
</div>

            <div style={{ height: '80px' }}></div>


            {/* Footer Section */}
            <Footer />
        </>
    );
};

export default Activities;
