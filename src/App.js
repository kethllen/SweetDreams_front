import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";
import CheckoutPage from "./components/CheckoutPage";
import UserContext from "./contexts/UserContext";

export default function App() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  return (
    < UserContext.Provider value={{ token, setToken, name, setName }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cadastro" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pagamento" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider >
  );
}
