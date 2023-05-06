import React from "react";
import styled from "styled-components";
const Title = () => {
  return (
    <>
      <Wrapper>
        <h1>Task Tracker</h1>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  h1{
    text-align: center;
    margin:2% 0;
    font-weight: 800;
    font-size: 1.8rem;
  }
`;

export default Title;
