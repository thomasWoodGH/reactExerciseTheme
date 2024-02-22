import React, { useState, useContext, createContext, } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light")

    const switchTheme = (newTheme) => {
        localStorage.setItem('theme', newTheme)
        setTheme(newTheme)
    }

    return(
        <ThemeContext.Provider value={{ theme, setTheme, switchTheme }}>
            {children}
        </ThemeContext.Provider>

    )
}

export const useTheme = () => useContext(ThemeContext)