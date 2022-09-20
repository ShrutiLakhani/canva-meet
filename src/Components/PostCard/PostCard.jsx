import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./PostCard.css";
import { addToBookmarks } from "../../redux/features/BookMark/bookmarkThunk";
import {
  deletePost,
  likePost,
  dislikePost,
} from "../../redux/features/post/postThunk";

function PostCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username: currentUser } = useSelector((state) => state.auth.user);
  const { posts } = useSelector((state) => state.post);
  const {
    _id,
    content,
    username,
    likes: { likeCount, likedBy },
  } = props;

  const handleAddToBookMark = (id) => {
    dispatch(addToBookmarks(id));
  };
  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
  };
  const handleLikePost = (id) => {
    dispatch(likePost(id));
  };
  const handleDislikePost = (id) => {
    dispatch(dislikePost(id));
  };
  return (
    <div className="post">
      <div className="post-header">
        <span class="material-symbols-outlined">account_circle</span>
        <div className="post-info">
          <h2>{username}</h2>
          <p>@{username}</p>
        </div>
        <span
          class="material-symbols-outlined post-delete-icon"
          onClick={() => handleDeletePost(_id)}
        >
          delete
        </span>
      </div>
      <div className="post-body">
        <p>{content}</p>
      </div>
      <div className="post-buttons">
        <div className="like-container">
          {likedBy.some((user) => user.username === currentUser) ? (
            <span
              className="material-symbols-outlined post-span-icon"
              onClick={() => handleDislikePost(_id)}
            >
              favorite
            </span>
          ) : (
            <span
              className="material-symbols-outlined post-span-icon"
              onClick={() => handleLikePost(_id)}
            >
              favorite
            </span>
          )}
          <span>{likeCount}</span>
        </div>
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
