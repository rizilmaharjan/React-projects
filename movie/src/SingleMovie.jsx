import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { API_URL } from "./context/Context";
import axios from "axios";
import styled from "styled-components";
import { useQuery } from "react-query";

const SingleMovie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    try {
      const res = await axios.get(url);
      const data = res.data;

      if (data.Response == "True") {
        setMovie(data);
      } else {
        throw new Error(data.Error);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const { isLoading } = useQuery("movie", () => {
    getMovies(`${API_URL}&i=${id}`);
  });

  if (isLoading) {
    return <span>Loading....</span>;
  }

  return (
    <>
      <Wrapper>
        <section className="movie-section">
          <div className="movie-card">
            <figure>
              <img src={movie.Poster} alt="image" />
            </figure>
            <div className="card-content">
              <p className="title">{movie.Title}</p>
              <p className="card-text">{movie.Released}</p>
              <p className="card-text">{movie.Genre}</p>
              <p className="card-text">{movie.imdbRating}</p>
              <p className="card-text">{movie.Country}</p>
              <NavLink to={"/"}>
                <button className="btn">Go Back</button>
              </NavLink>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  margin: -16px;
  .movie-section {
    width: 100vw;
    height: 100vh;
    background-color: grey;
    display: grid;
    place-items: center;

    .movie-card {
      background-color: #fff;
      width: 50%;
      height: 50%;
      display: flex;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16);
      border-radius: 10px;

      figure {
        width: 35%;
        height: 100%;
        margin-left: 0px;
        margin-top: 0px;

        img {
          height: 100%;
          width: 100%;
        }
      }
      .card-content {
        width: 68%;
        height: 100%;
        margin: 65px 0px 0px -25px;
        position: relative;
        z-index: 1;
        .title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #1e90ff;
          margin-bottom: 35px;
        }
        .card-text {
          margin-top: -10px;
        }

        .btn {
          border: 2px solid #1e90ff;
          padding: 10px 20px;
          margin-top: 15px;
          background-color: transparent;
          border-radius: 8px;
          font-weight: 400;
          position: relative;
          overflow: hidden;
          color: #000;

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background-color: #1e90ff;
            transition: all 0.5s ease-in-out;
            z-index: -1;
          }

          &:hover::before {
            left: 0;
          }
          &:hover {
            color: #fff;
            cursor: pointer;
            font-weight: 600;
          }
        }
      }
    }
  }
`;

export default SingleMovie;
