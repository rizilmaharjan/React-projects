import React, { createContext, useContext, useState } from "react";

const AppProvider = createContext();
const GlobalContext = ({ children }) => {
  const [input, setInput] = useState({
    date: "",
    expense: "",
    amount: "",
  });
  const [budget, setBudget] = useState(0);
  const [expense, setExpense] = useState(0);
  const [economics, setEconomics] = useState(0);
  const [datas, setDatas] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isBudgetEmpty, setIsBudgetEmpty] = useState(false);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const TotalExpense = (expense) => {
    setExpense((prev) => {
      return prev + parseInt(expense);
    });
  };

  const yourEconomy = () => {
    setEconomics(budget - expense);
  };
  return (
    <>
      <AppProvider.Provider
        value={{
          input,
          setInput,
          budget,
          setBudget,
          isEmpty,
          isBudgetEmpty,
          setIsBudgetEmpty,
          setIsEmpty,
          yourEconomy,
          datas,
          isEditItem,
          setIsEditItem,
          toggleSubmit,
          setToggleSubmit,
          setDatas,
          expense,
          TotalExpense,
          setExpense,
          economics,
          setEconomics,
        }}
      >
        {children}
      </AppProvider.Provider>
    </>
  );
};

// global context hook
const useAppContext = () => {
  return useContext(AppProvider);
};

export { GlobalContext, useAppContext };
