import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../src/Components/Dashboard";
import Form from "../src/Components/Form"
import Show from "../src/Components/Show"
import Blog1 from "../src/Components/Blog1"
import Blog2 from "../src/Components/Blog2"
import Blog3 from "../src/Components/Blog3"
import Blog4 from "../src/Components/Blog4"
export default function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<Dashboard />} />
                <Route path="/form" element={<Form />} />
                <Route path="/show" element={<Show />} />
                <Route path= "/blog1" element={<Blog1 />} />
                <Route path= "/blog2" element={<Blog2 />} />
                <Route path= "/blog3" element={<Blog3 />} />
                <Route path= "/blog4" element={<Blog4 />} />

            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);