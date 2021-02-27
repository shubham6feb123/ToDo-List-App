//Events in React.js
import React, { useState } from "react";
import './Events.css';

const App = ()=>{
    const purple = "purple" ;
    const [bg,setBg] = useState(purple)
    const [name,Setname] = useState('Click Me!!');
const bgChange = ()=>{
    // console.log('clicked')
    const yellow = "yellow";
    setBg(yellow);
    Setname('Ouchh!! 😱') ;
}


const normal = ()=>{
   setBg(purple);
   Setname('AYOO!! 😠') 
}

return (
    <>
    <div className='container' style={{backgroundColor: bg }}>
        <button className='button' onMouseEnter={bgChange} onMouseLeave={normal} >{name}</button>
    </div>
    </>
)
}

export default App;