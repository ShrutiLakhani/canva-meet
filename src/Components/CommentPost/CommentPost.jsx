import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Comment } from "../components";
import "./CommentPost.css";
import {
  deletePost,
  likePost,
  dislikePost,
  addToBookmarks,
  removeFromBookmarks,
  addComment,
} from "../../redux/features/post/postThunk";

function CommentPost(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username: currentUser } = useSelector((state) => state.auth.user);
  const { posts, bookmarks } = useSelector((state) => state.post);
  console.log("bookmarks", bookmarks);
  const {
    _id,
    content,
    username,
    // likes: { likeCount, likedBy },
  } = props;

  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
  };
  const handleLikePost = (id) => {
    dispatch(likePost(id));
  };
  const handleDislikePost = (id) => {
    dispatch(dislikePost(id));
  };
  const handleCommentPost = () => {
    dispatch(addComment());
  };
  return (
    <>
      <div className="post">
        <div className="post-header">
          <span class="material-symbols-outlined">account_circle</span>
          <div className="post-info">
            <h2>{username}</h2>
            {/* <p>@{username}</p> */}
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
          <span
            class="material-symbols-outlined post-delete-icon"
            onClick={() => handleDeletePost(_id)}
          >
            delete
          </span>
          {/* <div className="like-container">
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
          </div> */}
          {/* <span class="material-symbols-outlined post-span-icon">
            chat_bubble
          </span>
          <span className="post-span-name" onClick={() => handleCommentPost()}>
            Comment
          </span> */}
          {/* {bookmarks.some((post) => post._id === _id) ? (
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
          )} */}
        </div>
      </div>
      {/* <Comment /> */}
    </>
  );
}

export { CommentPost };
