import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  display: block;
  margin: 0 auto;
  margin-top: 7px;
  padding: 18px;
  width: 100%;
  outline: none;
  border:1px solid rgba(0,0,0,0.2);
  border-radius: 10px;
`;


export const Input = ({ placeholder, type, onChange, required}) => {
  return (
    <InputStyle placeholder={placeholder} type={type} onChange={onChange} required={required}/>
  );
};
