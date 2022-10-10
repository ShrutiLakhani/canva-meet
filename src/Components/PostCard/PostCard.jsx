import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Comment } from "../components";
import "./PostCard.css";
import {
  deletePost,
  likePost,
  dislikePost,
  addToBookmarks,
  removeFromBookmarks,
  addComment,
  getComments,
} from "../../redux/features/post/postThunk";

function PostCard(props) {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username: currentUser } = useSelector((state) => state.auth.user);
  const { posts, bookmarks, comments } = useSelector((state) => state.post);
  const [enableComments, setEnableComments] = useState(false);
  const [comment, setComment] = useState("");
  var commentArr = useSelector((state) => state.post.comments);

  const {
    _id,
    content,
    username,
    text,
    likes: { likeCount, likedBy },
    comments: [],
  } = props;
  const [formData, setFormData] = useState({ comment: "", postId: _id });
  const handleCommentPost = (formData) => {
    dispatch(addComment(formData));
    setFormData({ ...formData, comment: "" });
  };

  const handleAddToBookMark = (id) => {
    dispatch(addToBookmarks(id));
  };
  const handleRemoveBookMark = (id) => {
    dispatch(removeFromBookmarks(id));
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
  const handleNavigateToSinglePost = (id) => {
    navigate(`/post/${id}`);
  };

  useEffect(() => {
    dispatch(getComments(postId));
  }, []);

  return (
    <>
      <div className="post">
        <div className="post-header">
          <span class="material-symbols-outlined">account_circle</span>
          <div className="post-info">
            <h2>{username}</h2>
            <p>@{username}</p>
          </div>
          {username === currentUser ? (
            <span
              class="material-symbols-outlined post-delete-icon"
              onClick={() => handleDeletePost(_id)}
            >
              delete
            </span>
          ) : (
            ""
          )}
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
          <span
            class="material-symbols-outlined post-span-icon"
            onClick={() => handleNavigateToSinglePost(_id)}
          >
            chat_bubble
          </span>
          {bookmarks.some((post) => post._id === _id) ? (
            <span
              class="material-symbols-outlined post-span-icon bookmark"
              onClick={() => handleRemoveBookMark(_id)}
            >
              bookmark_remove
            </span>
          ) : (
            <span
              class="material-symbols-outlined post-span-icon bookmark"
              onClick={() => handleAddToBookMark(_id)}
            >
              bookmark
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export { PostCard };
