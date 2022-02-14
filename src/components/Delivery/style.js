import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 100%;
  background-color: #87ceeb;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 379px;
    height: 301px;
  }
  h1 {
    font-family: "Open Sans", sans-serif;
    font-size: 25px;
    margin-right: 200px;
    color: #ffffff;
  }
`;
const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: lightblue;

  position: fixed;
  top: 0;
  z-index: 1;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  h1 {
    font-family: "Lobster", cursive;
    font-size: 32px;
    color: #ffffff;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;
const HeaderDiv = styled.div`
  width: 900px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .house-icon {
    cursor: pointer;
  }

  .back-button {
    width: 30px;
    height: 30px;

    padding-right: 60px;
  }

  h1 {
    font-family: "Lobster", cursive;
    font-size: 32px;
    color: #ffffff;
  }

  .cart {
    width: 90px;
    height: 30px;

    display: flex;
    justify-content: flex-end;

    position: relative;

    .cart-quantity {
      width: 12px;
      height: 12px;

      font-weight: bold;
      color: #ffffff;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 9px;

      border-radius: 50%;

      background-color: red;

      position: absolute;
      right: 0;
    }

    .cart-icon {
      width: 25px;
      height: 25px;

      margin-right: 5px;

      align-self: center;

      cursor: pointer;
    }
  }
`;

export { ContainerDiv, HeaderDiv, HeaderContainer, Logo };
