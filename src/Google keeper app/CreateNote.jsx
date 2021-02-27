import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (e) => {
      const{name,value} = e.target;
      setNote((prevData)=>{
          return {
              ...prevData,
              [name]:value, 
          }
      });
    //   console.log(note)

  };

  const addEvent = ()=>{
      props.passNote(note)
      setNote({
        title: "",
        content: "",
      })
  }

  return (
    <>
      <main>
        <div className="main_note">
          <form>
            <input
              className="input_field"
              type="text"
              name="title"
              value={note.title}
              onChange={inputEvent}
              placeholder="Title"
              autoComplete="off"
            />
            <textarea
              className="textarea_field"
              cols="34"
              rows="10"
              name="content"
              value={note.content}
              onChange={inputEvent}
              placeholder="Write a note..."
            />
            <Button onClick={addEvent} className="button">
              <AddIcon />
            </Button>
          </form>
        </div>
      </main>
    </>
  );
};
export default CreateNote;
