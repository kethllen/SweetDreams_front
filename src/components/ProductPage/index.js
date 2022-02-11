import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Container, Logo } from "./style";

export default function ProductPage() {
  return (
    <Container>
      <Logo>
        <h1>Em produção</h1>
      </Logo>
    </Container>
  );
}
