import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/new-beer">new beer</Link>
      <br />
      <Link to="/beers">beers</Link>
      <br />
      <Link to="/random-beer">random beer</Link>
    </div>
  );
};

export default Home;
