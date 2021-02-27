import React, { useState } from 'react';

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [cTime, upTime] = useState(time);

       setInterval(() => {
          time  = new Date().toLocaleTimeString();
          upTime(time); 
       }, 1000);
    return (
        <>
            <div className='container'>
                <h1>{cTime}</h1>
            </div>
        </>
    );
}

export default Clock;