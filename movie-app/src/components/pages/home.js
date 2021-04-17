import React, { Component, useState, useEffect } from 'react';
import { Movie } from '../movie.js';
import './home.css';

export const Home = () => {
    //const [home, setHome] = useState([]);
    const [movies, setMovie] = useState([]);
    const [search, setSearch] = useState("")
    useEffect(() => {
        fetch('/home').then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(data => {
            console.log(data);
            setMovie(data)
        })
    }, [])
    const handleChange = e => { setSearch(e.target.value) }
    const filterMovies = Object.values(movies).filter(movie => movie.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <>
            <div className='App'>
                <div className='movie-search'>
                    <h1 className='movie-text'>Search a Movie</h1>
                    <form>
                        <input type='text' placeholder='Search' className='movie-input' onChange={handleChange}/>
                    </form>
                </div>
                {filterMovies.map(movie => {
                    return <Movie key={movie.id}
                    name = {movie.name} />
                })}
            </div>
        </>
    );
}

// {filteredCoins.map(coin => {
//     return <Coin key={coin.id} 
//     name={coin.name}
//     image={coin.image}
//     symbol={coin.symbol}
//     marketcap={coin.market_cap}
//     price={coin.current_price}
//     priceChange={coin.price_change_percentage_24h}
//     volume={coin.total_volume}
//     />;
//   })}