import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import {
  Form,
  Container,
  Content,
  Title,
  Description,
  Btn,
  SocialMedia,
} from "./style";
import logo from "../../assets/logo-SweetDreams.png";

export default function LoginPage() {
  console.log("ooi");
  console.log("logo");
  return (
    <Container>
      <Title>
        <img src={logo} />
        <h1>SweetDreams</h1>
      </Title>
    </Container>
  );
}
