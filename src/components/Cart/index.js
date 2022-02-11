import { HeaderDiv, HeaderContainer } from "./styled";
import cart from "../../assets/cart.png";
import { TiArrowBack } from "react-icons/ti";
export default function Cart() {
  return (
    <HeaderContainer>
      <HeaderDiv>
        <TiArrowBack color="#000000" size={25} />
        <h1>SweetDreams</h1>
        <div className="cart">
          <img src={cart} alt="" />
        </div>
      </HeaderDiv>
    </HeaderContainer>
  );
}
