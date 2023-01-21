import React from 'react'
import logo from "./images/logo.png"

function Header() {
  return (
    <>
    <div className="header">
        <img  src={logo} alt="logo" width={"90"} height={"50"} />
        <h1>Hamro Note</h1>
    </div>
      
    </>
  )
}

export default Header
