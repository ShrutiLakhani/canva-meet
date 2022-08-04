import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../Components/components";
import { userLogin, userSignup } from "../../redux/features/authSlice";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();

  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!signUpData.password || !signUpData.username) {
      console.log("Fill complete form");
    } else {
      dispatch(userSignup(signUpData));
      console.log("Ready for dispatch");
    }
  };

  useEffect(() => {
    if (token && location.pathname === "/signup") {
      navigate("/home");
    }
  }, [token, navigate, location]);

  return (
    <>
      <div className="canva-background-img"></div>
      <div className="signup-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Signup</h1>
          <div>
            <label className="input-label">Email address</label>
            <input
              className="form-input-container"
              type="text"
              required
              placeholder="xyz@gmail.com"
              value={signUpData.username}
              onChange={(e) =>
                setSignUpData({ ...signUpData, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="input-label">Password</label>
            <input
              className="form-input-container"
              type="text"
              required
              placeholder="**********"
              value={signUpData.password}
              onChange={(e) =>
                setSignUpData({ ...signUpData, password: e.target.value })
              }
            />
          </div>
          <div className="form-bottom-section">
            <input type="checkbox" className="checkbox" />
            <span>I accept all Terms and Conditions</span>
          </div>
          <button className="button-login-form border-style" type="submit">
            CREATE NEW ACCOUNT
          </button>
          <Link to="/">
            Already have an account <i className="fas fa-chevron-right"></i>
          </Link>
        </form>
      </div>
    </>
  );
}
export { Signup };
