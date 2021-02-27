import React from 'react';
import {add,sub,multi,div} from './calc.jsx';

function App1(){
    return (
    <>
    <ul>
    <li>sum of two numbers is {add(2,4)}</li>
    <li>substraction of two numbers is {sub(12,5)}</li>
    <li>multiplication of two numbers is {multi(20,34)}</li>
    <li>division of two numbers is {div(12,45)}</li>
    </ul>
    </>
    )
}

export {App1};
