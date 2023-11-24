import { Fragment } from "react";
import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import MainNav from "./Components/MainNav";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Homepage from "./pages/Homepage";
import Aboutus from "./Components/Aboutus";
import Contact from "./Components/Contact";
import BlogPage from "./pages/BlogPage";
// import Vblogs from "./Components/Vblogs";
import BlogCatergoryPage from "./pages/BlogCategoryPage";
// import "node_modules/video-react/dist/video-react.css";

function App() {
  return (
    <Fragment>
      <MainNav />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/About-Us" element={<Aboutus />} />
        <Route path="/Blogs" element={<BlogPage />} />
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path="/Vblogs" element={<Vblogs />} /> */}
        <Route path="/blogs/:category" element={<BlogCatergoryPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
