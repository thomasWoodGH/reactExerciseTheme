import React, { useState, useContext, createContext, } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light")

    const switchTheme = () => {
        setTheme((theme === "light") ? "dark" : "light")
    }

    return(
        <ThemeContext.Provider value={{ theme, setTheme, switchTheme }}>
            {children}
        </ThemeContext.Provider>

    )
}

export const useTheme = () => useContext(ThemeContext)