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
  LoadingDiv,
} from "./styled";
import loading from "../../assets/loading.svg";

export default function Cart() {
  const { token, name } = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  const [render, setRender] = useState(0);
  let total = 0;
  const navigate = useNavigate();
  if (!token) {
    navigate("/cadastro");
  }
  useEffect(() => {
    const promise = axios.get(process.env.REACT_APP_BACK_URL + "cart", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    promise.then((response) => {
      setCartItems(response.data);
    });
    promise.catch((error) => {
      console.log(error.data);
      navigate("/cadastro");
    });
  }, [token, navigate, render]);

  if (!cartItems) {
    return (
      <LoadingDiv>
        <img src={loading} alt="" />
      </LoadingDiv>
    );
  }
  function updateItem(item, inc) {
    let qtd = 0;
    if (inc == true) {
      qtd = parseInt(item.quantity) + 1;
    } else {
      qtd = parseInt(item.quantity) - 1;
    }
    console.log(qtd);
    const id = item.productId;
    const productUpdate = {
      cart: {
        productId: id,
        quantity: qtd,
      },
    };
    console.log(productUpdate);
    const promise = axios.put(
      process.env.REACT_APP_BACK_URL + "cart",
      productUpdate,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    promise.then((response) => {
      setRender(render + 1);
    });
    promise.catch((error) => {
      alert(error.response.data.message);
    });
  }

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
      <BodyContainer>
        <BodyDiv>
          <CartContainer>
            {cartItems.map((product) => {
              return (
                <CartDiv key={product.productId}>
                  <CartNome>
                    <img src={product.image} />
                    <h1>{product.name}</h1>
                  </CartNome>
                  <h2>R$ {product.price}</h2>
                  <h2>
                    <Quantity
                      color={"#87ceeb"}
                      size={"22px"}
                      top={"0px"}
                      onClick={() => updateItem(product, true)}
                    >
                      +
                    </Quantity>
                    <Quantity color={"#363636"} size={"18px"} top={"7px"}>
                      {product.quantity}
                    </Quantity>
                    <Quantity
                      color={"#87ceeb"}
                      size={"30px"}
                      top={"0px"}
                      onClick={() => updateItem(product, false)}
                    >
                      -
                    </Quantity>
                  </h2>
                  <h2>R$ {product.subtotal}</h2>
                </CartDiv>
              );
            })}
            <Total>Total: R$ {total}</Total>
            <Button onClick={() => navigate("/pagamento")}>Checkout</Button>
          </CartContainer>
        </BodyDiv>
      </BodyContainer>
    </>
  );
}
