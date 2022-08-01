import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import { useVideo, useAuth } from "../../context/context";
import { useNavigate } from "react-router-dom";
function Navbar() {
  //   const { videoDispatch } = useVideo();
  const { loggedIn, setLoggedIn } = useState(false);
  const navigate = useNavigate();

  const logoutHandler = () => {
    // localStorage.removeItem("userToken");
    setLoggedIn(false);
    navigate("/Login");
  };

  return (
    <>
      <div className="canva-navbar">
        <div className="canva-logo-img logo-container">
          <Link to="/"></Link>
          <small className="logo-name">CanvaMeet</small>
        </div>
        <div className="navbar-links">
          <span class="material-symbols-outlined">account_circle</span>
          <span class="material-symbols-outlined" onClick={logoutHandler}>
            logout
          </span>
        </div>
      </div>
    </>
  );
}

export { Navbar };
