import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function CreateNote({passNote}) {
  const [note, setNote] = useState({
    title:"",
    content: ""
  });

  const inputEvent = (e)=>{
    const {value, name} = e.target;
    setNote((prevData)=>{

      return {
        ...prevData,
        [name]: value,

      }

    })
  }

  const addEvent = ()=>{
    passNote(note)
    setNote({
      title: "",
      content: ""
    })

  }


  return (
    <>
      <div className="main_note">
        <form action="">
          <input name="title" onChange={inputEvent} value={note.title} type="text" placeholder="Title" />
          <textarea name="content" cols="" rows="8" value={note.content} onChange={inputEvent} placeholder="Write a note..."></textarea>
          <Button style={{ width:"3vh", borderRadius:"100%", position:"absolute", backgroundColor:"white",color:"#f2b402",boxShadow:"0px 0px 5px rgba(0,0,0,0.2)",bottom:"-20px", right:"10px"}} onClick={addEvent}>
            <AddIcon style={{fontSize:"38px"}} />
          </Button>
        </form>
      </div>
    </>
  );
}

export default CreateNote;
