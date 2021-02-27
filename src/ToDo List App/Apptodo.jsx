import React, { useState } from "react";
import "./App1.css";
import ToDo from "./ToDo.jsx";
const App = () => {
  const [val, setVal] = useState("");
  const [item, setItem] = useState([]);
  let inputEvent = (e) => {
    setVal(e.target.value);
  };
  let click = (e) => {
    if (val != "") {
      setItem((prev) => {
        return [...prev, val];
      });
    }
    setVal("");
  };

  const deleteItem =(id)=>{
    console.log('deleted!!')
    setItem((prev)=>{
      return prev.filter((arrElem,index)=>{
        // console.log(arrElem,index,id)
        return index !== id
      })
    })

        }

  return (
    <>
      <div className="container">
        <div className="list_box">
          <h1 className="list_head">ToDo List</h1>
          <div className="input_section">
            <input
              type="text"
              autoComplete="false"
              className="input_field"
              placeholder="Add Items"
              value={val}
              onChange={inputEvent}
            ></input>
            <button type="submit" className="add_btn" onClick={click}></button>
          </div>
          <div className="list_section">
            <ol className="list">
              {/* <li className="list_item"><button className='list_btn'>➕</button>{val}</li> */}
              {item.map((itemVal, index) => {
              return  <ToDo text={itemVal} 
              id={index}
              key={index}
              onSelect={deleteItem} />;
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
