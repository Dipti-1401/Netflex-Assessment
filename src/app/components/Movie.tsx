"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";

const dummyMoviesData = [
  {
    imdbID: "1",
    Title: "The Dark Knight",
    Poster: "https://m.media-amazon.com/images/I/51K8ouYrHeL._AC_.jpg",
  },
  {
    imdbID: "2",
    Title: "Interstellar",
    Poster: "https://m.media-amazon.com/images/I/61+YvRV5cIL._AC_SL1001_.jpg",
  },
  {
    imdbID: "3",
    Title: "Dune",
    Poster: "https://m.media-amazon.com/images/I/91g0utY2+hL._SL1500_.jpg",
  },
];

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
}

interface Props {
  title: string;
}

const Movie = ({ title }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setMovies(dummyMoviesData);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <Row>
        {movies.map((movie) => (
          <MovieContainer key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
          </MovieContainer>
        ))}
      </Row>
    </div>
  );
};

export default Movie;

const Row = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 20px;
`;

const MovieContainer = styled.div`
  margin-right: 10px;
  img {
    width: 150px;
    object-fit: contain;
    cursor: pointer;
  }
`;
