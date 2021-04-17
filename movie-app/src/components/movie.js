import React, { Component } from 'react';
import './movie.css';

export const Movie = ({name}) => {
    return (
        <div class='movie-container'>
            <div class='movie-row'>
                <div class='movie'>
                    <h3>{name}</h3>
                </div>
            </div>
        </div>
    );
}