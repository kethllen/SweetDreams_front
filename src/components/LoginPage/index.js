import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import {
  Form,
  Container,
  Content,
  Title,
  Description,
  BtnPri,
  BtnSec,
  SocialMedia,
  FirstColumn,
  SecondColumn,
  Logo,
} from "./style";
import logo from "../../assets/logo.png";

export default function LoginPage() {
  const [login, setlogin] = useState(false);
  return (
    <Container>
      <Logo>
        <img src={logo} />
        <h1>SweetDreams</h1>
      </Logo>
      {login === false ? (
        <Content>
          <FirstColumn className="firstContentFirstColumn">
            <Title color={"#fff"}>Bem-vindo de volta!</Title>
            <Description className="description-primary">
              Para se manter conectado conosco
            </Description>
            <Description className="description-primary">
              por favor faça o login com suas informações pessoais
            </Description>
            <BtnPri onClick={() => setlogin(true)}>Entrar</BtnPri>
          </FirstColumn>
          <SecondColumn className="firstContentSecondColumn">
            <Title color={"#72b4d4"}>criar conta</Title>
            <Description className="description-second">
              use seu email para se cadastrar
            </Description>
            <Form>
              <label className="label-input">
                <FaRegUser color="#7f8c8d" size={18} />
                <input type="text" placeholder="Nome" />
              </label>
              <label className="label-input">
                <MdOutlineEmail color="#7f8c8d" size={18} />
                <input type="email" placeholder="Email" />
              </label>

              <label className="label-input">
                <FaLock color="#7f8c8d" size={18} />
                <input type="password" placeholder="Senha" />
              </label>
              <BtnSec>Cadastrar</BtnSec>
            </Form>
          </SecondColumn>
        </Content>
      ) : (
        <Content className="second-content">
          <FirstColumn className="secondContentFirstColumn">
            <Title color={"#fff"}>Olá, amigo!</Title>
            <Description className="description-primary">
              Enter your personal details
            </Description>
            <Description className="description-primary">
              and start journey with us
            </Description>
            <BtnPri onClick={() => setlogin(false)}>sign up</BtnPri>
          </FirstColumn>
          <SecondColumn className="secondContentSecondColumn">
            <Title color={"#72b4d4"}>sign in to developer</Title>
            <Description className="description-second">
              or use your email account:
            </Description>
            <Form>
              <label className="label-input">
                <MdOutlineEmail color="#7f8c8d" size={18} />
                <input type="email" placeholder="Email" />
              </label>

              <label className="label-input">
                <FaLock color="#7f8c8d" size={18} />
                <input type="password" placeholder="Senha" />
              </label>
              <a className="password" href="#">
                forgot your password?
              </a>
              <BtnSec>sign in</BtnSec>
            </Form>
          </SecondColumn>
        </Content>
      )}
    </Container>
  );
}
