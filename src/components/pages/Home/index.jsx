import React from "react";
import styled from "styled-components";
import { Banner } from "../../Banner";
import { CategoryList } from "../../CategoryList";

const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Home = () => {
  return(
    <Container>
      <Banner/>
      <CategoryList/>
    </Container>
  );
}