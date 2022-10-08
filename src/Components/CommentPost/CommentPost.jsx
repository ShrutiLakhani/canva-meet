import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addComment } from "../../redux/features/post/postThunk";
import "./CommentPost.css";

export function CommentPost() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ comment: "", postId: postId });
  const handlePostComment = (formData) => {
    dispatch(addComment(formData));
    setFormData({ ...formData, comment: "" });
  };
  return (
    <div className="feed">
      <div className="feed-inputcontainer">
        <div className="feed-input">
          <input
            value={formData.comment}
            onChange={(e) =>
              setFormData({ ...formData, comment: e.target.value })
            }
            placeholder="Drop a comment"
            className="comment-container"
          ></input>
          <button
            onClick={() => handlePostComment(formData)}
            className="feed-btn"
          >
            Comment
          </button>
        </div>
      </div>
    </div>
  );
}
