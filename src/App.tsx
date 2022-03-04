import React from "react";
import { Routes, Route } from "react-router-dom";
import LtvCalculator from "./pages/LtvCalculator";
import LtvInput from "./pages/LtvInput";

function App() {
  return (
    <>
      <Routes>
        <Route path="/ltvCal/input" element={<LtvInput />} />
        <Route path="/ltvCal/*" element={<LtvCalculator />} />
      </Routes>
    </>
  );
}

export default App;
