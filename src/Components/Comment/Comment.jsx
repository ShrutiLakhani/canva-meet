import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Comment.css";
// import { CommentPost } from "../components";

// import {
//   deleteComment,
//   downvoteComment,
//   editComment,
//   upvoteComment,
// } from "../../redux/features/post/postThunk";

function Comment({ post, comment }) {
  //   const { username, text, _id, votes } = props;
  const {
    username,
    profileImage,
    createdAt,
    edited,
    text,
    _id: commentId,
  } = comment;
  console.log("post", post);
  console.log("comment", comment);
  const dispatch = useDispatch();
  const { postId } = useParams();
  //   const [postData, setPostData] = useState({ postId: postId, commentId: _id });
  const modal = useSelector((state) => state.modal);
  const { users } = useSelector((state) => state.user);
  //   const [commentData, setCommentData] = useState({ content: "" });
  const currentUser = useSelector((state) => state.auth.user);
  //   const { posts, bookmarks, comments } = useSelector((state) => state.post);
  const posts = useSelector((state) => state.post.posts);
  const commentArr = useSelector((state) => state.post.comments);
  const reverseCommentArr = [commentArr].reverse();
  console.log("commentArr", commentArr);
  //   console.log("comment", comment);
  //   const {
  //     _id,
  //     content,
  //     username,
  // likes: { likeCount, likedBy },
  // comments: { text },
  //   } = props;

  //   console.log("CommentComp", commentData);
  return (
    <div className="">
      <div className="flex gap-2">
        <img
          //   src={comment}
          alt="commenter-dp"
          className="h-7 aspect-square rounded-full"
        />
        <p className="text-sm font-semibold">{text}</p>
      </div>

      <p>{username}</p>
      <p>{}</p>

      <span
        class="material-symbols-outlined post-delete-icon"
        // onClick={() => handleDeletePost(_id)}
      >
        delete
      </span>
    </div>
  );
}
export { Comment };
