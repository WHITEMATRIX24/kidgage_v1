import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Pagination } from '@mui/material';
import image from '../components/assets/images/image.png';
import banner1 from '../components/assets/images/poster1.png'
import banner2 from '../components/assets/images/poster3.png'
import './Activities.css';
import './AcademyList.css';
import Footer from './Footer';
import Header2 from './Header2';
import ico from './assets/images/ico.png';

const Activities = () => {
    return (
        <>
            {/* Fixed Navbar */}
            <Header2/>
            {/* promoted */}
            <div className='activity-icons-container'>
                <img src={ico}></img>            </div>
            <div className='promoted-container '>
                {/*promoted  card 1 */}
                <div className="promoted-card card1">
                    <div className="promoted-image">
                        <img src={image} alt="Activity Image" />
                    </div>
                    <div className="activity-detailss">

                        <h3>Activity name</h3>

                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, repudiandae? Placeat temporibus corrupti eaque. Ipsa, error accusamus aliquid ex impedit libero, voluptate accusantium, ipsam quibusdam eos non molestiae soluta rerum!

                        </p>



                        <div className="info-row">
                            <div className="age-group">
                                <span>👶 0 - 15ys 9ms</span>
                            </div>
                            <div className="day-selector">
                                <span className="day active">Mo</span><span className="day">Tu</span><span className="day">We</span><span className="day">Th</span>
                                <span className="day active">Fr</span><span className="day">Sa</span><span className="day">Su</span>
                            </div>

                            {/* Additional Image and Reviews Section */}
                            <div className="additional-info" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                                <div className="activity-reviews" style={{ marginLeft: 'auto' }}>
                                    <span>⭐⭐⭐⭐⭐</span>
                                    <br /> 100+ reviews
                                </div>
                            </div>
                        </div>

                        <p className="plocation"><i class="fa-solid fa-location-dot"></i>
                            <span style={{ marginLeft: '5px' }}> Location </span></p>

                        
                    </div>
                    {/* Activity Actions Section */}
                    <div className="activity-actions">
                            <button className="book-now" style={{ backgroundColor: '#16D298' }}>
                                <i className="fa-brands fa-whatsapp"></i>
                                <span style={{ marginLeft: '5px' }}>Book Now</span>
                            </button>
                            <button className="share" style={{ backgroundColor: '#7889BC' }}>
                                <i class="fa-solid fa-share"></i>
                                <span style={{ marginLeft: '5px' }}> Share</span>

                            </button>
                            <button className="save" style={{ backgroundColor: '#7889BC' }}> <i class="fa-regular fa-bookmark"></i>
                                <span style={{ marginLeft: '5px' }}> Save</span>
                            </button>
                            <button className="more">See more from this provider</button>
                        </div>
                </div>
                {/* promoted card2 */}
                <div className="promoted-card card2">
                    <div className="promoted-image">
                        <img src={image} alt="Activity Image" />
                    </div>
                    <div className="activity-detailss">

                        <h3>Activity name</h3>

                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, repudiandae? Placeat temporibus corrupti eaque. Ipsa, error accusamus aliquid ex impedit libero, voluptate accusantium, ipsam quibusdam eos non molestiae soluta rerum!

                        </p>



                        <div className="info-row">
                            <div className="age-group">
                                <span>👶 0 - 15ys 9ms</span>
                            </div>
                            <div className="day-selector">
                                <span className="day active">Mo</span><span className="day">Tu</span><span className="day">We</span><span className="day">Th</span>
                                <span className="day active">Fr</span><span className="day">Sa</span><span className="day">Su</span>
                            </div>

                            {/* Additional Image and Reviews Section */}
                            <div className="additional-info" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                                <div className="activity-reviews" style={{ marginLeft: 'auto' }}>
                                    <span>⭐⭐⭐⭐⭐</span>
                                    <br /> 100+ reviews
                                </div>
                            </div>
                        </div>

                        <p className="plocation"><i class="fa-solid fa-location-dot"></i>
                            <span style={{ marginLeft: '5px' }}> Location </span></p>

                        
                    </div>
                    {/* Activity Actions Section */}
                    <div className="activity-actions">
                            <button className="book-now" style={{ backgroundColor: '#16D298' }}>
                                <i className="fa-brands fa-whatsapp"></i>
                                <span style={{ marginLeft: '5px' }}>Book Now</span>
                            </button>
                            <button className="share" style={{ backgroundColor: '#7889BC' }}>
                                <i class="fa-solid fa-share"></i>
                                <span style={{ marginLeft: '5px' }}> Share</span>

                            </button>
                            <button className="save" style={{ backgroundColor: '#7889BC' }}> <i class="fa-regular fa-bookmark"></i>
                                <span style={{ marginLeft: '5px' }}> Save</span>
                            </button>
                            <button className="more">See more from this provider</button>
                        </div>
                </div>
            </div>


            {/* Additional Activity Card Section */}
            <div style={{ height: '60px' }}></div>
            {/* cards starts */}
            {/* card 1 */}
            <div className='card-container'>
                <div className="activity-card">
                    <div className="activity-image">
                        <img src={image} alt="Activity Image" />
                    
                    </div>
                    <div className="activity-details">

                       <div className='activity-card-in'>
                       <h3>Activity name</h3>

                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, repudiandae? Placeat temporibus corrupti eaque. Ipsa, error accusamus aliquid ex impedit libero, voluptate accusantium, ipsam quibusdam eos non molestiae soluta rerum!

                        </p>

                        <p className="location"><i class="fa-solid fa-location-dot"></i>
                            <span style={{ marginLeft: '5px' }}> Location </span></p>

                        <div className="info-row">
                            <div className="age-group">
                                <span>👶 0 - 15ys 9ms</span>
                            </div>
                            <div className="day-selector">
                                <span className="day active">Mo</span><span className="day">Tu</span><span className="day">We</span><span className="day">Th</span>
                                <span className="day active">Fr</span><span className="day">Sa</span><span className="day">Su</span>
                            </div>

                            {/* Additional Image and Reviews Section */}
                            <div className="additional-info" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                                <div className="activity-reviews" style={{ marginLeft: 'auto' }}>
                                    <span>⭐⭐⭐⭐⭐</span>
                                    <br /> 100+ reviews
                                </div>
                            </div>
                        </div>

                       </div>
                        {/* Activity Actions Section */}
                        <div className="activity-actions">
                            <button className="book-now" style={{ backgroundColor: '#16D298' }}>
                                <i className="fa-brands fa-whatsapp"></i>
                                <span style={{ marginLeft: '5px' }}>Book Now</span>
                            </button>
                            <button className="share" style={{ backgroundColor: '#7889BC' }}>
                                <i class="fa-solid fa-share"></i>
                                <span style={{ marginLeft: '5px' }}> Share</span>

                            </button>
                            <button className="save" style={{ backgroundColor: '#7889BC' }}> <i class="fa-regular fa-bookmark"></i>
                                <span style={{ marginLeft: '5px' }}> Save</span>
                            </button>
                            <button className="more">See more from this provider</button>
                        </div>
                    </div>
                </div>
                <div style={{ height: '20px' }}></div>

                {/* card 2 */}
                <div className="activity-card">
                <div className="activity-image">
                        <img src={image} alt="Activity Image" />
                    
                    </div>
                    <div className="activity-details">

                       <div className='activity-card-in'>
                       <h3>Activity name</h3>

                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, repudiandae? Placeat temporibus corrupti eaque. Ipsa, error accusamus aliquid ex impedit libero, voluptate accusantium, ipsam quibusdam eos non molestiae soluta rerum!

                        </p>

                        <p className="location"><i class="fa-solid fa-location-dot"></i>
                            <span style={{ marginLeft: '5px' }}> Location </span></p>

                        <div className="info-row">
                            <div className="age-group">
                                <span>👶 0 - 15ys 9ms</span>
                            </div>
                            <div className="day-selector">
                                <span className="day active">Mo</span><span className="day">Tu</span><span className="day">We</span><span className="day">Th</span>
                                <span className="day active">Fr</span><span className="day">Sa</span><span className="day">Su</span>
                            </div>

                            {/* Additional Image and Reviews Section */}
                            <div className="additional-info" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                                <div className="activity-reviews" style={{ marginLeft: 'auto' }}>
                                    <span>⭐⭐⭐⭐⭐</span>
                                    <br /> 100+ reviews
                                </div>
                            </div>
                        </div>

                       </div>
                        {/* Activity Actions Section */}
                        <div className="activity-actions">
                            <button className="book-now" style={{ backgroundColor: '#16D298' }}>
                                <i className="fa-brands fa-whatsapp"></i>
                                <span style={{ marginLeft: '5px' }}>Book Now</span>
                            </button>
                            <button className="share" style={{ backgroundColor: '#7889BC' }}>
                                <i class="fa-solid fa-share"></i>
                                <span style={{ marginLeft: '5px' }}> Share</span>

                            </button>
                            <button className="save" style={{ backgroundColor: '#7889BC' }}> <i class="fa-regular fa-bookmark"></i>
                                <span style={{ marginLeft: '5px' }}> Save</span>
                            </button>
                            <button className="more">See more from this provider</button>
                        </div>
                    </div>
                </div>
                <div style={{ height: '20px' }}></div>


                {/* card 3 */}
                <div className="activity-card">
                <div className="activity-image">
                        <img src={image} alt="Activity Image" />
                    
                    </div>
                    <div className="activity-details">

                       <div className='activity-card-in'>
                       <h3>Activity name</h3>

                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, repudiandae? Placeat temporibus corrupti eaque. Ipsa, error accusamus aliquid ex impedit libero, voluptate accusantium, ipsam quibusdam eos non molestiae soluta rerum!

                        </p>

                        <p className="location"><i class="fa-solid fa-location-dot"></i>
                            <span style={{ marginLeft: '5px' }}> Location </span></p>

                        <div className="info-row">
                            <div className="age-group">
                                <span>👶 0 - 15ys 9ms</span>
                            </div>
                            <div className="day-selector">
                                <span className="day active">Mo</span><span className="day">Tu</span><span className="day">We</span><span className="day">Th</span>
                                <span className="day active">Fr</span><span className="day">Sa</span><span className="day">Su</span>
                            </div>

                            {/* Additional Image and Reviews Section */}
                            <div className="additional-info" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                                <div className="activity-reviews" style={{ marginLeft: 'auto' }}>
                                    <span>⭐⭐⭐⭐⭐</span>
                                    <br /> 100+ reviews
                                </div>
                            </div>
                        </div>

                       </div>
                        {/* Activity Actions Section */}
                        <div className="activity-actions">
                            <button className="book-now" style={{ backgroundColor: '#16D298' }}>
                                <i className="fa-brands fa-whatsapp"></i>
                                <span style={{ marginLeft: '5px' }}>Book Now</span>
                            </button>
                            <button className="share" style={{ backgroundColor: '#7889BC' }}>
                                <i class="fa-solid fa-share"></i>
                                <span style={{ marginLeft: '5px' }}> Share</span>

                            </button>
                            <button className="save" style={{ backgroundColor: '#7889BC' }}> <i class="fa-regular fa-bookmark"></i>
                                <span style={{ marginLeft: '5px' }}> Save</span>
                            </button>
                            <button className="more">See more from this provider</button>
                        </div>
                    </div>
                </div>
                <div style={{ height: '20px' }}></div>

            </div>
            {/* cards ends */}

             {/* banner section starts*/}

             <div class="banner-container">
                <div class="card">
                    <img src={banner1} alt="Image 1" />
                </div>
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
                    backgroundColor: "#7889BC", // custom hover color
                },
                "&.Mui-selected": {
                    backgroundColor: "#7889BC", // custom selected color
                },
            },
        }}
    />
</div>
            <div style={{ height: '40px' }}></div>

           
            {/* Footer Section */}
            <Footer />
        </>
    );
};

export default Activities;
