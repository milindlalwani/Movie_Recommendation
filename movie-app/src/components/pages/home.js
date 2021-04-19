import React, { Component, useState, useEffect } from 'react';
import { Router } from 'react-router';
import { useHistory } from "react-router-dom";
import {Route, Link} from 'react-router-dom';
import { Movie } from '../movie.js';
// import { Search } from './search.js';
import './home.css';

export const Home = () => {
    //const [home, setHome] = useState([]);
    const [movies, setMovie] = useState("");
    const history = useHistory();
    // const [filterMovies, setFilterMovies] = useState(0);
    // const [search, setSearch] = useState("")

    useEffect(() => {
        // fetch('/home').then(response => {
        //     if (response.ok) {return response.json()}
        // }).then(data => {
        //     console.log(data)
        //     setMovie(data)
        //     // console.log(movies)
        // })
    }, [])
    //const handleChange = e => { setSearch(e.target.value) }
    const handleChange = e => { 
        setMovie(e.target.value) 
        console.log(movies)
    }
    const handleSubmit = e => { 
        e.preventDefault()
        console.log(movies)
        // alert(movies)
        const requestOptions = {
            method:'POST',
            mode: 'cors',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({"movie": movies})
        }
        fetch('/request', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMovie(data)
                // alert(data)
                history.push("/search", data);
        }, 
        (error) => {
            // alert(error + "bob")
            alert("That movie doesn't exist")
          }
        )
    }
    return (
        <>
            <div className='App'>
                <div className='movie-search'>
                    <h1 className='movie-text'>Search a Movie</h1>
                    <form onSubmit={handleSubmit}>
                        <input type='text' movies={movies} onChange={handleChange} placeholder='Search' className='movie-input'/>
                    </form>
                </div>

            </div>
        </>
    );
}

// <input type='text' id='userwant' placeholder='Search' className='movie-input' onChange={handleChange}/>

// {
//     method:"POST",
//     cache: "no-cache",
//     headers:{
//         "content_type":"application/json",
//     },
//     body:JSON.stringify(document.getElementById('userwant').value) }

// {filterMovies.map(movie => {
//     return <Movie key={movie.id}
//     name = {movie.name} />
// })}

//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
//if (document.getElementById('userwant').value) {
//    $.post("/home", JSON.stringify(document.getElementById('userwant').value), "json")
//}
//</script>