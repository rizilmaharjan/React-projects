import React from "react";
import styled from "styled-components";
import { BsTrashFill } from "react-icons/bs";
import { useAppContext } from "../context/GlobalContext";

const ClearExpenses = () => {
  const { setDatas, setEconomics, setExpense, setBudget } = useAppContext();

  const handleClick = () => {
    setDatas([]);
    setEconomics("");
    setExpense("");
    setBudget("");
  };
  return (
    <>
      <Wrapper>
        <div className="clear-button">
          <button className="btn" onClick={handleClick}>
            <BsTrashFill /> Clear All Expenses <BsTrashFill />
          </button>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .clear-button {
    .btn {
      width: 32%;
      margin-top: 1.4rem;
      border-radius: 7px;
      border: none;
      padding: 10px 0px;
      background-color: #d62828;
      color: white;

      @media screen and (min-width: 768px) {
        width: calc(100% + 1.9rem);
      }
      @media screen and (min-width: 1200px) {
        width: calc(100% + 1.8rem);
      }

      @media screen and (min-width: 600px) {
        width: calc(100% + 1.8rem);
      }
      @media screen and (max-width:600px){
      width: 87%;
      margin: auto 1.6rem;
    }

      &:hover {
        background-color: #9d0208;
        transition: 0.5s ease-in-out;
        cursor: pointer;
      }
    }
  }
`;

export default ClearExpenses;
