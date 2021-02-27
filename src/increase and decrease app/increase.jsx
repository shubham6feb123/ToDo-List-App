import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import './increase.css'
let i = 0;
const Increase = ()=>{
const [displayNumber,updateNumber] = useState(i);
const increase_number = ()=>{
   i++
 updateNumber(i);
}

const decrease_number = ()=>{
    i--
    if(i>='0'){
        updateNumber(i);
    }
    else if(i<'0'){
        alert('Sorry!! Zero Limit Reached');
    }
}

    return (
        <>
        <div className='center_div'>
            <h1 className='heading'>{displayNumber}</h1>
            <div className='div_button'>
                {/* <button className='increase_button' onClick={increase_number}><AddIcon/></button> */}
                <Tooltip title="Increase">
                <Button className='increase_button' onClick={increase_number}><AddIcon/></Button>
                </Tooltip>
                <Tooltip title="Decrease">
                <Button className='decrease_button' onClick={decrease_number}><RemoveIcon/></Button>
                </Tooltip>
                {/* <button className='decrease_button' onClick={decrease_number}><RemoveIcon/></button> */}
            </div>
        </div>
        </>
    )
}

export default Increase;



