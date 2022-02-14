import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import Header from "../Header";
import {
  CheckoutDiv,
  CentralizedDiv,
  CheckoutForm,
  ProductInfo,
  InputDiv,
  Input,
  LoadingDiv,
} from "./style";
import axios from "axios";
import loading from "../../assets/loading.svg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NumberFormat from "react-number-format";

export default function CheckoutPage() {
  const { token } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: "",
    adress: "",
    complement: "",
    city: "",
    state: "",
    postalCode: "",
    phone: "",
    cardNumber: "",
    cardName: "",
    expiringDate: "",
    CVV: "",
  });
  const [formStage, setFormStage] = useState("adress");
  const [productsInfo, setProductsInfo] = useState();
  const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const promise = axios.get(process.env.REACT_APP_BACK_URL + "cart", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      promise.then((answer) => {
        setProductsInfo(answer.data);
        setSubtotal(calculateSubtotal(answer.data));
      });
    } else {
      navigate("/");
    }
  }, [token, navigate]);

  function calculateSubtotal(productsInfo) {
    let sum = 0;
    productsInfo.forEach((obj) => {
      sum += parseFloat(obj.subtotal);
    });
    return sum.toFixed(2).replace(".", ",");
  }

  function handleInput(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function continueButton() {
    if (
      formData.name !== "" &&
      formData.adress !== "" &&
      formData.complement !== "" &&
      formData.city !== "" &&
      formData.state !== "" &&
      formData.postalCode !== "" &&
      formData.phone !== ""
    ) {
      setFormStage("payment");
    } else {
      Swal.fire({
        icon: "error",
        title: "Preencha todos os campos",
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.cardNumber !== "" &&
      formData.cardName !== "" &&
      formData.expiringDate !== "" &&
      formData.CVV
    ) {
      const promise = axios.post(
        process.env.REACT_APP_BACK_URL + "orders",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      promise.then(() => {
        Swal.fire({
          icon: "success",
          title: "Seu pedido foi realizado!",
        });
        navigate("/");
      });
      promise.catch((answer) => console.log(answer.response));
    } else {
      Swal.fire({
        icon: "error",
        title: "Preencha todos os campos",
      });
    }
  }

  if (!productsInfo) {
    return (
      <LoadingDiv>
        <img src={loading} alt="" />
      </LoadingDiv>
    );
  }

  return (
    <>
      <Header main={false} />
      <CheckoutDiv>
        <CentralizedDiv>
          <CheckoutForm>
            {formStage === "adress" ? (
              <>
                <div className="form-title">
                  <div className="num">1</div>
                  <p>Informações de entrega</p>
                </div>
                <p className="input-title">Nome Completo</p>
                <input
                  name="name"
                  type="text"
                  onChange={(e) => handleInput(e)}
                  value={formData.name}
                />
                <p className="input-title">Endereço</p>
                <input
                  name="adress"
                  type="text"
                  onChange={(e) => handleInput(e)}
                  value={formData.adress}
                />
                <p className="input-title">Complemento (opcional)</p>
                <input
                  name="complement"
                  type="text"
                  onChange={(e) => handleInput(e)}
                  value={formData.complement}
                />
                <InputDiv>
                  <div>
                    <p className="input-title">Cidade</p>
                    <input
                      name="city"
                      className="city"
                      type="text"
                      onChange={(e) => handleInput(e)}
                      value={formData.city}
                    />
                  </div>
                  <div>
                    <p className="input-title">Estado</p>
                    <input
                      name="state"
                      type="text"
                      onChange={(e) => handleInput(e)}
                      value={formData.state}
                    />
                  </div>
                </InputDiv>
                <InputDiv>
                  <div>
                    <p className="input-title">CEP</p>
                    <NumberFormat
                      name="postalCode"
                      type="Tel"
                      format={"#####-###"}
                      onChange={(e) => handleInput(e)}
                      value={formData.postalCode}
                    />
                  </div>
                  <div>
                    <p className="input-title">Telefone</p>
                    <NumberFormat
                      name="phone"
                      className="phone"
                      type="Tel"
                      format={"(##) #####-####"}
                      onChange={(e) => handleInput(e)}
                      value={formData.phone}
                    />
                  </div>
                </InputDiv>
                <button
                  onClick={continueButton}
                  type="button"
                  className="continue-button"
                >
                  Continuar
                </button>
              </>
            ) : (
              <div
                onClick={() => setFormStage("adress")}
                className="minimized-title"
              >
                <div className="num">1</div>
                <p>Informações de entrega</p>
              </div>
            )}
            {formStage === "payment" ? (
              <>
                <div className="form-title">
                  <div className="num">2</div>
                  <p>Informações de pagamento</p>
                </div>
                <p className="input-title">Número do catão</p>
                <NumberFormat
                  name="cardNumber"
                  type="text"
                  format={"#### #### #### ####"}
                  onChange={(e) => handleInput(e)}
                  value={formData.cardNumber}
                />
                <p className="input-title">Nome do titular</p>
                <input
                  name="cardName"
                  type="text"
                  onChange={(e) => handleInput(e)}
                  value={formData.cardName}
                />
                <InputDiv>
                  <div>
                    <p className="input-title">Validade</p>
                    <NumberFormat
                      name="expiringDate"
                      className="city"
                      type="Tel"
                      placeholder="MM/AA"
                      format={"##/##"}
                      onChange={(e) => handleInput(e)}
                      value={formData.expiringDate}
                    />
                  </div>
                  <div>
                    <p className="input-title">CVV</p>
                    <NumberFormat
                      name="CVV"
                      type="Tel"
                      format={"###"}
                      onChange={(e) => handleInput(e)}
                      value={formData.CVV}
                    />
                  </div>
                </InputDiv>
                <button
                  onClick={(e) => handleSubmit(e)}
                  className="continue-button"
                >
                  Pagar
                </button>
              </>
            ) : (
              <div className="minimized-title">
                <div className="num">2</div>
                <p>Informações de pagamento</p>
              </div>
            )}
          </CheckoutForm>
          <ProductInfo>
            <p className="sumary">Resumo do pedido</p>
            <p className="items">4 itens</p>
            {productsInfo.map((product) => {
              return (
                <div
                  className="product-div"
                  key={productsInfo.indexOf(product)}
                >
                  <img src={product.image} alt="" />
                  <p className="quantity">{`${product.quantity}x`}</p>
                  <p>{product.name}</p>
                  <p className="price">{product.subtotal.replace(".", ",")}</p>
                </div>
              );
            })}
            <div className="subtotal">
              <p>Total</p>
              <p>{`R$${subtotal}`}</p>
            </div>
          </ProductInfo>
        </CentralizedDiv>
      </CheckoutDiv>
    </>
  );
}
