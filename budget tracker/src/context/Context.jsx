import React, {
  useReducer,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import contextReducer from "./contextReducer";

const BudgetContext = createContext();
const initialState = [];

const BudgetProvider = ({ children }) => {
  const [transaction, dispatch] = useReducer(contextReducer, initialState);
  const [initialBudget, setInitialBudget] = useState(0);

  // Action Creators
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD", payload: transaction });
  };

  //  to compute the total budget
  const computTotalBudget = () => {
    const totalBudget = transaction.reduce((accum, cur) => {
      if (cur.type === "Income") {
        return accum + cur.amount;
      } else {
        return accum - cur.amount;
      }
    }, 0);
    setInitialBudget(totalBudget);
  };

  // calling the function whenever the transactions changes
  useEffect(() => {
    computTotalBudget();
  }, [transaction]);

  return (
    <BudgetContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transaction,
        initialBudget,
        computTotalBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
// global context hook
const useBudgetContext = () => {
  return useContext(BudgetContext);
};
export { BudgetProvider, useBudgetContext };
