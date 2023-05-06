import React from "react";
import styled from "styled-components";

const FormGroup = ({
  labelText,
  inputType,
  placeHolder,
  value,
  onchange,
  onkeyup,
  disabled
}) => {
  return (
    <>
      <Wrapper>
        <div className="myForm">
          <label className="label">{labelText}</label>
          <input
            className="inputVal"
            value={value}
            onKeyUp={onkeyup}
            onChange={onchange}
            type={`${inputType}`}
            placeholder={`${placeHolder}`}
            disabled={disabled}

          />
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .myForm {
    display: flex;
    flex-direction: column;

    .label {
      font-weight: 600;
    }
    .inputVal {
      padding: 6px 4px;
      margin-top: 0.9rem;
      border: none;
      border: 1px solid grey;
      border-radius: 7px;
      font-weight: 400;
    }
  }
`;

export default FormGroup;
