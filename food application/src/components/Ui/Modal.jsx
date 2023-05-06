import React from 'react';
import BackDrop from './BackDrop';
import ModalOverlay from './ModalOverlay';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    const portalElement = document.getElementById("overlays");
  return (
    <>
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        


      
    </>
  )
}

export default Modal
