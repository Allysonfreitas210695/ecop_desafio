import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../constants/constants";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Link, useHistory } from "react-router-dom";


const Form = styled.form`
  width: 400px;
  height: 520px;
  font-family: "Roboto", sans-serif;
  margin: 0 auto;
  position: relative;
  top: 105px;
  text-align: center;
  border: 1px solid ${colors.cyan};
  border-radius: 20px;

  .link_cadastro{
    width: 100px;
    height: 40px;
    font-size: 16px;
    text-decoration: none;
    background-color: ${colors.blue};
    color: ${colors.white};
    padding-top: 10px;
    border: none;
    border-radius: 8px;

    &:hover { 
      background-color: #5086d6;
    
    }
  }

`;

const Title = styled.h1`
  font-size: 25px;
  color: ${colors.blue};
  font-weight: bold;
  padding-top: 10px;
  margin: 32px 0px 28px 0px;
`;

const Description = styled.h2`
  font-size: 20px;
  color: ${colors.blue};
  font-weight: 500;
  margin: 0px 0px 30px 0px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 400;
  color: ${colors.blue};
  margin-top: 45px;
  display: inline-block;
  width: 60%;
  text-align: left;
`;

const ContainerButtons = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  background-color: ${colors.cyan};
  color: ${colors.white};
  border: none;
  border-radius: 8px;

  cursor: pointer;

  &:hover{
    background-color: #43b1c0;
  }
`;

export const Login = () => {
 const history = useHistory();

  const teste = {
    emailTeste: "teste@example.com",
    senhaTeste: "123456",
  };

  const [email, setEmail] = useState({
    email: "",
    setEmail: "",
  });

  const [passWord, setPassWord] = useState({
    passWord: "",
    setPassWord: "",
  });

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleInputPassWord = (event) => {
    setPassWord(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    if(email === teste.emailTeste && passWord === teste.senhaTeste){
      history.push('/');
    }else{
      alert('Login Invalido')
    }
  };


  return (
    <>
      <Header />
      <Form onSubmit={handleSubmit}>
        <Title>Bem Vindo a tela de Login</Title>
        <Description>Preencha todos os campos</Description>

        <Label>
          Email:
          <Input
            placeholder="Digite seu email"
            type="email"
            onChange={handleInputEmail}
            required={true}
          />
        </Label>

        <Label>
          Senha:
          <Input
            placeholder="Digite sua Senha"
            type="passWord"
            onChange={handleInputPassWord}
            required={true}
          />
        </Label>

        <ContainerButtons>
          <Link to="/LoginForm" className="link_cadastro">Cadastro</Link>
          <Button id="2" className="btn-segundo">Entra</Button>
        </ContainerButtons>
      </Form>
    </>
  );
};
