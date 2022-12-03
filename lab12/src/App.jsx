import { useState } from "react";
import "./App.css";
import Prestamos from "./components/Prestamos";
import { Route, Router, Routes } from "react-router-dom";
import NewPrestamo from "./components/NewPrestamo";
import { EditView } from "./components/EditView";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Prestamos />} />
        <Route path="/nuevo-prestamo" element={<NewPrestamo />} />
      </Routes>
    </div>
  );
}

export default App;
