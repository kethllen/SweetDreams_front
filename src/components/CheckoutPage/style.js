import styled from "styled-components";

const CheckoutDiv = styled.div`
    width: 100%;
    height: 100vh;
    
    padding-top: 120px;
    padding-bottom: 30px;

    display: flex; 
    justify-content: center;
`

const CentralizedDiv = styled.div`
    width: 700px;

    display: flex;
    justify-content: space-between;
`

const CheckoutForm = styled.form`
    width: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-right: 140px;
    box-sizing: border-box;

    .form-title {
        font-size: 16px;
        margin-bottom: 20px;
    }

    .input-title {
        width: 100%;

        font-size: 9.5px;

        margin-bottom: 5px;
    }

    input {
        width: 100%;
        height: 30px;

        margin-bottom: 10px;
    }
`

const InputDiv = styled.div`
    display: flex;

    gap: 10px;

    input {
        border: 1px solid lightblue;
        border-radius: 5px;
    }

    .city {
        width: 170px;
    }

    .cep {
        width: 120px;
    }
`

const Input = styled.input`
    border: 1px solid lightblue;
    border-radius: 5px;
`

const ProductInfo = styled.div`
    width: 300px;

    background-color: lightgray;
`

export {
    CheckoutDiv,
    CentralizedDiv,
    CheckoutForm,
    ProductInfo,
    InputDiv,
    Input
}