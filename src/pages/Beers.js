import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Beers = () => {
  const [beerList, setBeerList] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((axiosRes) => {
        console.table(axiosRes.data[0], "<--axiosres");
        setBeerList(axiosRes.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <header>
        <Link to="/">home</Link>
      </header>
      <h1>Beers</h1>
      {beerList.map((beer) => {
        return (
          <div className="one-beer">
            <p>{beer.name}</p>
            <img style={{ height: 200 }} src={beer.image_url} alt="1" />
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            {/* this is where we send relevant info to the params using string concat
            on the route. */}
            <Link to={"/beers/" + beer._id}>Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Beers;
