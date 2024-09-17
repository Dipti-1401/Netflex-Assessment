"use client";

import React from "react";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Movie from "./components/Movie";

const Home = () => {
  return (
    <HomeContainer>
      <NavBar />
      <Banner />
      <Movie title="Trending Now" />
      <Movie title="Top Rated" />
      <Movie title="Sci-Fi Movies" />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  background-color: #111;
  color: white;
  overflow-x: hidden;
`;
