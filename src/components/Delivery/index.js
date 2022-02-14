import { ContainerDiv, HeaderDiv, HeaderContainer, Logo } from "./style";
import delivery from "../../assets/delivery.png";
import logo from "../../assets/logo.png";
import { IoHomeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export default function Delivery() {
  const navigate = useNavigate();
  return (
    <>
      <HeaderContainer>
        <HeaderDiv>
          <Logo>
            <img src={logo} />
            <h1>SweetDreams</h1>
          </Logo>
          <IoHomeSharp
            onClick={() => navigate("/")}
            className="house-icon"
            color="#ffffff"
            size={28}
          />
        </HeaderDiv>
      </HeaderContainer>
      <ContainerDiv>
        <img src={delivery} />
        <h1>Seu pedido já está a caminho!</h1>
      </ContainerDiv>
    </>
  );
}
