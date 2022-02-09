import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import UserContext from "./contexts/UserContext";
import UrlContext from "./contexts/UrlContext";

export default function App() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  return (
    <UserContext.Provider value={{ token, setToken, name, setName }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sing-up" element={<SingUpPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}