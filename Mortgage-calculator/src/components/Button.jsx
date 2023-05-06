import React from 'react';
import styled from 'styled-components';

const FormButton = ({onclick}) => {
  return (
    <>
        <Button onClick={onclick}>
            Calculate
        </Button>

    </>
  )
}

const Button = styled.button`
    background-color: #2980b9;
    color: #fff;
    margin-top: 30px;
    width: 50%;
    padding: 8px 2px;
    border: none;
    border-radius: 7px;
    font-weight: 600;
    font-size: .9rem;
`;

export default FormButton
