import React from 'react';
import {NavLink} from 'react-router-dom'
import './navbar.css'

const Navbar = ()=>{
    return (
        <>
        <nav className='navbar'>
        <NavLink exact activeClassName='active_link' to='/'>AboutUs</NavLink>
        <NavLink exact activeClassName='active_link' to='/contact'>ContactUs</NavLink>
        <NavLink exact activeClassName='active_link' to='/user/shubham/sharma'>User</NavLink>
        <NavLink exact activeClassName='active_link' to='/search'>Search</NavLink>
        <NavLink exact activeClassName='active_link' to='/service'>Service</NavLink>
        </nav>
        </>
    )
}

export default Navbar;