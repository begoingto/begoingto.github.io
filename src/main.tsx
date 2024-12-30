import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import './index.css'
import Home from "./Home.tsx";
import Project from "./Project.tsx";
import Master from "./layouts/Master.tsx";
import About from "./pages/About.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Master />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/app" element={<Project />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
