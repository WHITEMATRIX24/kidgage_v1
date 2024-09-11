import React, { useState } from 'react';
import styled from 'styled-components';
import th1 from './assets/images/thumbnail1.png';
import th2 from './assets/images/thumbnail2.png';
import th3 from './assets/images/thumbnail3.png';
import th4 from './assets/images/main-image.png';


const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainImage = styled.img`
  width: 100%;
  max-width: 450px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid transparent;
  &:hover,
  &.active {
    border-color: #007bff;
  }
`;

const ProductImages = () => {
  const [selectedImage, setSelectedImage] = useState(th1);

  const images = [
    th1,
    th2,
   th3,
    th4,
  ];

  return (
    <ImageContainer>
      <MainImage src={selectedImage} alt="Product" />
      <ThumbnailContainer>
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={selectedImage === image ? 'active' : ''}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </ThumbnailContainer>
    </ImageContainer>
  );
};

export default ProductImages;
