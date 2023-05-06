import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    try {
      const api = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=18f7fdcd25ea43f78a4b397bddc46734&query=${name}`
      );
       const Data = api.data;
      setSearchedRecipes(Data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <NavLink to={"/recipe/"+item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </NavLink>
          </Card>
        );
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
