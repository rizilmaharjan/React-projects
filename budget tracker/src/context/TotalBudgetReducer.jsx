// const TotalBudgetReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TOTAL_BUDGET":
//       let totalBudgetAdded = action.payload.reduce(
//         (accum, cur) => (accum += cur.amount),
//         0
//       );
//       return state + totalBudgetAdded;

//     case "MINUS_TOTAL_BUDGET":
//       const filteredItems = action.payload.filter(
//         (item) => item.type === "Expense"
//       );
//       let totalBudgetSubtracted = filteredItems.reduce(
//         (accum, cur) => (accum += cur.amount),
//         0
//       );
//       return state - totalBudgetSubtracted;
    
//     default:
//         return state;
//   }
// };

// export default TotalBudgetReducer;
