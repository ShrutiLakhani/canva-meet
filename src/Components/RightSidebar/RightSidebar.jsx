import React from "react";
import "./RightSidebar.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../redux/features/user/userThunk";
import { users } from "../../backend/db/users";
import PersonCard from "../PersonCard/PersonCard";

function RightSidebar() {
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  return (
    <div className="right-sidebar-container">
      <h3 className="header-h3">Who to follow</h3>
      <div className="followup-container">
        {users.map((user) => (
          <PersonCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}
export { RightSidebar };
