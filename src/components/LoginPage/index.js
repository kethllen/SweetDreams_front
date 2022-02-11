import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import UserContext from "../../contexts/UserContext";
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
  const { setToken, setName } = useContext(UserContext);
  const [login, setlogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameInput, setNameInput] = useState("");
  const navigate = useNavigate();
  console.log(process.env.REACT_APP_BACK_URL + "sign-in");
  function handleLogin(e) {
    e.preventDefault();
    const promise = axios.post(process.env.REACT_APP_BACK_URL + "sign-in", {
      email,
      password,
    });

    promise.then((response) => {
      setToken(response.data.token);
      setName(response.data.name);
      navigate("/");
    });
    promise.catch((error) => {
      alert("Erro ao logar, tente novamente");
      console.log(error.response);
      setEmail("");
      setPassword("");
    });
  }
  function handleSingUp(e) {
    e.preventDefault();
    const promise = axios.post(process.env.REACT_APP_BACK_URL + "sign-up", {
      name: nameInput,
      email,
      password,
    });

    promise.then((response) => {
      setToken(response.data.token);
      console.log(response.data.token);
      setName(response.data.name);
      console.log(response.data.name);
      navigate("/");
    });
    promise.catch((error) => {
      alert("Erro ao cadastrar tente novamente!");
      console.log(error.response.data.message);
      setNameInput("");
      setEmail("");
      setPassword("");
    });
  }
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
            <Form onSubmit={handleSingUp}>
              <label className="label-input">
                <FaRegUser color="#7f8c8d" size={18} />
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder="Nome"
                />
              </label>
              <label className="label-input">
                <MdOutlineEmail color="#7f8c8d" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </label>

              <label className="label-input">
                <FaLock color="#7f8c8d" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                />
              </label>
              <BtnSec type="submit">Cadastrar</BtnSec>
            </Form>
          </SecondColumn>
        </Content>
      ) : (
        <Content className="second-content">
          <FirstColumn className="secondContentFirstColumn">
            <Title color={"#fff"}>Olá, amigo!</Title>
            <Description className="description-primary">
              Entre com seus dados pessoais
            </Description>
            <Description className="description-primary">
              e venha se deliciar com a gente!
            </Description>
            <BtnPri onClick={() => setlogin(false)}>Cadastrar</BtnPri>
          </FirstColumn>
          <SecondColumn className="secondContentSecondColumn">
            <Title color={"#72b4d4"}>entrar na conta</Title>
            <Description className="description-second">
              use sua conta de e-mail
            </Description>
            <Form onSubmit={handleLogin}>
              <label className="label-input">
                <MdOutlineEmail color="#7f8c8d" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </label>

              <label className="label-input">
                <FaLock color="#7f8c8d" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                />
              </label>
              <BtnSec type="submit">Cadastrar</BtnSec>
            </Form>
          </SecondColumn>
        </Content>
      )}
    </Container>
  );
}
