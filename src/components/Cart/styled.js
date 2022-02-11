import styled from "styled-components";

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

const HeaderDiv = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: "Lobster", cursive;
    font-size: 32px;
    color: #ffffff;
  }

  .cart {
    width: 90px;
    display: flex;
    justify-content: flex-end;
    img {
      width: 25px;
      height: 25px;
    }
  }
`;

export { HeaderDiv, HeaderContainer };
