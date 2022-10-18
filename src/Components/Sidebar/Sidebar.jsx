import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Sidebar.css";
import { userLogout } from "../../redux/features/authSlice";
function Sidebar({ active }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLogout());
    navigate("/");
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar-left">
        <div className="sidebar-links active">
          <span class="material-symbols-outlined">home</span>
          <Link to="/" className="sidebar-links-name">
            Home
          </Link>
        </div>
        <div className="sidebar-links">
          <span class="material-symbols-outlined">explore</span>
          <Link to="/explore" className="sidebar-links-name">
            Explore
          </Link>
        </div>
        <div className="sidebar-links">
          <span class="material-symbols-outlined">bookmarks</span>
          <Link to="/bookmark" className="sidebar-links-name">
            Bookmark
          </Link>
        </div>
        <div className="sidebar-links">
          <span class="material-symbols-outlined">account_circle</span>
          <Link to="/liked" className="sidebar-links-name">
            Profile
          </Link>
        </div>
        <div>
          <button className="sidebar-logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export { Sidebar };
