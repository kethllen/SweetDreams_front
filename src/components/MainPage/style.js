import styled from "styled-components";

const ProductsContainer = styled.div`
    width: 100%;
    
    padding-top: 80px;
    padding-bottom: 30px;

    display: flex; 
    justify-content: center;
`

const CentralizedDiv = styled.div`
    width: 900px;
    
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 40px;

    justify-content: center;
`

const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    img {
        width: 100%;
        height: 210px;

        object-fit: cover;

        margin-bottom: 12px;
    }

    .name {
        font-size: 14px;

        margin-bottom: 12px;
    }

    .description {
        font-size: 8px;

        margin-bottom: 20px;
    }

    .price {
        font-size: 12px;

        margin-bottom: 8px;
    }

    button {
        width: 100%;

        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        color: #00ced1;

        padding: 10px 0;
        
        background-color: #FFFFFF;

        border-radius: 10px;
        border: 2px solid #00ced1;

        cursor: pointer;
    }
`

export { ProductsContainer, CentralizedDiv, Product }