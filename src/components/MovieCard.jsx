import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MovieCard = ({ Title, Year, imdbID, type, Poster }) => {
  return (
    <Wrapper>
      <Link to={`/movie/${imdbID}`}>
        <div className='card-item'>
          <div className='card-inner'>
            <div className='card-top'>
              <div className='img-container'>
                <img src={Poster} alt={Title} />
              </div>
            </div>
            <div className='card-bottom'>
              <div className='card-info'>
                <h4>{Title}</h4>
                <p>{Year}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .card-item {
    background-color: var(--secondary-color);
    cursor: pointer;
    transition: all 0.3s linear;

    /*added after adding the slider */
    min-height: 450px;
    height: 100%;
    margin: 10px;
  }
  .card-item:hover {
    transform: scale(1.1);
  }
  img {
    height: 20rem;
  }
  .card-info {
    color: var(--font-primary);
    min-height: 7rem;
    padding: 0.25rem;
    h4 {
      font-size: 22px;
      font-weight: 400;
      margin-bottom: 10px;
      color: white;
    }
  }
`;

export default MovieCard;
