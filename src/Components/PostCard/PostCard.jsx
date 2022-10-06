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
  const commentsArr = useSelector((state) => state.post.comments);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username: currentUser } = useSelector((state) => state.auth.user);
  const { posts, bookmarks, comments } = useSelector((state) => state.post);
  const [enableComments, setEnableComments] = useState(false);
  const [comment, setComment] = useState("");
  const commentArr = useSelector((state) => state.post.comments);

  // const posts = useSelector((state) => state.post.posts);

  const {
    _id,
    content,
    username,
    text,
    likes: { likeCount, likedBy },
    comments: {},
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
  console.log("commentArr", commentArr);
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
            onClick={() => setEnableComments((prev) => !prev)}
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
      {enableComments && (
        <footer>
          <div className="relative w-full px-1">
            <textarea
              placeholder="Drop a comment.."
              className="mt-2 w-full resize-none bg-gray-100 px-2 py-2 text-sm focus:outline-none"
              value={formData.comment}
              onChange={(e) =>
                setFormData({ ...formData, comment: e.target.value })
              }
            />
            <button
              className="absolute right-4 bottom-1/2 translate-y-1/2 rounded-md border-none bg-blue-500 px-3 py-1 text-sm text-gray-100"
              onClick={() => handleCommentPost(formData)}
            >
              Post
            </button>
          </div>
          {commentArr.map((comment) => (
            <Comment comment={comment} postId={_id} key={comment} />
          ))}
        </footer>
      )}
    </>
  );
}

export { PostCard };
