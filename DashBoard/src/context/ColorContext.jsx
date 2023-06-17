import { createContext, useContext, useState } from "react"

const ThemeContext = createContext(null)
export const ColorContext = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)
  return (
    <>
        <ThemeContext.Provider value={{darkMode, setDarkMode}} >
            {children}

        </ThemeContext.Provider>
      
    </>
  )
}

export const myCustomContext = () =>{
    return useContext(ThemeContext)
}

