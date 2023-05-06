import React from "react";
import {
  List as MUIList,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@mui/material";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import DeleteIcon from "@mui/icons-material/Delete";
import { useBudgetContext } from "../../../context/Context";

const List = () => {
  const {transaction, deleteTransaction} = useBudgetContext();
 
  return (
    <>
      <MUIList dense={false} sx={{height:"7rem", overflow:"auto"}}>
        {transaction.map((item) => {
          return (
            <Slide direction="down" in mountOnEnter unmountOnExit key={item.id}>
              <ListItem>
                <ListItemIcon>
                  <MoneyOffIcon sx={{backgroundColor: item.type==="Expense" ? "red" : "green",borderRadius:"50%",height:"30px", width:"30px", color:"#fff"}} />
                </ListItemIcon>
                <ListItemText
                  primary={item.category}
                  secondary={`$${item.amount} - ${item.date}`}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick={()=>deleteTransaction(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Slide>
          );
        })}
      </MUIList>
    </>
  );
};

export default List;
