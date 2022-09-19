import React from "react";
import { useSelector } from "react-redux";
import {
  MainFeed,
  PostCard,
  RightSidebar,
  Sidebar,
} from "../../Components/components";

function BookMark() {
  const posts = useSelector((state) => state.post.posts);
  const bookMarkedIds = useSelector((state) => state.bookmark.bookmarks);
  const bookmarks = posts.filter((val) =>
    bookMarkedIds.map((n) => n.id).includes(val.id)
  );

  return (
    <>
      <h1 className="page-header">I am Home 🤫</h1>
      <div className="center-div">
        <Sidebar />
        <div className="home-container">
          {bookmarks.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
        <RightSidebar />
      </div>
    </>
  );
}

export { BookMark };
