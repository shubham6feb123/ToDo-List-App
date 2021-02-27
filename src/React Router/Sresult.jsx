import React from 'react';

const Sresult = (props)=>{
    const img = `https://source.unsplash.com/1600x900/?${props.text}`
    return (
        <>
        <div className='image_section'>
            <img src={img} alt=""/>
        </div>
        </>
    )
}

export default Sresult;