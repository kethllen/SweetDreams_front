import {
  HeaderDiv,
  HeaderContainer,
  SearchDiv,
  SearchInput,
  Logo,
} from "./style";
import search from "../../assets/search.png";
import { IoHomeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";

export default function Header({ setInputValue, main }) {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderDiv>
        {!main && (
          <IoHomeSharp
            color="#ffffff"
            size={28}
            onClick={() => navigate("/")}
          />
        )}
        <Logo>
          <img src={logo} />
          <h1>SweetDreams</h1>
        </Logo>
        {main && (
          <SearchDiv>
            <SearchInput
              type="text"
              placeholder="O que está procurando?"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <img src={search} alt="" />
          </SearchDiv>
        )}
        <div className="cart">
          <FaShoppingCart
            color="#ffffff"
            size={28}
            onClick={() => navigate("/cart")}
          />
        </div>
      </HeaderDiv>
    </HeaderContainer>
  );
}
