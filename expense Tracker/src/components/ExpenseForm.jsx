import React from "react";
import styled from "styled-components";
import IndividualData from "./IndividualData";
import { useAppContext } from "../context/GlobalContext";

const ExpenseForm = () => {
  const { datas } = useAppContext();
  return (
    <>
      <Wrapper className="Row">
        <div className="row">
          {datas.map((item) => {
           return <IndividualData  item={item} />;
          })}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section``;


export default ExpenseForm;
