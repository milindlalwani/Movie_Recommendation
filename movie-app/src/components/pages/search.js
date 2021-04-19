import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from "react-router-dom";
import { Movie } from '../movie.js';

import './search.css';

export const Search = () => {
    const [movies, setMovie] = useState("");
    const history = useHistory();
    console.log("reached search.js")
    console.log(history.location.state)
    const filterMovies = Object.values(history.location.state).filter(movie => movie.name.toLowerCase())
    return (
        <>
            <div className='App'>
                <div className='movie-search'>
                    <h1 className='movie-text'>We recommend these movies:</h1>
                </div>
                {filterMovies.map(movie => {
                    return <Movie key={movie.id}
                    name = {movie.name} />
                })}
            </div>
        </>
    );
}