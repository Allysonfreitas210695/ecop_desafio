import React from "react";
import styled from "styled-components";
import categories from "../../constants/categories";
import { Banner } from "../../components/Banner";
import { CategoryList } from "../../components/CategoryList";

const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Home = () => {
  return(
    <Container>
      <Banner/>
      <CategoryList listName="Em alta" category={categories.trending}></CategoryList>
      <CategoryList listName="Recomendados" category={categories.topRated}></CategoryList>
      <CategoryList listName="Ação" category={categories.actionMovies}></CategoryList>
      <CategoryList listName="Comédia" category={categories.comedyMovies}></CategoryList>
    </Container>
  );
}