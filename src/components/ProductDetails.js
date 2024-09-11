import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  padding: 20px;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const ProductTitle = styled.h1`
  font-size: 26px;
  color: #333;
  margin-bottom: 15px;
  font-weight: 600;
`;

const Price = styled.p`
  font-size: 22px;
  color: #ff5a5f;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const ProductDetails = () => {
  return (
    <DetailsContainer>
      <ProductTitle>Green Kid Crafts Subscription Box</ProductTitle>
      <Price>QAR. 24.95 per month</Price>
      <Description>
        Green Kid Crafts is a monthly subscription box that fosters creativity and learning for kids through eco-friendly, hands-on science and art projects.
      </Description>
    </DetailsContainer>
  );
};

export default ProductDetails;
