const contextReducer = (state, action) => {
  let newTransactions;
  switch (action.type) {
    case "ADD":
      newTransactions = [...state, action.payload];
      return newTransactions;
      

    case "DELETE":
      newTransactions = state.filter((item) => item.id !== action.payload);
      return newTransactions;
    
      
    default:
      return state;
  }
};

export default contextReducer;
