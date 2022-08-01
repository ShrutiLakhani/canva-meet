import "./App.css";
import { Home } from "./Pages/pages";
import { Navbar, Sidebar } from "./Components/components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sidebar-left">{/* <Sidebar /> */}</div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route element={<RequiresAuth />}>
          <Route path="/history" element={<History />} />
          <Route path="/watchlater" element={<Watchlater />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/playlist/:videoId" element={<PlayListPage />} />
        </Route> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/mock" element={<Mockman />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/video/:videoId" element={<VideoPage />} />
        <Route path="/mockman" element={<Mockman />} /> */}
      </Routes>
    </div>
  );
}

export default App;
