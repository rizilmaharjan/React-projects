import React, { useEffect, useState } from "react";
import Title from "./Title";
import FormGroup from "./FormGroup";
import styled from "styled-components";
import Button from "./Button";
import Monthlypay from "./monthlypay";

const Mortgage = () => {
  // states
  const [Inpvalue, setInpvalue] = useState({
    HomeVal: "",
    DownPay: "",
    Loan: "",
    InterestRate: "",
    LoanDuration: "",
    monthlyPay: "",
  });
  const [Empty, isEmpty] = useState(null);

  const calculateLoanAmount = () => {
    setInpvalue((prev) => {
      let loanAmount = prev.HomeVal - prev.DownPay;
      return {
        ...prev,
        Loan: loanAmount,
      };
    });
  };

  const handleHomeValChange = (e) => {
    const homeValue = e.target.value;
    setInpvalue((prev) => {
      return {
        ...prev,
        HomeVal: homeValue,
      };
    });
  };

  const MonthlyPayment = () => {
    // checking the conditions for the empty fields
    if (
      (Inpvalue.HomeVal ||
        Inpvalue.DownPay ||
        Inpvalue.Loan ||
        Inpvalue.InterestRate ||
        Inpvalue.LoanDuration) === ""
    ) {
      isEmpty(true);
    }
    else{
      setInpvalue((prev) => {
        let r = prev.InterestRate / 12 / 100;
        let n = prev.LoanDuration * 12;
        let monthlyPayment =
          (prev.Loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

        return {
          ...prev,
          monthlyPay: monthlyPayment,
        };
      });
      isEmpty(false)
      setInpvalue((prev)=>{
       return{
        ...prev,
        HomeVal:'',
        DownPay:'',
        Loan:'',
        InterestRate:'',
        LoanDuration:'',
       }

      })


    }

  };

  return (
    <>
      <Wrapper>
        <div className="container">
          <Title className="title" text="Mortgage Calc App" />
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="firstRow">
              <FormGroup
                labelText="Home Value"
                inputType="number"
                placeHolder="Enter the value of the Home"
                value={Inpvalue.HomeVal}
                onkeyup={calculateLoanAmount}
                onchange={handleHomeValChange}
              />
              <FormGroup
                labelText="Down Payment"
                inputType="number"
                placeHolder="Enter your funds"
                value={Inpvalue.DownPay}
                onkeyup={calculateLoanAmount}
                onchange={(e) =>
                  setInpvalue((prev) => {
                    return {
                      ...prev,
                      DownPay: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="secondRow">
              <FormGroup
                labelText="Loan amount"
                inputType="number"
                placeHolder="The calculated amount of loan"
                value={Inpvalue.Loan}
                disabled
              />
            </div>
            <div className="ThirdRow">
              <FormGroup
                labelText="Interest Rate %"
                inputType={"number"}
                placeHolder="Enter your interest rate"
                value={Inpvalue.InterestRate}
                onchange={(e) =>
                  setInpvalue((prev) => {
                    return {
                      ...prev,
                      InterestRate: e.target.value,
                    };
                  })
                }
              />
              <FormGroup
                labelText="Loan Duration (years)"
                inputType={"number"}
                placeHolder="Enter your duration of year"
                value={Inpvalue.LoanDuration}
                onchange={(e) =>
                  setInpvalue((prev) => {
                    return {
                      ...prev,
                      LoanDuration: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="submitBtn">
              <Button onclick={MonthlyPayment} />
            </div>
          </form>
          {!Empty ? <Monthlypay pay={Inpvalue.monthlyPay}/> : <Monthlypay pay="Do Not Leave The Fields Empty" />}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 65%;
    box-shadow: 0 0 3px 1px #000;
    padding: 1.8rem 1.9rem;
    border-radius: 10px;

    .submitBtn {
      display: flex;
      justify-content: center;
      margin-top: 1.2rem;
    }

    .firstRow {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
    .secondRow {
      margin-top: 1.3rem;
      margin-left: 12px;
    }
    .ThirdRow {
      margin-top: 1.4rem;
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
  }
`;

export default Mortgage;
