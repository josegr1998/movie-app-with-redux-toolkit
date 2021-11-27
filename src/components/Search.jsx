import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updateMovieQuery } from "../features/movies/movieSlice";

const Search = () => {
  const dispatch = useDispatch();
  const movieQuery = useSelector((state) => state.movies.movieQuery);
  const input = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input.current.value);
    dispatch(updateMovieQuery(input.current.value));
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='input'
          placeholder='Search a movie'
          ref={input}
        />
        <button type='submit'>Submit</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.article``;

export default Search;
