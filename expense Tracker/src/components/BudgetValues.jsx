import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppContext } from "../context/GlobalContext";

const BudgetValues = () => {
  const {
    setBudget,
    budget,
    expense,
    economics,
    yourEconomy,
    isBudgetEmpty
  } = useAppContext();

  const handleInput = (e) => {
    const yourBudget = e.target.value;
    setBudget(yourBudget);
  };

  useEffect(() => {
    yourEconomy();
  }, [expense]);


  return (
    <>
      <Wrapper>
        <div className="economies">
          <div className="money">
            <label>Budget: Rs</label>
            <input
              onChange={handleInput}
              value={budget}
              className="budget"
              type="number"
            />
          </div>
          <div className="money">
            <label>Total Expenses: Rs </label>
            <span> {expense} </span>
          </div>
          <div className="money">
            <label>Economies: Rs </label>
            <span>{economics}</span>
          </div>
        </div>
        <div className="alert">
          {isBudgetEmpty && <p>!Please set up your Budget</p>}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  background-color: #8338ec;
  width: 30%;
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 20px 16px;
  border-radius: 10px;

  @media screen and (min-width:768px){
    width: 100%;
  }
  @media screen and (min-width:1200px){
    width: 100%;
  }
  @media screen and (min-width:600px){
    width: 100%;
  }
  @media screen and (max-width:600px){
      width: 80%;
      margin:30px auto;
    }

  .economies {
    position: relative;
    left: 50%;

    @media screen and (min-width:768px){
    left: 40%;
  }
  @media screen and (min-width:600px){
    left: 13%;
  }


    .budget {
      border: none;
      outline: none;
      border-bottom: 1px solid #fff;
      background-color: transparent;
      width: 28%;
      text-align: center;
      color: #fff;
      font-weight: 600;
    }

    .money {
      margin: 12px 0px;
      span {
        color: #fff;
        font-weight: 600;
      }

      label {
        color: #fff;
        font-weight: 600;
      }
    }
  }
  .alert {
    p {
      color: #fb8500;
      text-align: center;
      font-weight: 600;
    }
  }
`;

export default BudgetValues;
