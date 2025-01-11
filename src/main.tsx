import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import './index.css'
import Home from "./Home.tsx";
import Project from "./Project.tsx";
import Master from "./layouts/Master.tsx";
import About from "./pages/About.tsx";
import i18next from "./i18next.tsx";
import {I18nextProvider} from "react-i18next";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <I18nextProvider i18n={i18next}>
                <Routes>
                <Route path="/" element={<Master />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/app" element={<Project />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
            </I18nextProvider>
        </BrowserRouter>
    </StrictMode>,
)
