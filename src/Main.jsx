import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from './pages';
import './Main.css';
import { ThemeProvider } from "./contexts";

export default function Main() {

    return (
        <ThemeProvider>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<h1>404: Page not found</h1>} />
                </Routes>
            </div>
        </ThemeProvider>
    )
}