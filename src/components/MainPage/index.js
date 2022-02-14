import Header from "../Header";
import { ProductsContainer, CentralizedDiv, Product, LoadingDiv } from "./style";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import loading from "../../assets/loading.svg";
import Swal from 'sweetalert2';

export default function MainPage() {

    const { token, setCartQuantity } = useContext(UserContext);
    const [products, setProducts] = useState();
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    useEffect(async () => {
        try {
            const promise = await axios.get(process.env.REACT_APP_BACK_URL + 'products');
            setProducts(promise.data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    function searchFilter(product) {
        return product.name.toUpperCase().includes(inputValue.toUpperCase());
    }

    function handleSelection(product) {
        if (!token) {
            navigate("/cadastro");
        } else {
            Swal.fire({
                titleText: product.name,
                imageUrl: product.image,
                imageWidth: 250,
                imageHeight: 250,
                showCancelButton: true,
                html: `R$${product.price}<br/><b>Ótima escolha!<b/>`,
                confirmButtonText: 'Ir para o carrinho',
                cancelButtonText: 'Voltar pra loja',
            }).then(result => {
                if (result.isConfirmed) {
                    navigate('/carrinho');
                }
            })
            addToCart(product);
        }
    }

    async function addToCart(product) {
        try {
            const promise = await axios.post(process.env.REACT_APP_BACK_URL + 'cart', { productId: product._id }, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            });
            setCartQuantity(promise.data.cart.length);
        } catch (error) {
            console.log(error.response);
        }
    }

    if (!products) {
        return (
            <LoadingDiv>
                <img src={loading} alt="" />
            </LoadingDiv>
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