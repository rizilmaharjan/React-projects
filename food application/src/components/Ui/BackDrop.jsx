import React from 'react';
import classes from './Modal.module.css'

const BackDrop = (props) => {
  return (
    <>
        <div className={classes.backdrop} onClick={props.onClose}>
            
        </div>
      
    </>
  )
}

export default BackDrop
