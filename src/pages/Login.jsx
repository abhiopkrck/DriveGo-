import { useState } from "react";
import "../components/css/login.css";
import { FaGoogle, FaEye, FaEyeSlash, FaCarSide } from "react-icons/fa";
import Navbar from "../components/Navbar";
export default function Login() {
  const [signup, setSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    <Navbar/>
    <div className="login-page">

      <div className="login-card">

        {/* Left */}

        <div className="login-left">

          <div className="brand">

            <FaCarSide className="brand-icon" />

            <h1>DriveGo</h1>

          </div>

          <h2>
            {signup ? "Create Your Account" : "Welcome Back"}
          </h2>

          <p>
            Rent premium self-drive cars anytime, anywhere.
          </p>

          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800"
            alt="car"
          />

        </div>

        {/* Right */}

        <div className="login-right">

          <div className="switch">

            <button
              className={!signup ? "active" : ""}
              onClick={() => setSignup(false)}
            >
              Login
            </button>

            <button
              className={signup ? "active" : ""}
              onClick={() => setSignup(true)}
            >
              Sign Up
            </button>

          </div>

          <form>

            {signup && (
              <div className="input-box">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
            )}

            <div className="input-box">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="input-box">

              <label>Password</label>

              <div className="password">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                />

                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>

              </div>

            </div>

            {signup && (
              <div className="input-box">
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm password"
                />
              </div>
            )}

            {!signup && (
              <div className="forgot">
                <a href="#">Forgot Password?</a>
              </div>
            )}

            <button className="submit-btn">
              {signup ? "Create Account" : "Login"}
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <button className="google-btn" type="button">
              <FaGoogle />
              Continue with Google
            </button>

          </form>

          <p className="bottom-text">
            {signup
              ? "Already have an account?"
              : "Don't have an account?"}

            <span onClick={() => setSignup(!signup)}>
              {signup ? " Login" : " Sign Up"}
            </span>

          </p>

        </div>

      </div>

    </div>
    </>
  );
}