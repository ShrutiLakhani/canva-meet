import React from "react";
import "./PersonCard.css";
import { useDispatch, useSelector } from "react-redux";
import { follow, unfollow } from "../../redux/features/user/userThunk";

function PersonCard(props) {
  const dispatch = useDispatch();
  const { _id, firstname, username } = props;
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const followers = user.following.some((user) => user.username !== username);

  const handleFollow = (e) => {
    e.stopPropagation();
    dispatch(follow(_id));
  };
  const handleUnFollow = (e) => {
    e.stopPropagation();
    dispatch(unfollow(_id));
  };

  return (
    <>
      {username !== user.username ? (
        <div className="person-container">
          <img
            className="avatar-img avatar-small"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc2XFZ8Dh9Z_9YqKZYciY1vD7kVoxWWSC4HaVCPEih-uUChPlapncRaTdQVtdJ4KEv4qs&usqp=CAU"
            alt=""
          />
          <p>{username}</p>
          {user.following.some((user) => user.username === username) ? (
            <button
              className="followup-button"
              onClick={(e) => handleUnFollow(e)}
            >
              Following
            </button>
          ) : (
            <button
              className="followup-button"
              onClick={(e) => handleFollow(e)}
            >
              Follow
            </button>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default PersonCard;
