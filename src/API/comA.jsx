import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComA = ()=>{
    const [num,Setnum] = useState(1);
    const [name,SetName] = useState()
    const [moves,SetMoves] = useState()
    useEffect(()=>{
        // alert('Hi!!')
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res.data);
            SetName(res.data.name)
            SetMoves(res.data.moves[0].move.name);
        }
        getData();
    },[num])
return (
    <>
    <h1>You choose <span style={{color:'red'}}>{num} value</span></h1> 
    <h1>Hey i am <span style={{color:'red'}}>{name}</span></h1>
    <h1>I have <span style={{color:'red'}}>{moves} moves</span> </h1>
    <select value={num} onChange={(e)=>{Setnum(e.target.value)}}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    </>
)
}

export default ComA;