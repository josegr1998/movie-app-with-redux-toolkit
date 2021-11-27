import React, { useEffect } from "react";
import styled from "styled-components";
import MovieListing from "../components/MovieListing";
import axios from "axios";
import movieApi from "../common/apis/movieApi";
import { APIkey } from "../common/apis/movieApiKey";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";
import { useSelector } from "react-redux";
import { setLoading } from "../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  const movieQuery = useSelector((state) => state.movies.movieQuery);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(fetchAsyncMovies(movieQuery));
    dispatch(fetchAsyncShows(movieQuery));
  }, [dispatch, movieQuery]);

  return (
    <Wrapper>
      <div className='banner-img'></div>
      <MovieListing />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Home;
