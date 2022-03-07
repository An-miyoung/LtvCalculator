import { Routes, Route } from "react-router-dom";
import LtvCalculator from "./pages/LtvCalculator";
import LtvInput from "./pages/LtvInput";
import LtvResult from "./pages/LtvResult";

function App() {
  return (
    <>
      <Routes>
        <Route path="/ltvCal/result" element={<LtvResult />} />
        <Route path="/ltvCal/input" element={<LtvInput />} />
        <Route path="/ltvCal/*" element={<LtvCalculator />} />
      </Routes>
    </>
  );
}

export default App;
