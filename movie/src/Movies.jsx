import React from "react";
import { UseGlobalContextHook } from "./context/Context";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Movies = () => {
  const { movie, isLoading } = UseGlobalContextHook();

  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading"></div>
      </div>
    );
  }

  return (
    <>
      <Wrapper>
        <section className="moviePage">
          <div className="grid">
            {movie.map((item) => {
              const { imdbID, Title, Poster } = item;
              const moviename = Title.substring(0, 15);
              return (
                <NavLink
                  style={{ textDecoration: "none" }}
                  key={imdbID}
                  to={`movie/${imdbID}`}
                >
                  <div className="card">
                    <div className="info">
                      <h2 id="title">
                        {Title.length > 15 ? `${moviename}...` : Title}
                      </h2>
                      <img src={Poster} alt="movie" />
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    height: 100%;
    grid-gap: 20px;

    .card {
      height: 100%;
      width: 100%;
      border: 1px solid #000;
      border-radius: 8px;

      &:hover {
        background-color: #747d8c;
        transition: 0.3s ease-in-out;
        color: #fff;
      }

      .info {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;

        #title {
          font-size: 1rem;
          text-align: center;
          color: #000;
          padding: 14px 0px;
        }

        img {
          width: 65%;
          height: 70%;
          border-radius: 10px;
          margin-top: -15px;
          transition: transform 0.2s ease-in-out;

          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Movies;
