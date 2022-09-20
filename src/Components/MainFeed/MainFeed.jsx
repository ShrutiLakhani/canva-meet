import React from "react";
import "./MainFeed.css";
import { InputOption, PostCard } from "../components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/features/post/postThunk";
function MainFeed() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ content: "" });
  const handleSubmit = (data) => {
    dispatch(createPost(data));
    setFormData({ content: "" });
  };

  return (
    <div className="feed">
      <div className="feed-inputcontainer">
        <div className="feed-input">
          <span class="material-symbols-outlined form-feed">edit</span>
          <input
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
          />
          <button classname="feed-btn" onClick={() => handleSubmit(formData)}>
            Post
          </button>
        </div>
        <div className="feed-inputoptions">
          <InputOption />
        </div>
      </div>
    </div>
  );
}

export { MainFeed };
