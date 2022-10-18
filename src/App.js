import "./App.css";
import {
  Home,
  Signup,
  Explore,
  Login,
  BookMark,
  SinglePostPage,
} from "./Pages/pages";
import { Navbar, Sidebar } from "./Components/components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmark" element={<BookMark />} />
        <Route path="/post/:postId" element={<SinglePostPage />} />
      </Routes>
    </div>
  );
}

export default App;
