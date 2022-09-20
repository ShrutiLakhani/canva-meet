import React, { useState } from "react";
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
  const { username, following } = useSelector((state) => state.auth.user);
  const { allPosts } = useSelector((state) => state.allPosts);
  const [sortBy, setSortBy] = useState("Latest");

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  const filteredPosts = posts.filter((post) => post.username === username);

  const sortHandler = () => {
    switch (sortBy) {
      case "Latest":
        return [...filteredPosts].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "Oldest":
        return [...filteredPosts].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      case "Trending":
        return [...filteredPosts].sort(
          (a, b) => b.likes?.length - a.likes?.length
        );
      default:
        return filteredPosts;
    }
  };

  const posters = sortHandler(filteredPosts);
  return (
    <>
      <h1 className="page-header">I am Home 🤫</h1>
      <div className="center-div">
        <Sidebar />
        <div className="home-container">
          <MainFeed />
          {posters.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
        <RightSidebar />
      </div>
    </>
  );
}

export { Home };
