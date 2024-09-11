import React, { useState } from 'react';
import './Shops.css';  // Import the new CSS file
import th1 from './assets/images/thumbnail1.png';
import th2 from './assets/images/thumbnail2.png';
import th3 from './assets/images/thumbnail3.png';
import th4 from './assets/images/main-image.png';
import Footer from './Footer';
import Header from './Header';

const Shops = () => {
  const [selectedImage, setSelectedImage] = useState(th1);
  const images = [th1, th2, th3, th4];

  const options = [
    { months: '1 Month', price: '$24.95' },
    { months: '3 Months', price: '$69.85' },
    { months: '6 Months', price: '$129.70' },
    { months: '12 Months', price: '$239.40' },
  ];

  const reviews = [
    {
      name: 'Jane Doe',
      text: 'My kids love these boxes! The projects are fun and educational, and we always look forward to the next one.',
    },
    {
      name: 'John Smith',
      text: 'Great quality and value for the price. Perfect for keeping my little ones entertained and learning!',
    },
  ];

  return (
    <div>
      {/* Header */}
      <Header/>

     <div className='shops-top'>
       {/* Product Images */}
       <div className="image-container">
        <img className="main-image" src={selectedImage} alt="Product" />
        <div className="thumbnail-container">
          {images.map((image, index) => (
            <img
              key={index}
              className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Product Details */}
     <div className='shops-right'>
     <div className="details-container">
        <h1 className="product-title">Green Kid Crafts Subscription Box</h1>
        <p className="price">QAR. 24.95 per month</p>
        <p className="description">
          Green Kid Crafts is a monthly subscription box that fosters creativity and learning for kids through eco-friendly, hands-on science and art projects.
        </p>
      </div>

      {/* Subscription Options */}
      <div className="options-container">
        {options.map((option, index) => (
          <div key={index} className="option">
            <strong>{option.months}</strong> - {option.price}
          </div>
        ))}
      </div>
     </div>
     </div>

      {/* Customer Reviews */}
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p className="reviewer-name">{review.name}</p>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>

      <Footer/>
    </div>
  );
};

export default Shops;
