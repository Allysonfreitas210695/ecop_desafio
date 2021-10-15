import React, { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import { colors } from "../../constants/constants";
import { useAppState } from '../../hooks/UseAppstate';
import { MovieCard } from "../MovieCard";

const Container = styled.div`
  margin: 10px 25px;
`;

const ListArea = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const List = styled.div`
  width: ${(props) => props.width}px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.h3`
  margin: 20px 0px 20px 0px;
  color: ${colors.black};
`;

export const CategoryList = ({ category, listName}) => {
  const {appState, loadDataFromCategory} = useAppState();
  
  useEffect(() => {
    loadDataFromCategory(category);
  }, []);

  return (
    <Container>
      <Title>{listName}</Title>
      <ListArea>
        <List width={appState[category].length * 150}>
          {appState[category].map((item) => {
            return <MovieCard item={item} key={item.id} />;
          })}
        </List>
      </ListArea>
    </Container>
  );
};
