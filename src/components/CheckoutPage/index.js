import { useState } from "react";
import Header from "../Header";
import { CheckoutDiv, CentralizedDiv, CheckoutForm, ProductInfo, InputDiv, Input } from "./style";

export default function CheckoutPage() {

    // const [formStage, setFormStage] = useState('adress');
    const [formStage, setFormStage] = useState('adress');


    return (
        <>
            <Header main={false} />
            <CheckoutDiv>
                <CentralizedDiv>
                    <CheckoutForm>
                        {formStage === 'adress' ?
                            <>
                                <p className="form-title">Informações de entrega</p>
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
                                        <input className="cep" type="text" />
                                    </div>
                                    <div>
                                        <p className="input-title">Telefone</p>
                                        <input type="text" />
                                    </div>
                                </InputDiv>
                                <button>Continuar</button>
                            </> :
                            <p className="form-title">Informações de entrega</p>
                        }
                        {formStage === 'payment' ?
                            <>
                                <p>pagamento</p>
                            </> :
                            <p className="form-title">Informações de pagamento</p>
                        }

                    </CheckoutForm>
                    <ProductInfo>

                    </ProductInfo>
                </CentralizedDiv>
            </CheckoutDiv>
        </>
    );
}