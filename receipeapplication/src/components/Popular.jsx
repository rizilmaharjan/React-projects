import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { NavLink } from "react-router-dom";
import useFetchAPI from "./FetchAPI";

const Popular = () => {
  const {
    data: popular,
    isLoading,
    isError,
    error,
  } = useFetchAPI(
    "https://api.spoonacular.com/recipes/random?apiKey=18f7fdcd25ea43f78a4b397bddc46734&number=9"
  );
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

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
            {popular.recipes?.map((item) => {
              return (
                <SplideSlide key={item.id}>
                  <Card>
                    <NavLink to={"/recipe/" + item.id}>
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
