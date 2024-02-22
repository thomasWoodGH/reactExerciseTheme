import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "./contexts"

import Main from "./Main"

const root = createRoot(document.getElementById("root"))

root.render(
    <Router>
        <ThemeProvider>
            <Main />
        </ThemeProvider>
    </Router>
)