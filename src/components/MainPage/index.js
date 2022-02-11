import Header from "../Header";
import { ProductsContainer, CentralizedDiv, Product } from "./style";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function MainPage() {

    const { token } = useContext(UserContext);
    const [products, setProducts] = useState();
    const [inputValue, setInputValue] = useState('');
    const [cartQuantity, setCartQuantity] = useState(0);
    const navigate = useNavigate();

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

    function handleSelection(product) {
        // if (!token) {
        //     // navigate("/");
        // } else {
        //     addToCart(product);
        // }
        addToCart(product);
    }

    async function addToCart(product) {
        try {
            // await axios.post(process.env.BACK_URL);
            const promise = await axios.post('http://localhost:5000/cart', { productId: product._id }, {
                headers: {
                    'Authentication': `Bearer ${token}`
                }
            });
            setCartQuantity(promise.data.cart.length);
        } catch (error) {
            console.log(error.response);
        }
    }

    if (!products) {
        return (
            <h1>carregando</h1>
        );
    }

    return (
        <>
            <Header setInputValue={setInputValue} main={true} />
            <ProductsContainer>
                <CentralizedDiv>
                    {products.filter(searchFilter).map(product => {
                        return (
                            <Product key={product._id}>
                                <img src={product.image} alt="" />
                                <p className="name">{product.name}</p>
                                <p className="description">{product.description}</p>
                                <p className="price">R${product.price}</p>
                                <button onClick={() => handleSelection(product)}>Adicionar ao Carrinho</button>
                            </Product>
                        );
                    })}
                </CentralizedDiv>
            </ProductsContainer>
        </>
    );
}