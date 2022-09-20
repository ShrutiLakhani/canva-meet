import React from "react";
import "./RightSidebar.css";

function RightSidebar() {
  return (
    <div className="right-sidebar-container">
      <h3 className="header-h3">Who to follow</h3>
      <div className="followup-container">
        <img
          className="avatar-img avatar-small"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc2XFZ8Dh9Z_9YqKZYciY1vD7kVoxWWSC4HaVCPEih-uUChPlapncRaTdQVtdJ4KEv4qs&usqp=CAU"
          alt=""
        />
        <div className="name-container">
          <h4>NameABC</h4>
          <h5>@Name1</h5>
        </div>
        <button className="followup-button">Follow</button>
      </div>

      <div className="followup-container">
        <img
          className="avatar-img avatar-small"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc2XFZ8Dh9Z_9YqKZYciY1vD7kVoxWWSC4HaVCPEih-uUChPlapncRaTdQVtdJ4KEv4qs&usqp=CAU"
          alt=""
        />
        <div className="name-container">
          <h4>NameXYZ</h4>
          <h5>@Name2</h5>
        </div>
        <button className="followup-button">Follow</button>
      </div>
      <div className="followup-container">
        <img
          className="avatar-img avatar-small"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc2XFZ8Dh9Z_9YqKZYciY1vD7kVoxWWSC4HaVCPEih-uUChPlapncRaTdQVtdJ4KEv4qs&usqp=CAU"
          alt=""
        />
        <div className="name-container">
          <h4>NameXXX</h4>
          <h5>@Name1</h5>
        </div>
        <button className="followup-button">Follow</button>
      </div>
    </div>
  );
}

export { RightSidebar };
