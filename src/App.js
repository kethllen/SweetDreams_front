import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ProductPage from "./components/ProductPage";
import UserContext from "./contexts/UserContext";

export default function App() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  return (
    <UserContext.Provider value={{ token, setToken, name, setName }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cadastro" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
