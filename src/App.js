import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Interests from "./pages/Interests";
import Olympiads from "./pages/Olympiads";
import Socials from "./pages/Socials";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Interests" element={<Interests />} />
          <Route path="/Olympiads" element={<Olympiads />} />
          <Route path="/Socials" element={<Socials />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
