import React from "react";
import styled from "styled-components";
import { BiEdit } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { useAppContext } from "../context/GlobalContext";

const IndividualData = ({ item }) => {
  const {
    datas,
    setDatas,
    setToggleSubmit,
    setExpense,
    setEconomics,
    setIsEditItem,
    setInput,
  } = useAppContext();

  const handleDelete = (id) => {
    const updatedList = datas.filter((item) => {
      return item.id !== id;
    });
    const updatedAmount = datas.filter((item) => {
      return item.id === id;
    });
    setDatas(updatedList);

    setExpense((prev) => {
      return prev - parseInt(updatedAmount[0].amount);
    });
    setEconomics((prev) => {
      return prev + parseInt(updatedAmount[0].amount);
    });
  };
  const editItem = (id) => {
    let newEditItem = datas.find((item) => {
      return item.id === id;
    });
    setToggleSubmit(false);
    setInput((prev) => {
      return {
        ...prev,
        amount: newEditItem.amount,
        date: newEditItem.date,
        expense: newEditItem.expense,
      };
    });
    setIsEditItem(id);
  };
  return (
    <>
      <Wrapper>
        <div className="Date-Amount">
          <div className="expense">{item.expense}</div>
          <div className="date">{item.date}</div>
        </div>
        <div className="amount">Rs: {item.amount}</div>
        <div className="edit-delete">
          <button className="edit" onClick={() => editItem(item.id)}>
            <BiEdit />
          </button>
          <button className="delete" onClick={() => handleDelete(item.id)}>
            <BsTrashFill />
          </button>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  width: 29%;
  margin: 18px 8px;
  border-radius: 7px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 15px 10px;
  font-weight: 600;

  @media screen and (max-width: 600px) {
    width: 80%;
    margin: 1.2rem auto;
  }

  @media screen and (min-width: 768px) {
    width: 79%;
  }
  @media screen and (min-width: 1200px) {
    width: 100%;
  }
  @media screen and (min-width: 600px) {
    width: 100%;
  }

  .Date-Amount {
    .expense {
      text-transform: capitalize;
      color: #8338ec;
    }
    .date {
      color: red;
    }
  }

  .amount {
    color: #007200;
  }

  .edit-delete {
    button {
      margin-left: 10px;
      padding: 5px 18px;
      border-radius: 10px;
      border: none;

      &:hover {
        cursor: pointer;
      }
    }
    @media screen and (min-width: 768px) {
      display: flex;
    }

    @media screen and (min-width: 600px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 600px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .edit {
      background-color: #000;
      color: #fff;
    }
    .delete {
      background-color: red;
      color: #fff;
    }
  }
`;

export default IndividualData;
