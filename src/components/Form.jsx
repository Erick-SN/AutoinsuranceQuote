import React, { useState } from 'react';
import styled from '@emotion/styled';
import { getYearDifference, getValueBrand, getType } from '../helper';
const Input = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  --webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({ setAbstract }) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    brand: '',
    year: '',
    type: '',
  });
  const { brand, year, type } = data;
  const hanldeChangeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitQuote = (e) => {
    e.preventDefault();
    if (brand.trim() === '' || year.trim() === '' || type.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    let result = 2000;
    const difference = getYearDifference(year);
    result -= (difference * 3 * result) / 100;
    result = getValueBrand(brand) * result;
    const increasedType = getType(type);
    result = parseFloat(increasedType * result).toFixed(2);
    setAbstract({ quote: result, data });
  };

  return (
    <>
      <form onSubmit={onSubmitQuote}>
        {error ? <Error>All inputs are required</Error> : null}
        <Input>
          <Label>Brand</Label>
          <Select name='brand' value={brand} onChange={hanldeChangeData}>
            <option value=''>-- Select --</option>
            <option value='american'>American</option>
            <option value='european'>Erupean</option>
            <option value='asian'>Asian</option>
          </Select>
        </Input>
        <Input>
          <Label>Year</Label>
          <Select name='year' value={year} onChange={hanldeChangeData}>
            <option value=''>-- Select --</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
            <option value='2018'>2018</option>
            <option value='2017'>2017</option>
            <option value='2016'>2016</option>
            <option value='2015'>2015</option>
            <option value='2014'>2014</option>
            <option value='2013'>2013</option>
            <option value='2012'>2012</option>
          </Select>
        </Input>
        <Input>
          <Label>Type</Label>
          <InputRadio
            type='radio'
            name='type'
            value='basic'
            checked={type === 'basic'}
            onChange={hanldeChangeData}
          />
          Basic
          <InputRadio
            type='radio'
            name='type'
            value='premium'
            checked={type === 'premium'}
            onChange={hanldeChangeData}
          />
          Premium
        </Input>
        <Button type='submit'>Quote</Button>
      </form>
    </>
  );
};

export default Form;
