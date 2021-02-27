import react from 'react';
import {Sdata,Ncard} from './sdata.jsx';

function Netflixapp(){
    return (
        <>
        <h1 className='heading '>List Of Top Five Netflix Series Of 2020   </h1>
        <div className='container'>
        {Sdata.map(Ncard)}
          </div>
          </>
    )
}

export default Netflixapp;