import React from 'react';
import logo from './images/logo.png';

const Header = ()=>{
    return (
        <>
        <div className='header'>
            <img className='logo' src={logo} alt="logo" width='50px'/>
            <h1 className='heading'>Shubham Keep</h1>
        </div>
        </>
    )
}

export default Header;