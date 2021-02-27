import React from 'react';

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function multi(a,b){
    return a*b;
}
function div(a,b){
    let result = (a/b).toFixed(2)
    return result;
}

export {add,sub,multi,div};