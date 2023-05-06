import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { Doughnut } from 'react-chartjs-2';
import useTransaction from "../../useTransaction";
import Chart from 'chart.js/auto';
const Details = ({title}) => {
  const {total, chartData} = useTransaction(title)
  console.log(total)
  return (
    <>
      <Card sx={{borderBottom: title==="Income" ? '10px solid rgba(0,255,0,0.5)' : '10px solid rgba(255,0,0,0.5)' }}>
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="h5">Rs{total}</Typography>
          <Doughnut data={chartData} />
        </CardContent>
      </Card>
    </>
  );
};

export default Details;
