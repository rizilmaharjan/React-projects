import { useBudgetContext } from "./context/Context";
import {
  expenseCategories,
  incomeCategories,
  resetCategories,
} from "./constants/Categories";

const useTransaction = (title) => {
  resetCategories();
  const { transaction } = useBudgetContext();
  const transactionPerType = transaction.filter((t) => t.type === title);
  const total = transactionPerType.reduce(
    (accum, curVal) => (accum += curVal.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  transactionPerType.forEach((t) => {
    const category = categories.find((item) => item.type === t.category);
    if (category) category.amount += t.amount;
  });
  const filteredCategories = categories.filter((t) => t.amount > 0);
  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
    options: {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    },
  };
  return { total, chartData };
};
export default useTransaction;
