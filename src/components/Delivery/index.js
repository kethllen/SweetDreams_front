import ContainerDiv from "./style";
import delivery from "../../assets/delivery.png";

export default function Delivery() {
  return (
    <ContainerDiv>
      <img src={delivery} />
      <h1>Seu pedido já está sendo preparado!</h1>
    </ContainerDiv>
  );
}
