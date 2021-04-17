import React, { Component } from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <button type="button" class="btn btn-primary"><Link to='/'>Home</Link></button>
                </a>
            </div>
        </nav>
    )
};

export default NavBar;