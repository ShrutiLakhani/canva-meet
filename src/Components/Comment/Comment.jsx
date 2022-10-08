// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import "./Comment.css";

// function Comment({ comment, postId }) {
//   //   const { username, profileImage, createdAt, edited, text, _id } = comment;
//   const dispatch = useDispatch();
//   //   const { postId } = useParams();
//   const modal = useSelector((state) => state.modal);
//   const { users } = useSelector((state) => state.user);
//   const { user } = useSelector((state) => state.auth);
//   const currentUser = useSelector((state) => state.auth.user);
//   const posts = useSelector((state) => state.post.posts);
//   //   const commentArr = useSelector((state) => state.post.comments);
//   const singlePost = useSelector((state) =>
//     posts.find((post) => post._id === postId)
//   );
//   //   );
//   //   const finalPost = singlePost.comments;
//   //   console.log("finalPost", finalPost);
//   //   const reverseCommentArr = [commentArr].reverse();
//   console.log("postId", postId);
//   console.log("singlePost", singlePost);

//   console.log("posts", posts);
//   //   console.log("comment", comment);
//   //   console.log("username", username);
//   //   console.log("commmentData", comment);

//   return (
//     <>
//       {/* {users
//         .filter((user) => user.username === comment.username)
//         .map((user) => ( */}
//       <div className="">
//         <div className="flex gap-2">
//           <img
//             //   src={comment.comment}
//             alt="commenter-dp"
//             className="h-7 aspect-square rounded-full"
//           />
//           <p className="text-sm font-semibold">{comment.text}</p>
//           <p className="text-sm font-semibold">{comment.commentData}</p>
//         </div>

//         <p>{comment.username}</p>
//         <p>{}</p>

//         <span
//           class="material-symbols-outlined post-delete-icon"
//           // onClick={() => handleDeletePost(_id)}
//         >
//           delete
//         </span>
//       </div>
//       )
//     </>
//   );
// }
// export { Comment };
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Comment.css";
// import {
//   openEditCommentModal,
//   openModal,
// } from "../../redux/features/modal/modalSlice";
import {
  deleteComment,
  downvoteComment,
  editComment,
  upvoteComment,
} from "../../redux/features/post/postThunk";
import { CommentPost } from "../components";

export function Comment(props) {
  const { username, text, _id, votes, commentData } = props;
  const dispatch = useDispatch();
  const { postId } = useParams();
  const [postData, setPostData] = useState({ postId: postId, commentId: _id });
  const modal = useSelector((state) => state.modal);
  const { users } = useSelector((state) => state.user);

  const currentUser = useSelector((state) => state.auth.user);

  const handleUpvote = () => {
    dispatch(upvoteComment(postData));
  };
  const handleDownvote = () => {
    dispatch(downvoteComment(postData));
  };
  // const handleEditComment = () => {
  //   dispatch(openEditCommentModal({ text, _id }));
  // };
  const handleDeleteComment = () => {
    console.log("comes here");
    dispatch(deleteComment(postData));
  };
  return (
    <div className="container">
      {/* <div className="feed"> */}
      {/* <div className="feed-inputcontainer"> */}
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
              onClick={handleDeleteComment(postData)}
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
          {/* </div> */}
          {/* <div className="flex items-center gap-4 mt-2"> */}
          {/* {votes.upvotedBy.some(
            (user) => user.username === currentUser.username
          ) ? (
            <span
              onClick={handleDownvote}
              className="cursor-pointer material-symbols-outlined filled"
            >
              thumb_up
            </span>
          ) : (
            <span
              onClick={handleUpvote}
              className="cursor-pointer material-symbols-outlined"
            >
              thumb_up
            </span>
          )}

          {username === currentUser.username ? (
            <span
              // onClick={() => handleEditComment(postData)}
              className="cursor-pointer material-symbols-outlined"
            >
              edit
            </span>
          ) : (
            ""
          )} */}
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
}
