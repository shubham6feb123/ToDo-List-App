import React ,{useState} from 'react';
import './challenge.css';

const Challenge = ()=>{
    let newTime = new Date().toLocaleTimeString();

    const [cTime,SetTime] =  useState(newTime);
     
    function update(){
        let updateTime = new Date().toLocaleTimeString();
        SetTime(updateTime);
    }

    return (
        <>
        <div className='container'>
            <h1>{cTime}</h1>
            <button onClick={update}>Get Time</button>
        </div>
        </>
    );
}

export default Challenge;