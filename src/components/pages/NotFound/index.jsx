import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const NotFound = () => {
  return (
    <Container>
      Not Found 404 😢
    </Container>
  )
}
