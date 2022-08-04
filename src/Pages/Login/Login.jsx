import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../Components/components";
import { userLogin } from "../../redux/features/authSlice";

import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const testUser = {
    username: "batmanmarvel@gmail.com",
    password: "batmanmarvel",
  };

  const guestLogin = (e) => {
    console.log("Comes here");
    e.preventDefault();
    dispatch(userLogin(testUser));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginData.password || !loginData.username) {
      console.log("Fill complete form");
    } else {
      dispatch(userLogin(loginData));
      console.log("Ready for dispatch");
    }
  };
  console.log("location.pathname", location.pathname);
  useEffect(() => {
    if (token && location.pathname === "/") {
      navigate("/home");
    }
  }, [token, navigate, location]);
  return (
    <>
      <div className="canva-background-img"></div>
      <h3>CanvaConnect</h3>
      <div className="login-container">
        <form className="login-form">
          <h1>Login</h1>
          <div>
            <label className="input-label">Email address</label>
            <input
              className="form-input-container"
              type="text"
              placeholder="xyz@gmail.com"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="input-label">Password</label>
            <input
              className="form-input-container"
              type="password"
              placeholder="**********"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </div>
          <div className="forgot-pswrd-link">
            <a href="#">Forgot Password?</a>
            <input className="style-input-checkbox" type="checkbox" />
            Remember me
          </div>
          <button
            className="button-login-form border-style"
            onClick={(e) => handleLogin(e)}
          >
            LOGIN
          </button>
          <button
            className="button-login-form border-style"
            onClick={(e) => {
              guestLogin(e);
            }}
          >
            GUEST LOGIN
          </button>
          <Link to="/signup" className="btn-sign-up button-link">
            Create New Account <i class="fas fa-chevron-right"></i>
          </Link>
        </form>
      </div>
    </>
  );
}
export { Login };
