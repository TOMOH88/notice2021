import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(){
    return(
        <div className='nav'>
            <table>
            <th><Link to="/">Home</Link></th>
            <th><Link to="/notice">Notice</Link></th>
            <th><Link to="/board">Board</Link></th>
            <th><Link to="/about">About</Link></th>
            </table>
        </div>
    );
}

export default Navigation;