import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function Navbar() {
  const { loggedIn, setLoggedIn } = useState(false);
  const navigate = useNavigate();

  const logoutHandler = () => {
    setLoggedIn(false);
    navigate("/Login");
  };
  const { username, following } = useSelector((state) => state.auth.user);
  return (
    <>
      <div className="canva-navbar">
        <div className="canva-logo-img logo-container">
          <Link to="/"></Link>
          <small className="logo-name">CanvaMeet</small>
        </div>
        <div className="navbar-links">
          <span class="material-symbols-outlined">account_circle</span>
          <p>{username}</p>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export { Navbar };
