import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #add3e6;
`;
const Logo = styled.div`
  position: fixed;
  top: 40px;
  left: 500px;
  display: flex;
  justify-content: center;
  h1 {
    font-family: "Lobster", cursive;
    font-size: 40px;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 24px;
  }
  img {
    width: 40px;
    height: 40px;
  }
`;

export { Container, Logo };
