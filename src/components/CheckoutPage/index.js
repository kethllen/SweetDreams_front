import { useState } from "react";
import Header from "../Header";
import { CheckoutDiv, CentralizedDiv, CheckoutForm, ProductInfo, InputDiv, Input } from "./style";

export default function CheckoutPage() {

    const [formStage, setFormStage] = useState('adress');

    return (
        <>
            <Header main={false} />
            <CheckoutDiv>
                <CentralizedDiv>
                    <CheckoutForm>
                        {formStage === 'adress' ?
                            <>
                                <div className="form-title">
                                    <div className="num" >1</div>
                                    <p>Informações de entrega</p>
                                </div>
                                <p className="input-title">Nome Completo</p>
                                <Input type="text" />
                                <p className="input-title">Endereço</p>
                                <Input type="text" />
                                <p className="input-title">Complemento (opcional)</p>
                                <Input type="text" />
                                <InputDiv>
                                    <div>
                                        <p className="input-title">Cidade</p>
                                        <input className="city" type="text" />
                                    </div>
                                    <div>
                                        <p className="input-title">Estado</p>
                                        <input type="text" />
                                    </div>
                                </InputDiv>
                                <InputDiv>
                                    <div>
                                        <p className="input-title">CEP</p>
                                        <input type="text" />
                                    </div>
                                    <div>
                                        <p className="input-title">Telefone</p>
                                        <input className="phone" type="text" />
                                    </div>
                                </InputDiv>
                                <button onClick={() => setFormStage('payment')} type="button" className="continue-button">Continuar</button>
                            </> :
                            <div onClick={() => setFormStage('adress')} className="minimized-title">
                                <div className="num" >1</div>
                                <p>Informações de entrega</p>
                            </div>
                        }
                        {formStage === 'payment' ?
                            <>
                                <div className="form-title">
                                    <div className="num" >2</div>
                                    <p>Informações de pagamento</p>
                                </div>
                                <p className="input-title">Número do catão</p>
                                <Input type="text" />
                                <p className="input-title">Nome do titular</p>
                                <Input type="text" />
                                <InputDiv>
                                    <div>
                                        <p className="input-title">Validade</p>
                                        <input className="city" type="text" placeholder="MM/AA" />
                                    </div>
                                    <div>
                                        <p className="input-title">CVV</p>
                                        <input type="text" />
                                    </div>
                                </InputDiv>
                                <button className="continue-button">Pagar</button>
                            </> :
                            <div className="minimized-title">
                                <div className="num">2</div>
                                <p>Informações de pagamento</p>
                            </div>
                        }
                    </CheckoutForm>
                    <ProductInfo>
                        <p className="sumary">Resumo do pedido</p>
                        <p className="items">4 itens</p>
                        <div className="product-div">
                            <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzc2VydHxlbnwwfHwwfHw%3D" alt="" />
                            <p className="quantity">1x</p>
                            <p>Sorvete no Cookie</p>
                            <p className="price">R$12,99</p>
                        </div>
                        <div className="product-div">
                            <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzc2VydHxlbnwwfHwwfHw%3D" alt="" />
                            <p className="quantity">1x</p>
                            <p>Sorvete no Cookie</p>
                            <p className="price">R$12,99</p>
                        </div>
                        <div className="product-div">
                            <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzc2VydHxlbnwwfHwwfHw%3D" alt="" />
                            <p className="quantity">1x</p>
                            <p>Sorvete no Cookie</p>
                            <p className="price">R$12,99</p>
                        </div>
                        <div className="product-div">
                            <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzc2VydHxlbnwwfHwwfHw%3D" alt="" />
                            <p className="quantity">1x</p>
                            <p>Sorvete no Cookie</p>
                            <p className="price">R$12,99</p>
                        </div>
                        <div className="subtotal">
                            <p>Total</p>
                            <p>R$12,99</p>
                        </div>
                    </ProductInfo>
                </CentralizedDiv>
            </CheckoutDiv>
        </>
    );
}