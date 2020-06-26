import React from 'react';
import styled from '@emotion/styled';

const headerContainer = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #ffff;
`;

const headerTecxt = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: 'Slabo 27px', serif;
  text-align: center;
`;

const Header = ({ title }) => {
  return (
    <>
      <headerContainer>
        <headerTecxt>{title}</headerTecxt>
      </headerContainer>
    </>
  );
};

export default Header;
