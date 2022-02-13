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
import { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function Header({ setInputValue, main }) {

  const { token, cartQuantity, setCartQuantity } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const promise = axios.get(process.env.REACT_APP_BACK_URL + 'cart', {
        headers: {
          'authorization': `Bearer ${token}`
        }
      });
      promise.then(answer => setCartQuantity(answer.data.length));
    }
  }, [setCartQuantity, token]);

  function handleCartPage() {
    if (token) {
      navigate('/carrinho');
    } else {
      navigate('/cadastro');
    }
  }

  return (
    <HeaderContainer>
      <HeaderDiv>
        {!main && <IoHomeSharp onClick={() => navigate('/')} className="house-icon" color="#ffffff" size={28} />}
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
          {cartQuantity > 0 && <div className="cart-quantity">{cartQuantity}</div>}
          <FaShoppingCart onClick={handleCartPage} className="cart-icon" color="#ffffff" size={28} />
        </div>
      </HeaderDiv>
    </HeaderContainer>
  );
}
