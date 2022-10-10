import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Comment.css";
import { deleteComment } from "../../redux/features/post/postThunk";
import { CommentPost } from "../components";

export function Comment(props) {
  const { username, text, _id, votes, commentData } = props;
  const dispatch = useDispatch();
  const { postId } = useParams();
  const [postData, setPostData] = useState({ postId: postId, commentId: _id });
  const modal = useSelector((state) => state.modal);
  const { users } = useSelector((state) => state.user);
  const currentUser = useSelector((state) => state.auth.user);
  const handleDeleteComment = () => {
    dispatch(deleteComment(postData));
  };
  return (
    <div className="container">
      <div className="comment-input">
        <div className="user-info">
          {users
            .filter((user) => user.username === username)
            .map((user) => (
              <img
                key={user.id}
                className="h-10 w-10 rounded-full object-cover"
                src={user.profileImg}
                alt=""
              />
            ))}
          <h4 className="comment-heading">{username}</h4>
          {username === currentUser.username ? (
            <span
              onClick={handleDeleteComment}
              className="material-symbols-outlined post-delete-icon"
            >
              delete
            </span>
          ) : (
            ""
          )}
        </div>
        <div>
          <p className="comment-text">{text}</p>
          <p className="comment-text">{commentData}</p>
        </div>
      </div>
    </div>
  );
}
