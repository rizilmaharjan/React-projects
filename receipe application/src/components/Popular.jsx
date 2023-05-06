import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { NavLink } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await axios.get(
        "https://api.spoonacular.com/recipes/random?apiKey=18f7fdcd25ea43f78a4b397bddc46734&number=9"
      );
      const Data = api.data;
      setPopular(Data.recipes);
      localStorage.setItem("popular", JSON.stringify(Data.recipes));
    }
  };
  useEffect(() => {
    getPopular();
  }, []);

  return (
    <>
      <div>
        <Wrapper>
          <h3>Popular Picks</h3>
          <Splide
            options={{
              perPage: 4,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "5rem",
            }}
          >
            {popular.map((item) => {
              return (
                <SplideSlide key={item.id}>
                  <Card>
                    <NavLink to={"/recipe/" + item.id} >
                      <p>{item.title}</p>
                      <img src={item.image} alt={item.title} />
                      <Gradient />
                    </NavLink>
                  </Card>
                </SplideSlide>
              );
            })}
          </Splide>
        </Wrapper>
      </div>
    </>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;

