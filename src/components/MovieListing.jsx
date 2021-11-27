import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import { Settings } from "../common/settings"; //i import settings from the common folder

const MovieListing = () => {
  const movies = useSelector((state) => state.movies.movies);
  const isLoading = useSelector((state) => state.movies.isMoviesLoading);
  const shows = useSelector((state) => state.movies.shows);

  //slider settings
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 6, //numero de slides que muestra
  //   slidesToScroll: 3, //numero de slides que scrollea
  // }; //puedo poner este objeto en common folder, par exportarlo y que no ocupe lugar aca

  if (isLoading) {
    return (
      <Wrapper>
        <h1>Loading...</h1>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className='movie-wrapper'>
        <div className='movie-list'>
          <h2>Movies</h2>
          <div className='movie-container'>
            <Slider {...Settings}>
              {movies ? (
                movies.map((movie, index) => {
                  return <MovieCard {...movie} key={index} />;
                })
              ) : (
                <h1>Sorry, no movie matched your search</h1>
              )}
            </Slider>
          </div>
        </div>
        <div className='show-list'>
          <h2>shows</h2>
          <div className='movie-container'>
            <Slider {...Settings}>
              {shows ? (
                shows.map((show, index) => {
                  return <MovieCard {...show} key={index} />;
                })
              ) : (
                <h1>Sorry, no shows matched your search</h1>
              )}
            </Slider>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: white;
  padding: 3rem;
  .movie-list,
  .show-list {
    margin: 20px 0px;
    h2 {
      color: var(--font-secondary);
      margin-bottom: 10px;
      font-weight: 400;
    }
  }

  //if u had a grid before using the slider component, you must remove it
  /* .movie-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem;
  } */
`;

export default MovieListing;
