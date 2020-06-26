import React from 'react';
import styled from '@emotion/styled';
import { upperCase } from '../helper';

const Container = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Abstract = ({ data }) => {
  const { brand, year, type } = data;
  if (brand === '' || year === '' || type === '') return null;
  return (
    <>
      <Container>
        <h2>Quote</h2>
        <ul>
          <li>Brand: {upperCase(brand)}</li>
          <li>Type: {upperCase(type)}</li>
          <li>Year: {year}</li>
        </ul>
      </Container>
    </>
  );
};

export default Abstract;
