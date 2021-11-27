import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import Footer from "./components/Footer";
//<Route path="/inline" element={<span>Inline works</span>} />

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='movie/:imdbID' exact element={<MovieDetails />}></Route>
          <Route path='*' element={<MovieDetails />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
