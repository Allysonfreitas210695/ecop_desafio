import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSearch = styled.input`
  border-radius: 25px;
  padding: 15px 25px;
  border: none;
  width: 300px;
  margin-top: 50px;
`;

export const Search = () => {
  const [value, setValue] = useState('');
  return <StyledSearch placeholder="Search..." onChange={(e) => setValue(e.target.value)} value={value}></StyledSearch>;
};

