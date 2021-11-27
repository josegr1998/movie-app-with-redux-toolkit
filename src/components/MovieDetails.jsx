import React, { useEffect } from "react";
import styled from "styled-components";
import { fetchSingleMovie } from "../features/movies/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AiFillStar, AiOutlineCalendar } from "react-icons/ai";
import { BsHandThumbsUp, BsFilm } from "react-icons/bs";
import { setLoading } from "../features/movies/movieSlice";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const singleMovie = useSelector((state) => state.movies.singleMovie);
  const isLoading = useSelector((state) => state.movies.isSingleMovieLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());
    dispatch(fetchSingleMovie(imdbID));
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Wrapper>
      <div className='movie-section'>
        <div className='section-left'>
          <div className='movie-title'>{singleMovie.Title}</div>
          <div className='movie-rating'>
            <span>
              IMDB Rating <AiFillStar className='star' /> :{" "}
              {singleMovie.imdbRating}
            </span>
            <span>
              IMDB Votes <BsHandThumbsUp className='thumbs' /> :{" "}
              {singleMovie.imdbVotes}
            </span>
            <span>
              Runtime <BsFilm className='film' /> : {singleMovie.imdbRuntime}
            </span>
            <span>
              Year <AiOutlineCalendar className='calendar' /> :{" "}
              {singleMovie.imdbYear}
            </span>
          </div>
          <div className='movie-plot'>{singleMovie.Plot}</div>
          <div className='movie-info'>
            <div>
              <span className='first-child'>Director</span>
              <span>{singleMovie.Director}</span>
            </div>
            <div>
              <span>Stars</span>
              <span>{singleMovie.Actors}</span>
            </div>
            <div>
              <span>Generes</span>
              <span>{singleMovie.Genre}</span>
            </div>
            <div>
              <span>Languages</span>
              <span>{singleMovie.Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{singleMovie.Awards}</span>
            </div>
          </div>
        </div>
        <div className='section-right'>
          <img src={singleMovie.Poster} alt={singleMovie.Title} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: calc(100vh - 9rem);
  .movie-section {
    display: flex;
    justify-content: space-evenly;
    padding: 40px;
    color: var(--font-primary);
    font-weight: 400;
  }
  .movie-rating {
    padding-left: 3px;
    margin-top: 20px;
    color: var(--font-secondary);
    display: flex;
    span {
      margin-right: 20px;
    }
  }
  .movie-title {
    font-size: 40px;
    color: var(--font-primary);
  }
  .movie-plot {
    margin-top: 20px;
    line-height: 1.8rem;
    max-width: 40rem;
  }

  .first-child {
    padding: 10px 0px;
    color: var(--font-primary);
    font-weight: 600;
    width: 100px;
    display: inline-block;
    margin-top: 2rem;
  }
  .movie-info > div span {
    color: var(--font-secondary);
  }
  .star {
    color: #ff9e00;
  }
  .thumbs {
    color: #fafafa;
  }
  .film {
    color: rgba(191, 213, 214);
  }
  .calendar {
    color: peachpuff;
  }
`;

export default MovieDetails;
