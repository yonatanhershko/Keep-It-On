import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./cmps/layout/Navbar";
import Dashboard from "./cmps/dashboard/Dashboard";
import ProjectDetials from "./cmps/projects/ProjectDetials";
import { SignIn } from "./cmps/auth/SignIn";
import { SignUp } from "./cmps/auth/SignUp";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route path="/project/:id" element={<ProjectDetials />} />
                    <Route path="/singin" element={<SignIn />} />
                    <Route path="/singup" element={<SignUp />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
