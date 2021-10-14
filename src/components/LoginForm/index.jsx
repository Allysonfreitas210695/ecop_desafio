import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import { Header } from "../Header";
import { Input } from "../Input";

const Form = styled.form`
  width: 510px;
  height: 520px;
  font-family: "Roboto", sans-serif;
  margin: 0 auto;
  position: relative;
  top: 100px;
  text-align: center;
  border: 1px solid ${colors.white};
  border-radius: 20px;
`;

const Title = styled.h1`
  font-size: 25px;
  color: ${colors.white};
  font-weight: bold;
  padding-top: 10px;
  margin: 20px 0px 28px 0px;
`;

const Description = styled.h2`
  font-size: 20px;
  color: ${colors.white};
  font-weight: 500;
  margin: 0px 0px 20px 0px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 400;
  color: ${colors.white};
  margin-top: 45px;
  display: inline-block;
  width: 60%;
  text-align: left;
`;

const Button = styled.button`
  display: block;
  font-weight: 400;
  font-size: 17px;
  background-color: #110f0f;
  color: ${colors.white};
  padding: 16px;
  margin-left: 240px;
  margin-top: 45px;

  border: none;
  border-radius: 10px;

  &:hover {
    background-color: ${colors.black};
    cursor: pointer;
  }
`;

export const LoginForm = () => {
  const [email, setEmail] = useState({
    email: "",
    setEmail: "",
  });

  const [passWord, setPassWord] = useState({
    passWord: "",
    setPassWord: "",
  });

  const handleInputEmail = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handleInputPassWord = (event) => {
    // console.log(event.target.value);
    setPassWord(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.email !== "" && passWord.passWord !== "") {
      alert("Cadastro Realizado com Sucesso!");
    }
  };

  return (
    <>
      <Header />
      <Form onSubmit={handleSubmit}>
        <Title>Bem Vindo a tela de Cadastro</Title>
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

        <Button>Finalizar Cadastro</Button>
      </Form>
    </>
  );
};
