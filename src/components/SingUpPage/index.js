import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Container, StyledLink, Title, Input } from "./style";
import TokenContext from "../../contexts/UserContext";
import NameContext from "../../contexts/NameContext";

export default function SingUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  function handleSingUp(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    } else {
      const promise = axios.post(
        "https://api-my--wallet.herokuapp.com/sign-up",
        {
          name,
          email,
          password,
        }
      );

      promise.then((response) => {
        console.log("cadastrei");
        navigate("/");
      });
      promise.catch((error) => {
        console.log(error.response.data.message);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      });
    }
  }

  return (
    <Container>
      <Title>MyWallet</Title>
      <form onSubmit={handleSingUp}>
        <Input>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirme a senha"
          />
          <button type="submit">Cadastrar</button>
        </Input>
      </form>
      <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  );
}
function LoginPage() {
  const { setToken } = useContext(TokenContext);
  const { setNameContext } = useContext(NameContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    const promise = axios.post(process.env.BACK_URL + "sign-in", {
      email,
      password,
    });

    promise.then((response) => {
      setToken(response.data.token);
      setNameContext(response.data.name);
      navigate("/");
    });
    promise.catch((error) => {
      console.log(error.response);
      setEmail("");
      setPassword("");
    });
  }

  return (
    <Container>
      <Title>MyWallet</Title>
      <form onSubmit={handleLogin}>
        <Input>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
          <button type="submit">Entrar</button>
        </Input>
      </form>
      <StyledLink to="/sing-up">Primeira vez? Cadastre-se!</StyledLink>
    </Container>
  );
}
