import React from "react";
import TrackPage from "./TrackPage";
import BudgetValues from "./BudgetValues";
import ClearExpenses from "./ClearExpenses";
import ExpenseForm from "./ExpenseForm";
import styled from "styled-components";

const ExpenseCalculator = () => {
  return (
    <>
      <Wrapper>
        <h1>Expenses Calculator</h1>
        <div className="main-container">
          <div className="input-process">
            <TrackPage />
            <BudgetValues />
            <ClearExpenses />
          </div>
          <div className="track-record">
            <ExpenseForm />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  @media screen and (min-width: 768px) {
    h1 {
      text-align: center;
    }
    .main-container{
      width: 100vw;
      display: flex;
      justify-content: space-around;

    }
    .input-process{
      width: 38%;

    }
    .track-record{
      width: 50%;
    }
  }

  @media screen and (min-width:1200px){
    h1{
      text-align: center;
    }
    .main-container{
      display: flex;
      width: 100vw;
      justify-content: space-evenly;
    }
    .input-process{
      width: 27%;
    }

    .track-record{
      width:45%
    }

  }

  @media screen and (min-width:600px){
    h1{
      text-align: center;
    }
    .main-container{
      width: 100vw;
      display: flex;
      justify-content: space-evenly;
    }
    .input-process{
      width: 30%;
    }
    .track-record{
      width: 45%;
    }
  }

  @media screen and (max-width:600px){
    h1{
      text-align: center;
    }
    .main-container{
      width:100vw;
    }
    .input-process{
      width: 100%;
    }
    .track-record{
      width: 100%;
    }

  }
`;

export default ExpenseCalculator;
