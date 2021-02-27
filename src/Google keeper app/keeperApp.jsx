import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import './css/keeperapp.css';

const Keeperapp = ()=>{
  const [addItem,setAddItem] = useState([]);
  const addNote = (note)=>{
    // console.log(note)
    setAddItem((prevData)=>{
      return [...prevData,note]
    })
  }
    return (
      <>
      <Header/>
      <CreateNote passNote={addNote}/>
      <div className='note_section'>
      {addItem.map((val,index)=>{
        return <Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        />
      })}
      </div>
      <Footer/>
      </>
    )
}

    export default Keeperapp;