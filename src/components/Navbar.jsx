import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./css/navbar.css";
import logo from "../assets/img/hero/logo.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">

        <Link to="/" className="logo">
          <img src={logo} alt="MyChoize" />
        </Link>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="/Deals">Deals</Link></li>
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
          <li><Link to="/FAQ">FAQ's</Link></li>
          <li><Link to="/Login"> <button className="login-btn">
            Login / Signup
          </button></Link></li>

         
        </ul>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </nav>
    </header>
  );
}
export default Navbar;