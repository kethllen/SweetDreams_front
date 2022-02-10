import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SingUpPage from "./components/SingUpPage";
import MainPage from "./components/MainPage";
import UserContext from "./contexts/UserContext";
import ProductsContext from "./contexts/ProductsContext";

export default function App() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [products, setProducts] = useState();
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      < UserContext.Provider value={{ token, setToken, name, setName }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider >
    </ProductsContext.Provider>
  );
}
