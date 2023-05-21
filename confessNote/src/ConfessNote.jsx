import Navbar from "./components/Navbar";
import Confess from "./components/Confess";
import { useEffect } from "react";
const ConfessNote = () => {
    useEffect(()=>{
        document.title = "Confession App"
    },[])
  return (
    <>
        <Navbar />
        <Confess />
      
    </>
  )
}

export default ConfessNote
