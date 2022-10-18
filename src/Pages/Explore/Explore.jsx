import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts } from "../../redux/features/post/postThunk";
import {
  MainFeed,
  PostCard,
  RightSidebar,
  Sidebar,
} from "../../Components/components";
import { useEffect } from "react";
import { getAllUsers } from "../../redux/features/user/userThunk";

function Explore() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const reversePosts = [...posts].reverse();
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllUsers());
  }, []);
  return (
    <>
      <h1 className="page-header">I am Home 🤫</h1>
      <div className="center-div">
        <Sidebar />
        <div>
          {reversePosts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
        <RightSidebar />
      </div>
    </>
  );
}

export { Explore };
