import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Header from "../Header";
import UserContext from "../../contexts/UserContext";
import {
  HeaderContainer,
  Title,
  HeaderDiv,
  CartDiv,
  CartContainer,
  CartNome,
  Total,
  Button,
  Quantity,
  BodyContainer,
  BodyDiv,
} from "./styled";

export default function Cart() {
  const { token, name } = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  let total = 0;
  const navigate = useNavigate();
  if (!token) {
    navigate("/cadastro");
  }
  console.log(token);
  useEffect(() => {
    const promise = axios.get(process.env.REACT_APP_BACK_URL + "cart", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    promise.then((response) => {
      console.log(response.data);
      setCartItems(response.data);
    });
    promise.catch((error) => {
      alert(error.response.data.message);
    });
  }, []);
  cartItems.map((product) => {
    const aux = product.subtotal.replace(",", ".");
    total += parseFloat(aux);
  });
  return (
    <>
      <Header main={false} />
      <Title>Cart</Title>
      <HeaderContainer>
        <HeaderDiv>
          <h1>CART ITEMS</h1>
          <h2>PRICE</h2>
          <h2>QUANTITY</h2>
          <h2>SUBTOTAL</h2>
        </HeaderDiv>
      </HeaderContainer>
      <CartContainer>
        {cartItems.map((product) => {
          return (
            <CartDiv>
              <CartNome>
                <img src={product.image} />
                <h1>{product.name}</h1>
              </CartNome>
              <h2>R$ {product.price}</h2>
              <h2>{product.quantity}</h2>
              <h2>R$ {product.subtotal}</h2>
            </CartDiv>
          );
        })}
        <Total>Total: R$ {total}</Total>
        <Button>Checkout</Button>
      </CartContainer>
    </>
  );
}
