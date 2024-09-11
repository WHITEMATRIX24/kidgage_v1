import React from 'react';
import styled from 'styled-components';

const OptionsContainer = styled.div`
  margin: 20px 0;
`;

const Option = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f8f8f8;
  }
`;

const SubscriptionOptions = () => {
  const options = [
    { months: '1 Month', price: '$24.95' },
    { months: '3 Months', price: '$69.85' },
    { months: '6 Months', price: '$129.70' },
    { months: '12 Months', price: '$239.40' },
  ];

  return (
    <OptionsContainer>
      {options.map((option, index) => (
        <Option key={index}>
          <strong>{option.months}</strong> - {option.price}
        </Option>
      ))}
    </OptionsContainer>
  );
};

export default SubscriptionOptions;
