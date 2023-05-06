import React from "react";
import styled from "styled-components";



const Button = ({ text, onclick }) => {
  return <StyledButton onClick={onclick}>{text}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: #008000;
  color: white;
  font-weight: bold;
  margin-left: 23px;
  padding: 8px 18px;
  border-radius:8px;

  &:hover{
    cursor: pointer;
    background-color:#007200;
    transition: 0.3s ease-in-out;
  }
  @media (max-width: 768px){
    margin-left: -20px
  }
  @media (max-width: 480px){
   margin-left:41%;
    font-size: 16px;
    width:14%;
    padding:3px 2px;
    margin-top: 5%;
  }
`;

export default Button;
