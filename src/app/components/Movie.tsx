import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const MovieRow = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US&page=1')
            setMovies(request.data.results)
            return request
        }

        fetchData();
    })


    return (
        <RowContainer>
            <h2>{movies[0].title}</h2>
            <RowPoster>{movies.map((movie) => (
                <Poster
                    key={movie.id}
                    src={`${movie.backdrop_path}`}
                    alt={movie.name}>
                </Poster>
            ))}</RowPoster>
        </RowContainer >
    )
}


export default MovieRow;

const RowContainer = styled.div`    
    margin-left: 20px;
    color: white;
`

const RowPoster = styled.img`
    overflow: hidden;
    padding: 20px;
    display: flex;
`

const Poster = styled.img`
    width: 100%;
    max-height: 30%;
    object-fit: contain;
    margin-right: 20px;
    tranition: transform 0.2s;
    &:hover{   
        transform: scale(1.06);
    }
`