import "./css/footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}

        <div className="footer-box">

          <h2 className="logo">
            MYCHOIZE
          </h2>

          <p>
            MyChoize self drive cars is a self drive brand owned by ORIX,
            Japan's second largest self drive car rental company.
          </p>

          <div className="social">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

          </div>

        </div>

        {/* About */}

        <div className="footer-box">

          <h3>About</h3>

          <a href="#">Deals</a>

          <a href="#">Fleet</a>

          <a href="#">Contact</a>

          <a href="#">FAQ</a>

          <a href="#">Privacy Policy</a>

        </div>

        {/* Links */}

        <div className="footer-box">

          <h3>Helpful Links</h3>

          <a href="#">Home</a>

          <a href="#">About</a>

          <a href="#">Blogs</a>

          <a href="#">Sitemap</a>

          <a href="#">Agent Login</a>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Reach Us</h3>

          <p>
            <FaMapMarkerAlt />
            ORIX Corporation India Ltd.
            Mumbai - 400059
          </p>

          <p>
            <FaEnvelope />
            selfdrive@orixindia.com
          </p>

          <p>
            <FaPhoneAlt />
            +91 95123 41234
          </p>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © 2026 MyChoize Clone. All Rights Reserved.
        </p>

        <div className="stores">

          <button className="play">
            Google Play
          </button>

          <button className="apple">
            App Store
          </button>

        </div>

      </div>

      <button
        className="top-btn"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}