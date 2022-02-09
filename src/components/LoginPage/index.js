import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Container, StyledLink, Title, Input } from "./style";
import logo from "../../assets/logo-SweetDreams.png";

export default function LoginPage() {
  console.log("ooi");
  console.log("logo");
  return (
    <Container>
      <Title>
        <img src={logo} />
        MyWallet
      </Title>
    </Container>
  );
}
