import React from "react";
import styled from "styled-components";
import { AiFillPlusCircle, AiFillEdit } from "react-icons/ai";
import { useAppContext } from "../context/GlobalContext";
const TrackPage = () => {
  const {
    input,
    setInput,
    TotalExpense,
    datas,
    setDatas,
    budget,
    isEmpty,
    setIsEmpty,
    setIsBudgetEmpty,
    toggleSubmit,
    isEditItem,
    setToggleSubmit,
    setIsEditItem,
    setExpense,
    setEconomics,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.name === "" || input.expense === "" || input.amount === "") {
      setIsEmpty(true);
      setTimeout(() => {
        setIsEmpty(false);
      }, 4000);
    } else if (budget === 0 || budget.length === 0 || budget < 0) {
      setIsBudgetEmpty(true);
      setTimeout(() => {
        setIsBudgetEmpty(false);
      }, 4000);
    } else if (!toggleSubmit) {
      setDatas(
        datas.map((item) => {
          if (item.id === isEditItem) {
            setExpense((prev) => {
              if(input.amount > item.amount){
                const amountDifference = parseInt(input.amount) - parseInt(item.amount);
                return parseInt(prev) + parseInt(amountDifference);

              }else{
                const difference = parseInt(item.amount) - parseInt(input.amount)
                return parseInt(prev) - parseInt(difference);
              }
            });
            setEconomics((prev) => {
              return prev + input.amount;
            });
            return {
              ...item,
              date: input.date,
              expense: input.expense,
              amount: input.amount,
            };
          } else {
            return item;
          }
        })
      );
      setToggleSubmit(true);
      setInput((prev) => {
        return {
          ...prev,
          amount: "",
          date: "",
          expense: "",
        };
      });
      setIsEditItem(null);
    } else {
      let newItem = {
        ...input,
        id: new Date().getTime().toString(),
      };
      setDatas([...datas, newItem]);
      TotalExpense(input.amount);

      setInput((prev) => {
        return {
          ...prev,
          date: "",
          amount: "",
          expense: "",
        };
      });
    }
  };

  return (
    <>
      <Wrapper>
        <form className="inputs" onSubmit={handleSubmit}>
          <div className="input-box">
            <label className="label">Date</label>
            <br />
            <input
              value={input.date}
              onChange={(e) => setInput({ ...input, date: e.target.value })}
              className="input"
              type="date"
            />
          </div>
          <div className="input-box">
            <label className="label">Expense</label>
            <br />
            <input
              value={input.expense}
              onChange={(e) => setInput({ ...input, expense: e.target.value })}
              type="text"
              className="input"
              placeholder="e.g.rent"
            />
          </div>
          <div className="input-box">
            <label className="label">Amount</label>
            <br />
            <input
              value={input.amount}
              onChange={(e) => setInput({ ...input, amount: e.target.value })}
              type="number"
              className="input"
              placeholder="e.g. 300"
            />
          </div>
          {!toggleSubmit ? (<button className="btn">
            <AiFillEdit />
            Edit
          </button>):
          <button className="btn">
          <AiFillPlusCircle />
          add
        </button>
          }

          {isEmpty && <p>!Please fill in the Fields</p>}
        </form>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .inputs {
    background-color: #8338ec;
    width: 30%;
    padding: 7px 18px 45px 18px;
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
      margin: auto;
    }

    p {
      color: #fb8500;
      font-weight: 600;
      text-align: center;
    }

    .input {
      width: 100%;
      padding: 7px 2px;
      border: none;
      border-radius: 8px;
      margin-top: 10px;
    }
    .label {
      color: #fff;
      font-weight: 600;
    }
    .input-box {
      margin-top: 12px;
    }
    .btn {
      width: 100%;
      background-color: #fb8500;
      color: #000;
      font-weight: 600;
      border: none;
      margin-top: 15px;
      padding: 6px 0px;
      border-radius: 7px;

      &:hover {
        background-color: #dc2f02;
        transition: 0.5s ease-in-out;
        cursor: pointer;
      }
    }
  }
`;

export default TrackPage;
