import styled from "styled-components";

const CheckoutDiv = styled.div`
    width: 100%;
    
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
        display: flex;
        align-items: center;

        margin-bottom: 20px;

        p {
            font-size: 16px;
        }
    }

    .minimized-title {
        width: 100%;
        height: 80px;

        display: flex;
        justify-content:center;
        align-items: center;

        margin-bottom: 20px;

        border-top: 1.4px solid lightblue;
        border-bottom: 1.4px solid lightblue;

        cursor: pointer;
    }

    .num {
        width: 30px;
        height: 30px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 50%;

        margin-right: 5px;

        background-color: lightpink;
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

        text-indent: 8px;
    }
    
    .continue-button {
        width: 80px;
        height: 40px;
        
        background-color: #FFFFFF;
        
        margin: 20px 0;
        
        align-self: flex-start;
        border: 2px solid lightpink;
        
        cursor: pointer;
    }
`

const InputDiv = styled.div`
    width: 100%;

    display: flex;
    
    gap: 10px;

    input {
        border: 1px solid lightblue;
        border-radius: 5px;

        font-size: 9.5px;
    }

    .phone {
        width: 170px;
    }

    .city {
        width: 170px;
    }
`

const Input = styled.input`
    border: 1px solid lightblue;
    border-radius: 5px;

    text-indent: 8px;
    font-size: 9.5px;
`

const ProductInfo = styled.div`
    width: 300px;
    height: min-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding-bottom: 15px;

    background-color: lightblue;

    border-radius: 20px;

    .sumary {
        width: 90%;

        margin: 15px 0;
    }

    .items {
        width: 90%;

        font-size: 11px;

        margin-bottom: 8px;
    }

    .product-div {
        width: 90%;

        display: flex;
        align-items: center;

        margin-bottom: 10px;

        position: relative;

        img {
            width: 50px;
            height: 50px;

            margin-right: 6px;
        }

        p {
            font-size: 11px;
        }

        .quantity {
            margin-right: 3px;
        }

        .price {
            justify-self: flex-end;

            position: absolute;
            right: 0;
        }
    }

    .subtotal {
        width: 90%;

        margin-top: 15px;

        display: flex;
        justify-content: space-between;
    }

`

export {
    CheckoutDiv,
    CentralizedDiv,
    CheckoutForm,
    ProductInfo,
    InputDiv,
    Input
}