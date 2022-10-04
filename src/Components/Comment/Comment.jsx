import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Comment.css";
import { getComments } from "../../redux/features/post/postThunk";

function Comment({ comment }) {
  const { username, profileImage, createdAt, edited, text, _id } = comment;
  const dispatch = useDispatch();

  const { postId } = useParams();
  console.log("postId", postId);

  const modal = useSelector((state) => state.modal);
  const { users } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  //   const currentUser = useSelector((state) => state.auth.user);
  const posts = useSelector((state) => state.post.posts);
  const commentArr = useSelector((state) => state.post.comments);
  const reverseCommentArr = [commentArr].reverse();
  const singlePost = posts.find((poster) => poster._id === postId);
  console.log("posts", posts);
  console.log("singlePost", singlePost);
  console.log("comment", comment);
  //   useEffect(() => {
  //     dispatch(getComments(postId));
  //   }, []);
  return (
    <>
      <div className="">
        <div className="flex gap-2">
          <img
            //   src={comment}
            alt="commenter-dp"
            className="h-7 aspect-square rounded-full"
          />
          <p className="text-sm font-semibold">{text}</p>
          <p className="text-sm font-semibold">{comment.commentData}</p>
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
    </>
  );
}
export { Comment };
