import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: lightblue;

    position: fixed;
    top: 0;
    z-index: 1;
`

const HeaderDiv = styled.div`
    width: 900px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-family: "Lobster", cursive;
        font-size: 32px;
        color: #FFFFFF;
    }
    
    .cart {
        width: 90px;

        display: flex;
        justify-content: flex-end;

        img {
            width: 25px;
            height: 25px;
        }
    }
`

const SearchDiv = styled.div`
    display: flex;
    align-items: center;

    position: relative;

    img {
        width: 15px;
        height: 15px;

        position: absolute;
        right: 10px;
    }
`

const SearchInput = styled.input`
    all: unset;
    width: 270px;
    height: 25px;
    background-color: #FFFFFF;

    display: flex;
    justify-content: center;

    font-size: 10px;
    text-indent: 15px;

    border-radius: 12px;
`

export { HeaderDiv, HeaderContainer, SearchDiv, SearchInput }