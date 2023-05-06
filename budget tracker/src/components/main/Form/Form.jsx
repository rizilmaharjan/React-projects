import React, { useState } from "react";
import {
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useBudgetContext } from "../../../context/Context";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/Categories";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: new Date(),
};

const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const { addTransaction,computTotalBudget} = useBudgetContext();
  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    addTransaction(transaction);
    setFormData(initialState);
    computTotalBudget();
    
    

  };

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <>
      <Grid container spacing={2}>
       
       
        <Grid item xs={6}>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expense">Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              {selectedCategories.map((item) => {
                return (
                  <MenuItem key={item.type} value={item.type}>
                    {item.type}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            type="number"
            variant="standard"
            label="Amount"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date:e.target.value})
            }
            type="date"
            variant="standard"
            sx={{ marginTop: "16px" }}
            fullWidth
          />
        </Grid>
        <Button
          variant="outlined"
          sx={{ marginTop: "30px" }}
          color="primary"
          onClick={createTransaction}
          fullWidth
        >
          Create
        </Button>
      </Grid>
    </>
  );
};

export default Form;
