import React, { useEffect } from "react";
import { useTheme } from '../../contexts'

export default function Home() {

    const { theme, switchTheme } = useTheme()

    const handleThemeChange = (e) => {
        switchTheme(e.target.value)
    }

    return (
        <>
            <h1>Theme Homepage</h1>
            <p>The current theme is: {theme}</p>
            <p>Set a new theme: </p>
            <select name="theme" onChange={handleThemeChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="high-contrast-light">High Contrast Light</option>
                <option value="high-contrast-dark">High Contrast Dark</option>
            </select>
        </>
    )
}