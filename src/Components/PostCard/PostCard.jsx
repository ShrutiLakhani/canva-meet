import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./PostCard.css";

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

  return (
    <div className="post">
      <div className="post-header">
        <span class="material-symbols-outlined">account_circle</span>
        <div className="post-info">
          <h2>{username}</h2>
          <p>{content}</p>
        </div>
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
      </div>
    </div>
  );
}

export { PostCard };
