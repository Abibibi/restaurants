import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "@/routes/home";
import "./index.css";
import AddRecord from "./routes/add";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add" element={<AddRecord />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
