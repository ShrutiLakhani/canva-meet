import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  CommentPost,
  Navbar,
  PersonCard,
  PostCard,
  Sidebar,
  Comment,
  RightSidebar,
} from "../../Components/components";

import { getComments } from "../../redux/features/post/postThunk";

function SinglePostPage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const commentsArr = useSelector((state) => state.post.comments);
  const reverseCommentArr = [...commentsArr].reverse();
  const { postId } = useParams();
  const singlePost = posts.find((post) => post._id === postId);
  //   const { editCommentModal } = useSelector((state) => state.modal);
  useEffect(() => {
    dispatch(getComments(postId));
  }, []);
  return (
    <>
      <h1 className="page-header">I am Home 🤫</h1>
      <div className="center-div">
        <Sidebar />
        <div className="home-container">
          <PostCard {...singlePost} />
          <CommentPost />
          {reverseCommentArr.map((comment) => (
            <Comment key={comment._id} {...comment} />
          ))}
        </div>
        <RightSidebar />
      </div>
    </>
  );
}
export { SinglePostPage };
