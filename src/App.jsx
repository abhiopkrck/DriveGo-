import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Deals from "./components/Deals";
import Fleets from "./components/Fleets";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import './index.css'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Deals" element={<Deals />} />
      <Route path="/Fleets" element={<Fleets />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/About" element={<About />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;