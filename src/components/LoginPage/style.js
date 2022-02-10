import styled, { css, keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ecf0f1;
`;
const Content = styled.div`
  background-color: #fff;
  border-radius: 15px;
  width: 960px;
  height: 50%;
  justify-content: space-between;
  align-items: center;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    background-color: #58af9b;
    width: 40%;
    height: 100%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    left: 0;
  }
  .first-content {
    display: flex;
  }
  .first-content .second-column {
    z-index: 11;
  }
  .first-column {
    text-align: center;
    width: 40%;
    z-index: 10;
  }
  .second-column {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .second-content {
    position: absolute;
    display: flex;
  }
  .second-content .first-column {
    order: 2;
    z-index: -1;
  }
  .second-content .second-column {
    order: 1;
    z-index: -1;
  }
`;
const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  text-transform: capitalize;
  .title-primary {
    color: #fff;
  }
  .title-second {
    color: #58af9b;
  }
`;
const Description = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 30px;
  .description-primary {
    color: #fff;
  }
  .description-second {
    color: #7f8c8d;
  }
`;
const Btn = styled.button`
  border-radius: 15px;
  text-transform: uppercase;
  color: #fff;
  font-size: 10px;
  padding: 10px 50px;
  cursor: pointer;
  font-weight: bold;
  width: 150px;
  align-self: center;
  border: none;
  margin-top: 1rem;
  .btn-primary {
    background-color: transparent;
    border: 1px solid #fff;
    transition: background-color 0.5s;
  }
  .btn-primary:hover {
    background-color: #fff;
    color: #58af9b;
  }
  .btn-second {
    background-color: #58af9b;
    border: 1px solid #58af9b;
    transition: background-color 0.5s;
  }
  .btn-second:hover {
    background-color: #fff;
    border: 1px solid #58af9b;
    color: #58af9b;
  }
`;
const SocialMedia = styled.div`
  margin: 1rem 0;
  .link-social-media:not(:first-child) {
    margin-left: 10px;
  }
  .link-social-media .item-social-media {
    transition: background-color 0.5s;
  }
  .link-social-media:hover .item-social-media {
    background-color: #58af9b;
    color: #fff;
    border-color: #58af9b;
  }
  .list-social-media {
    display: flex;
    list-style-type: none;
  }
  .item-social-media {
    border: 1px solid #bdc3c7;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #95a5a6;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 55%;
  input {
    height: 45px;
    width: 100%;
    border: none;
    background-color: #ecf0f1;
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #ecf0f1 inset !important;
    -webkit-text-fill-color: #000 !important;
  }
  .label-input {
    background-color: #ecf0f1;
    display: flex;
    align-items: center;
    margin: 8px;
  }
  .icon-modify {
    color: #7f8c8d;
    padding: 0 5px;
  }
  .password {
    color: #34495e;
    font-size: 14px;
    margin: 15px 0;
    text-align: center;
  }
  .password::first-letter {
    text-transform: capitalize;
  }
`;

/* second content*/

const Body = styled.div`
  .sign-in-js .first-content .first-column {
    z-index: -1;
  }

  .sign-in-js .second-content .second-column {
    z-index: 11;
  }
  .sign-in-js .second-content .first-column {
    z-index: 13;
  }

  .sign-in-js .content::before {
    left: 60%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    animation: 1.3s ${slideIn}//1.3s;

    z-index: 12;
  }

  .sign-up-js .content::before {
    animation: 1.3s ${slideOut}; //  1.3s;

    z-index: 12;
  }

  .sign-up-js .second-content .first-column,
  .sign-up-js .second-content .second-column {
    z-index: -1;
  }

  .sign-up-js .first-content .second-column {
    z-index: 11;
  }

  .sign-up-js .first-content .first-column {
    z-index: 13;
  }
  .sign-in-js .first-content .second-column {
    z-index: -1;
    position: relative;
    animation: 1.3s ${deslocamentoEsq}; //1.3s;
  }

  .sign-up-js .second-content .second-column {
    position: relative;
    z-index: -1;
    animation: 1.3s ${deslocamentoDir}; //1.3s;
  }
`;

const deslocamentoEsq = keyframes`  
  from {
        left: 0;
        opacity: 1;
        z-index: 12;
    }

    25% {
        left: -80px;
        opacity: .5;
        /* z-index: 12; NÃO HÁ NECESSIDADE */
    }

    50% {
        left: -100px;
        opacity: .2;
        /* z-index: 12; NÃO HÁ NECESSIDADE */
    }

    to {
        left: -110px;
        opacity: 0;
        z-index: -1;
    }
`;

const deslocamentoDir = keyframes`  
  from {
        left: 0;
        z-index: 12;
    }

    25% {
        left: 80px;
        
    }

    50% {
        left: 100px;
    }

    to {
        left: 110px;
        z-index: -1;
    }
`;

const slideIn = keyframes`  
 from {
        left: 0;
        width: 40%;
    }

    25% {
        left: 5%;
        width: 50%;
    }

    50% {
        left: 25%;
        width: 60%;
    }

    75% {
        left: 45%;
        width: 50%;
    }

    to {
        left: 60%;
        width: 40%;
    }
`;

const slideOut = keyframes`  
    from {
        left: 60%;
        width: 40%;
    }

    25% {
        left: 45%;
        width: 50%;
    }

    50% {
        left: 25%;
        width: 60%;
    }

    75% {
        left: 5%;
        width: 50%;
    }

    to {
        left: 0;
        width: 40%;
    }
`;

export { Form, Container, Content, Title, Description, Btn, SocialMedia };
