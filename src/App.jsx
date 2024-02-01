import { Routes, Route } from "react-router-dom";

import { Homepage } from "./Homepage";
import { Countries } from "./Countries";
//import { Navbar } from "./Navbar";
import { ButtonAppBar } from "./ButtonAppBar";
import { TitlebarImageList } from "./TitlebarImageList";
import { Country } from "./Country";

function App() {
  return (
    <Routes>
      <Route element={<ButtonAppBar />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/countries" element={<TitlebarImageList />} />
        <Route path="/countries/:id" element={<Country />} />
      </Route>
    </Routes>
  );
}

export default App;
