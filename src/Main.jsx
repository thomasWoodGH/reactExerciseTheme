import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from './pages';
import './Main.css';
import { ThemeProvider, useTheme } from "./contexts";

export default function Main() {

    const { theme, switchTheme } = useTheme()

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if(savedTheme){
            switchTheme(savedTheme)
        }
    }, [])

    return (
        <div className={`overlay ${theme}`}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<h1>404: Page not found</h1>} />
            </Routes>
        </div>
    )
}