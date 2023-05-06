import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography
} from "@mui/material";
import Form from "./Form/Form";
import List from "./list/List";
import { useBudgetContext } from "../../context/Context";
const Main = () => {
  const {initialBudget} = useBudgetContext();
  
  return (
    <>
      <Card>
        <CardHeader
          title="Expense Tracker"
          align="center"
        />
        <Typography variant="h5" align="center">Budget: Rs {initialBudget}</Typography>
        <CardContent>
          <Form />
        </CardContent>
        <CardContent>
          <Grid container spacing={2}>
            <Grid items xs={12}>
              <List />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Main;
