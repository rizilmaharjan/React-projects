import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    try {
      const api = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=18f7fdcd25ea43f78a4b397bddc46734&cuisine=${name}`
      );
      const Data = api.data;
      setCuisine(Data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCuisine(params.type);
  }, [params]);
  return (
    <>
      <Grid
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
      >
        {cuisine.map((item) => {
          return (
            <Card key={item.id}>
              <NavLink to={"/recipe/" + item.id}>
                <img src={item.image} alt="item.title" />
                <h4>{item.title}</h4>
              </NavLink>
            </Card>
          );
        })}
      </Grid>
    </>
  );
};

const Grid = styled(motion.div)`
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

export default Cuisine;
