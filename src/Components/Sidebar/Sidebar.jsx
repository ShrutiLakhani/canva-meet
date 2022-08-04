import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
function Sidebar({ active }) {
  return (
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
        <Link to="/history" className="sidebar-links-name">
          Bookmark
        </Link>
      </div>
      <div className="sidebar-links">
        <span class="material-symbols-outlined">archive</span>
        <Link to="/watchlater" className="sidebar-links-name">
          Archive
        </Link>
      </div>
      <div className="sidebar-links">
        <span class="material-symbols-outlined">account_circle</span>
        <Link to="/liked" className="sidebar-links-name">
          Profile
        </Link>
      </div>
    </div>
  );
}

export { Sidebar };
