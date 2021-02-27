import React from 'react';

const ToDo = (props)=>{
    return <li className="list_item" ><button className='list_btn'  onClick={()=>{
        props.onSelect(props.id)
    }} >➕</button>{props.text}</li>
}

export default ToDo;