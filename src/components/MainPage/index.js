import Header from "../Header";
import { ProductsContainer, CentralizedDiv, Product } from "./style";
import img from "../../assets/testImg.jpg";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProductsContext from "../../contexts/ProductsContext";

export default function MainPage() {

    const { products, setProducts } = useContext(ProductsContext);
    const [inputValue, setInputValue] = useState('');

    useEffect(async () => {
        try {
            // const promise = await axios.get(process.env.BACK_URL);
            const promise = await axios.get('http://localhost:5000/products');
            setProducts(promise.data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    function searchFilter(product) {
        return product.name.toUpperCase().includes(inputValue.toUpperCase());
    }

    if (!products) {
        return (
            <h1>carregando</h1>
        );
    }

    return (
        <>
            <Header setInputValue={setInputValue} />
            <ProductsContainer>
                <CentralizedDiv>
                    {products.filter(searchFilter).map(obj => {
                        return (
                            <Product key={obj._id}>
                                <img src={obj.image} alt="" />
                                <p className="name">{obj.name}</p>
                                <p className="description">{obj.description}</p>
                                <p className="price">R${obj.price}</p>
                                <button>Adicionar ao Carrinho</button>
                            </Product>
                        );
                    })}
                </CentralizedDiv>
            </ProductsContainer>
        </>
    );
}