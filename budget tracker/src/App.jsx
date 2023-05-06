import React from "react";
import Details from "./components/Details/Details";
import Main from "./components/main/Main";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={3}>
          <Details title="Income" />
        </Grid>
        <Grid sx={{margin:"0px 20px"}} item xs={12} sm={4}>
          <Main/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
