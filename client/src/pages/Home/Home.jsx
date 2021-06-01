import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <Link to="/post/1">Post</Link>
    </div>
  );
};

export default Home;
