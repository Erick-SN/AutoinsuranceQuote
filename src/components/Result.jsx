import React from 'react';
import styled from '@emotion/styled';

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const Text = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Result = ({ quote }) => {
  return quote === 0 ? (
    <Message>
      Please choose the make, year of your car and the type of insurance{' '}
    </Message>
  ) : (
    <p>Quote: ${quote}</p>
  );
};

export default Result;
