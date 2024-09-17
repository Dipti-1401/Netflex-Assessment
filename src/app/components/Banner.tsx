"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";

const dummyBannerData = {
  Title: "Inception",
  Poster: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg",
  Plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
};

interface Movie {
  Title: string;
  Poster: string;
  Plot: string;
}

const Banner = () => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setMovie(dummyBannerData);
    }, 1000);
  }, []);

  return (
    <BannerContainer backgroundImage={movie?.Poster || ""}>
      <Title>{movie?.Title}</Title>
      <Description>{movie?.Plot}</Description>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div<{ backgroundImage: string }>`
  height: 400px;
  background-size: cover;
  background-position: center;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const Description = styled.p`
  width: 45%;
  line-height: 1.3;
  font-size: 1.2rem;
  margin-top: 20px;
  max-width: 360px;
`;
