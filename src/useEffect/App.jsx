import React,{useEffect, useState} from 'react';

const App = ()=>{
    const [num, setnum] = useState(0);
    const [nums, setnums] = useState(0);
    useEffect(()=>{
document.title = 'you clicked me!! '+num+' times'
console.log(num)
    },[num,nums])
    const clicked = ()=>{
        setnum(num+1);
        
        // alert('you clicked me!! '+(num+1))
    }
    const clickeds = ()=>{
        setnums(nums+1)
        // alert('you clicked me!! '+(num+1))
    }
    return (
        <>
        <button onClick={clicked}>Click Me! {num}</button>
        <button onClick={clickeds}>Click Me! {nums}</button>
        </>
    )
}

export default App;