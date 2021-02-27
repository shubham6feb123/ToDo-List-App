import React, { useState } from 'react';
import './Forms.css'

const Form = ()=>{
//     //spread operator for concat arrays
//     const fullname = ['shubham','sharma'];
// const biodata = [1,...fullname,20,'male'];
// console.log(fullname);
// console.log(biodata);
    const [fullName,setFullName] = useState({
      fname : '',
      lname : '',
      email : '',
      phone : ''
    })

const inputEvent = (e)=>{
    // const value = e.target.value;
    // const name = e.target.name;
    const {name,value} = e.target;
    // console.log(value,name);

    setFullName((pre)=>{
         console.log(pre);
         return {
             ...pre,
             [name]:value

         }
        //  if(name === 'fName'){
        //     return { fname : value,
        //      lname : pre.lname,
        //      email : pre.email,
        //      phone : pre.phone
        //     }; 
        //  }else if(name === 'lName'){
        //     return { fname : pre.fname,
        //      lname : value,
        //      email : pre.email,
        //      phone : pre.phone
        //     }; 
        //  }
        //  else if(name === 'eMail'){
        //     return { fname : pre.fname,
        //      lname : pre.lname,
        //      email : value,
        //      phone : pre.phone
        //     }; 
        //  }
        //  else if(name === 'phoneNum'){
        //     return { fname : pre.fname,
        //      lname : pre.lname,
        //      email : pre.email,
        //      phone : value
        //     }; 
        //  }
    })
}

const clickEvent = (e)=>{
    e.preventDefault();
}
    return (
        <>
         <form>
        <div className='box'>
            <h1 className='heading'>Hello!! {fullName.fname} {fullName.lname}  </h1>
            <small >{fullName.email}</small>
            <small >{fullName.phone}</small>
            <input type='text' name='fname' value={fullName.fname}  placeholder='Enter Your first name' onChange={inputEvent} />
            <input type='text' name='lname' value={fullName.lname} placeholder='enter your last name' onChange={inputEvent} />
            <input type='text' name='email' value={fullName.email} placeholder='enter your email' onChange={inputEvent} />
            <input type='text' name='phone' value={fullName.phone} placeholder='enter your phone number' onChange={inputEvent} />
            <button className='submit' onClick={clickEvent} >Submit 👍</button>
        </div>
        </form>
        </>
    )

}

export default Form;