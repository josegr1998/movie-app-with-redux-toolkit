import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (movieQuery) => {
    try {
      const movieText = "Harry";
      const response = await movieApi.get(
        `?apiKey=${APIkey}&s=${movieQuery ? movieQuery : movieText}&type=movie`
      );
      console.log(response.data);
      return response.data.Search;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchASyncShows",
  async (movieQuery) => {
    const seriesText = "Friends";

    const response = await movieApi.get(
      `?apiKey=${APIkey}&s=${movieQuery ? movieQuery : seriesText}&type=series`
    );
    console.log(response.data);

    return response.data.Search;
  }
);

export const fetchSingleMovie = createAsyncThunk(
  "movies/fetchSingleMovie",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIkey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: [],
  isMoviesLoading: true,
  shows: [],
  //i dont need isShowsLoading because the way toolkit works, it fetches both api routes, and once and only once both promesses are fulfilled it triggers the re-render
  singleMovie: {},
  isSingleMovieLoading: true,
  movieQuery: "",
};

const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    //this is how we create actions with redux toolkit
    // addMovies: (state, action) => {
    //   //instead of doing the return, here we just choose the propery we want to update and we asign the value
    //   state.movies = action.payload;
    //   state.isMoviesLoading = false;
    // }, //no es necesario si se usa toolkit
    setLoading: (state) => {
      state.isSingleMovieLoading = true;
      state.isMoviesLoading = true;
    },
    updateMovieQuery: (state, action) => {
      state.movieQuery = action.payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("peding");
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log("fetched successfuly");
      return { ...state, movies: action.payload, isMoviesLoading: false };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },

    [fetchAsyncShows.fulfilled]: (state, action) => {
      return { ...state, shows: action.payload };
    },
    [fetchSingleMovie.fulfilled]: (state, action) => {
      return {
        ...state,
        singleMovie: action.payload,
        isSingleMovieLoading: false,
      };
    },
  },
});

export const { setLoading, updateMovieQuery } = movieSlice.actions;

// export const getAllMovies = (state) => state.movies.movies; //En getAllMovies dentro del state, selecciono el slice de movies, y dentro de el selecciono la propiedad de movies. Por lo tanto es una funcion que me devuelve la propiedad de movies
//pero es mas facil user useSelector

export default movieSlice.reducer;
