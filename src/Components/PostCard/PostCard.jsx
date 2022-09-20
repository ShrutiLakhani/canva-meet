import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./PostCard.css";
import { addToBookmarks } from "../../redux/features/BookMark/bookmarkThunk";

function PostCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username: currentUser } = useSelector((state) => state.auth.user);
  const { posts } = useSelector((state) => state.post);
  const {
    _id,
    content,
    username,
    // likes: { likeCount, likedBy },
  } = props;

  const handleAddToBookMark = (id) => {
    dispatch(addToBookmarks(id));
  };
  return (
    <div className="post">
      <div className="post-header">
        <span class="material-symbols-outlined">account_circle</span>
        <div className="post-info">
          <h2>{username}</h2>
          <p>@{username}</p>
        </div>
        <span class="material-symbols-outlined post-delete-icon">delete</span>
      </div>
      <div className="post-body">
        <p>{content}</p>
      </div>
      <div className="post-buttons">
        <span class="material-symbols-outlined post-span-icon">favorite</span>
        <span className="post-span-name">Like</span>
        <span class="material-symbols-outlined post-span-icon">
          chat_bubble
        </span>
        <span className="post-span-name">Comment</span>
        <span
          class="material-symbols-outlined post-span-icon bookmark"
          onClick={() => handleAddToBookMark(_id)}
        >
          bookmark
        </span>
      </div>
    </div>
  );
}

export { PostCard };
