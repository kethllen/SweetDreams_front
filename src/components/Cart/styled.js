import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  margin-left: 190px;
  margin-top: 120px;
  margin-bottom: 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 28px;
  color: #363636;
`;

const HeaderDiv = styled.div`
  margin-top: 10px;
  border-top: 2px solid #87ceeb;
  border-bottom: 2px solid #87ceeb;
  width: 900px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    margin-right: 200px;
    color: #363636;
  }
  h2 {
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    color: #363636;
  }
`;

const CartNome = styled.div`
  width: 220px;
  height: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
  padding-bottom: 20px;
  margin-right: 25px;
  h1 {
    white-space: nowrap;
    width: 80px;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    color: #363636;
  }
  img {
    height: 130px;
    width: 130px;
    border: 2px solid #87ceeb;
    border-radius: 5px;
  }
`;

const CartDiv = styled.div`
  margin-top: 20px;
  border-bottom: 2px solid #87ceeb;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    color: #363636;
  }
  img {
    height: 120px;
    width: 120px;
  }
`;
const CartContainer = styled.div`
  margin-top: 20px;
  margin-left: 190px;
  width: 900px;
  height: 120px;
  display: flex;
  flex-direction: column;
`;
const Total = styled.h2`
  margin-top: 15px;
  font-family: "Open Sans", sans-serif;
  font-size: 25px;
  color: #363636;
  text-align: end;
`;
const Button = styled.button`
  margin-top: 15px;
  font-family: "Open Sans", sans-serif;
  width: 18%;
  color: #ffffff;

  padding: 10px 0;

  background-color: #87ceeb;

  border-radius: 10px;
  border: 2px solid #00ced1;

  cursor: pointer;
  font-size: 25px;
  border-radius: 5px;
  align-self: end;
`;

export {
  HeaderDiv,
  HeaderContainer,
  Title,
  CartDiv,
  CartContainer,
  CartNome,
  Total,
  Button,
};
