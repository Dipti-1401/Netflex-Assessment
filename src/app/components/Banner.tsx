import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";

//movie - backdrop_path, title, name,overview

const Banner = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US&page=1')
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)])
            return request
        }
        fetchData();

    }, [])

    return (
        <div style={{ backgroundImage: url(https://image.tmdb.org/t/p/original${movie.backdrop_path}) }}>
            <div><h1>{movie?.title || movie?.name}</h1>
                <div>  <button>Play</button>
                    <button>Info</button></div>
                <p>{movie?.overview}</p>
            </div>
        </div>
    )
}