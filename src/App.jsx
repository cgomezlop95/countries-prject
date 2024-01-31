import { Routes, Route } from "react-router-dom";

//Import 4 components:
import { Homepage } from "./Homepage";
import { Countries } from "./Countries";
import { Navbar } from "./Navbar";
import { Country } from "./Country";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:id" element={<Country />} />
      </Route>
    </Routes>
  );
}

export default App;
