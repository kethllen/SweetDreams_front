import styled, { css, keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #add3e6;
`;
const Content = styled.div`
  background-color: #fff;
  border-radius: 15px;
  width: 960px;
  height: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    background-color: #72b4d4;
    width: 384px;
    height: 100%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;

    left: 0;
  }
  .first-content {
    display: flex;
  }
  .second-content {
    position: absolute;
    display: flex;
  }
`;
const FirstColumn = styled.div`
  position: absolute;
  text-align: center;
  width: 384px;
  z-index: 10;
  .firstContentFirstColumn {
    z-index: 10;
  }
  .secondContentFirstColumn {
    order: 2;
    z-index: -1;
  }
`;
const SecondColumn = styled.div`
  padding-left: 384px;
  width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  .firstContentSecondColumn {
    z-index: 11;
  }
  .secondContentSecondColumn {
    order: 1;
    z-index: -1;
  }
`;
const Title = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 28px;
  font-weight: bold;
  text-transform: capitalize;
  color: ${(props) => props.color};

  .title-second {
    color: #58af9b;
  }
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
const Description = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 30px;
  .description-primary {
    color: #fff;
  }
  .description-second {
    color: #7f8c8d;
  }
`;
const BtnPri = styled.button`
  border-radius: 15px;
  text-transform: uppercase;
  color: #fff;
  font-size: 10px;
  padding: 10px 50px;
  cursor: pointer;
  font-weight: bold;
  width: 150px;
  align-self: center;
  border: none;
  margin-top: 1rem;

  background-color: transparent;
  border: 1px solid #fff;
  transition: background-color 0.5s;

  &:hover {
    background-color: #fff;
    color: #72b4d4;
  }
`;
const BtnSec = styled.button`
  border-radius: 15px;
  text-transform: uppercase;
  color: #fff;
  font-size: 10px;
  padding: 10px 50px;
  cursor: pointer;
  font-weight: bold;
  width: 150px;
  align-self: center;
  border: none;
  margin-top: 1rem;

  background-color: #72b4d4;
  border: 1px solid #72b4d4;
  transition: background-color 0.5s;

  &:hover {
    background-color: #fff;
    border: 1px solid #72b4d4;
    color: #72b4d4;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 55%;
  input {
    padding: 0 5px;
    height: 45px;
    width: 100%;
    border: none;
    background-color: #ecf0f1;
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #ecf0f1 inset !important;
    -webkit-text-fill-color: #000 !important;
  }
  .label-input {
    background-color: #ecf0f1;
    display: flex;
    align-items: center;
    margin: 8px;
    padding: 0 5px;
  }
  .password {
    color: #34495e;
    font-size: 14px;
    margin: 15px 0;
    text-align: center;
  }
  .password::first-letter {
    text-transform: capitalize;
  }
`;
export {
  Form,
  Container,
  Content,
  Title,
  Description,
  BtnPri,
  BtnSec,
  FirstColumn,
  SecondColumn,
  Logo,
};
