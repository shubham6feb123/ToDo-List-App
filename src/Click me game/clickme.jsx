import React, {useState} from "react";
import "./clickme.css";

const Clickme = () => {
    const state =  useState();
    const  [count,setcount] = useState(0); 
const IncNum = ()=>{
     setcount(count + 1);
}
  return (
    <>
      <div className="clickme">
        <div className='clickme_container'>
          <h1>{count}</h1>
          <button onClick={IncNum}>Click Me</button>
        </div>
      </div>
    </>
  );
};

export default Clickme;
