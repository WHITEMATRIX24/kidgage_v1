import React from 'react';
import styled from 'styled-components';

const ReviewsContainer = styled.div`
  margin-top: 40px;
`;

const Review = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
`;

const ReviewerName = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ReviewText = styled.p`
  font-size: 16px;
  color: #555;
`;

const CustomerReviews = () => {
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
    <ReviewsContainer>
      {reviews.map((review, index) => (
        <Review key={index}>
          <ReviewerName>{review.name}</ReviewerName>
          <ReviewText>{review.text}</ReviewText>
        </Review>
      ))}
    </ReviewsContainer>
  );
};

export default CustomerReviews;
