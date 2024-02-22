import React, { useEffect } from "react";
import { useTheme } from '../../contexts'

export default function Home() {
    const { theme, setTheme, switchTheme } = useTheme()

    return (
        <>
            <h1>Theme Homepage</h1>
            <p>The current theme is {theme}</p>
            <button onClick={switchTheme}>Change theme</button>
        </>
    )
}