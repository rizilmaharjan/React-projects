import React from "react";
import { UseGlobalContextHook } from "./context/Context";
import styled from "styled-components";

const Search = () => {
  const { query, setQuery, isError } = UseGlobalContextHook();
  return (
    <>
      <Wrapper>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div className="search">
            <h2>Search Your Favourite Movie</h2>
            <input
              type="text"
              placeholder="search here"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <div className="card-error">
              <p>{isError.show && isError.msg}</p>
            </div>
          </div>
        </form>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .search {
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    input {
      width: 18%;
      padding: 10px 0px;
      border-radius: 10px;
      text-align: center;
      border: 1px solid #1e90ff;
      font-size: 16px;
      font-weight: 400;
      text-transform: capitalize;


    }

    .card-error{
      p{
        color:red;
        font-weight: 400;
      }
    }
  }
`;

export default Search;
