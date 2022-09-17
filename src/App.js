import "./App.css";
import { Home, Signup, Explore, Login, BookMark } from "./Pages/pages";
import { Navbar, Sidebar } from "./Components/components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/mock" element={<Mockman />} />  */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmark" element={<BookMark />} />
      </Routes>
    </div>
  );
}

export default App;
