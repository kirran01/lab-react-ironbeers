import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const RandomBeer = () => {
  // https://ih-beers-api2.herokuapp.com/beers/random
  const [randomBeer, setRandomBeer] = useState(null);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((axiosRes) => {
        console.log(axiosRes.data, "<--res.data");
        setRandomBeer(axiosRes.data);
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
      <h1>random beer</h1>
      {randomBeer ? (
        <>
          <p>{randomBeer.name}</p>
          <img style={{ height: 150 }} src={randomBeer.image_url} alt="1" />
          <p>{randomBeer.tagline}</p>
          <p>{randomBeer.first_brewed}</p>
          <p>{randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default RandomBeer;
