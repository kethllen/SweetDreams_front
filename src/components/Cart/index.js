import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Header from "../Header";
import UserContext from "../../contexts/UserContext";

export default function Cart() {
  const { token, name } = useContext(UserContext);
  const { cartItems, setCartItems } = useState([]);
  const navigate = useNavigate();
  if (!token) {
    navigate("/cadastro");
  }
  console.log(token);
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(config);
    const promise = axios.get(process.env.REACT_APP_BACK_URL + "cart", config);
    promise.then((response) => {
      setCartItems(response.data);
      console.log(cartItems);
    });
    promise.catch((error) => {
      alert(error.response.data.message);
    });
  }, []);
  return <Header main={false} />;
}
