import React, { useState } from 'react';
import Sresult from './Sresult'

const Search = ()=>{
    const[image,setImage] =  useState('')

    const inputEvent = (e)=>{
      setImage(e.target.value)
    }
    return (
        <>
        <div className='search_div'>
        <input type="search" value={image} name="" id="" placeholder='search anything' onChange={inputEvent} autoComplete='off' autoCapitalize='on' autoCorrect='on'/>
        {image===''?null:<Sresult text={image}/>} 
        </div>
       
        </>
    )
}

export default Search;