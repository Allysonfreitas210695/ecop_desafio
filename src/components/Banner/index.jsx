import React from 'react';
import styled from 'styled-components';
import { Header } from '../Header';
import { colors } from '../../constants';
import { Search } from '../Search';

const Overlay = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2;
`;

const Container = styled.div`
  position: relative;
  height: 400px;
  max-height: 500px;
  background-image: url('https://wallpaperaccess.com/full/6993439.png');
  background-size: cover;
  background-position: center top;
`;

const Content = styled.div`
  padding: 25px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: ${colors.white};
  font-size: 25px;
`;

const Description = styled.p`
  color: ${colors.white};
  font: bold;
  font-size: 18px;
  width: 50%;
  line-height: 1.4rem;
`;


export const Banner = () => {
  return (
    <Container>
      <Header/>
      <Overlay>
        <Content>
          <Title>Squid Games</Title>
          <Description>
            Hundreds of cash-strapped contestants accept an invitation to
            compete in children's games for a tempting prize, but the stakes are
            deadly.
          </Description>
          <Search></Search>
        </Content>
      </Overlay>
    </Container>
  );
};
