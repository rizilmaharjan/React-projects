import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Note(props) {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
   

      <div className="note">
        
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        
        <button onClick={deleteNote} className="btn">
          <DeleteOutlineIcon className="deleteIcon" />
        </button>
      </div>
    
    </>
  );
}

export default Note;
