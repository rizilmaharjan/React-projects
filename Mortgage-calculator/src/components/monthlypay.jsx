import React from "react";
import styled from "styled-components";

const Monthlypay = ({ pay }) => {
  return (
    <>
      <Wrapper>
        <div className="monthlypay">
          <p>{typeof pay === "number" ?( "Monthly Payment:Rs"  + " " + pay.toFixed(2)) : pay}</p>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .monthlypay {

    border-radius: 10px;
    color: red;
    font-weight: 600;
    margin: 10px auto 0 auto;

    width: 60%;
    text-align: center;
  }
`;

export default Monthlypay;
