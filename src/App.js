import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Delivery from "./components/Delivery";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";
import UserContext from "./contexts/UserContext";

export default function App() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  return (
    <UserContext.Provider value={{ token, setToken, name, setName }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cadastro" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
