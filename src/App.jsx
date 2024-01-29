import { Homepage } from "./Homepage";
import { Countries } from "./Countries";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/countries" element={<Countries />} />
    </Routes>
  );
}

export default App;
