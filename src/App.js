import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result';
import Abstract from './components/Abstract';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [abstract, setAbstract] = useState({
    quote: 0,
    data: {
      brand: '',
      year: '',
      type: '',
    },
  });
  const { quote, data } = abstract;
  return (
    <>
      <Container>
        <Header title='Auto insurance quote' />
        <FormContainer>
          <Form setAbstract={setAbstract} />
          <Abstract data={data} />
          <Result quote={quote} />
        </FormContainer>
      </Container>
    </>
  );
}

export default App;
