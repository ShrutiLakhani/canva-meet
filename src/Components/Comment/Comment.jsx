import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Comment.css";

function Comment({ comment, postId }) {
  //   const { username, profileImage, createdAt, edited, text, _id } = comment;
  const dispatch = useDispatch();
  //   const { postId } = useParams();
  const modal = useSelector((state) => state.modal);
  const { users } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const currentUser = useSelector((state) => state.auth.user);
  const posts = useSelector((state) => state.post.posts);
  //   const commentArr = useSelector((state) => state.post.comments);
  const singlePost = useSelector((state) =>
    posts.find((post) => post._id === postId)
  );
  //   );
  //   const finalPost = singlePost.comments;
  //   console.log("finalPost", finalPost);
  //   const reverseCommentArr = [commentArr].reverse();
  console.log("postId", postId);
  console.log("singlePost", singlePost);

  console.log("posts", posts);
  //   console.log("comment", comment);
  //   console.log("username", username);
  //   console.log("commmentData", comment);

  return (
    <>
      {/* {users
        .filter((user) => user.username === comment.username)
        .map((user) => ( */}
      <div className="">
        <div className="flex gap-2">
          <img
            //   src={comment.comment}
            alt="commenter-dp"
            className="h-7 aspect-square rounded-full"
          />
          <p className="text-sm font-semibold">{comment.text}</p>
          <p className="text-sm font-semibold">{comment.commentData}</p>
        </div>

        <p>{comment.username}</p>
        <p>{}</p>

        <span
          class="material-symbols-outlined post-delete-icon"
          // onClick={() => handleDeletePost(_id)}
        >
          delete
        </span>
      </div>
      )
    </>
  );
}
export { Comment };
