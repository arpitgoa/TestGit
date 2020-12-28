import React from 'react'
import './style.css';
import search from '../../assets/icons/search.png';
import {NavLink} from 'react-router-dom';


const submitSearch = (e) => {
    e.preventDefault();
    alert('searched');
}

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about-us">About Us</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
                <li><NavLink to="/contact-us">Contact Us</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text" className="searchInput" placeholder="Search..."/>
                    <img src={search} alt="Search"/>                
                </form>
            </div>            
        </div>
        
    )
}

export default Navbar
