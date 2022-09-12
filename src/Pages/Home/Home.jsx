import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts } from "../../redux/features/post/postThunk";
import {
  MainFeed,
  PostCard,
  RightSidebar,
  Sidebar,
} from "../../Components/components";
import "./Home.css";
import { useEffect } from "react";

function Home() {
  console.log("Home: Comes here");
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const reversePosts = [...posts].reverse();
  console.log(reversePosts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <>
      <h1 className="page-header">I am Home 🤫</h1>
      <div className="center-div">
        <Sidebar />

        <div>
          <MainFeed />
          {reversePosts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
        {/* <PostCard /> */}
        <RightSidebar />
      </div>
    </>
  );
}

export { Home };
