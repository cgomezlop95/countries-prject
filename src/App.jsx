import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import { NavBar } from "./NavBar";
import { CountryImageList } from "./CountryImageList";
import { CountryCard } from "./CountryCard";

function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/countries" element={<CountryImageList />} />
        <Route path="/countries/:id" element={<CountryCard />} />
      </Route>
    </Routes>
  );
}

export default App;
