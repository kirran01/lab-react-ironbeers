import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const OneBeer = () => {
  let { beerId } = useParams();
  const [singleBeer, setSingleBeer] = useState(null);
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((axiosRes) => {
        setSingleBeer(axiosRes.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Link to="/beers">Beers</Link>
      {singleBeer ? (
        <>
      <h1>Specific beer</h1>
      <p>{singleBeer.name}</p>
      <img style={{height:150}} src={singleBeer.image_url} alt="1"/>
      <p>{singleBeer.tagline}</p>
      <p>{singleBeer.first_brewed}</p>
      <p>{singleBeer.attenuation_level}</p>
      <p>{singleBeer.description}</p>
      <p>{singleBeer.contributed_by}</p>
      </>
      ) : <p>loading...</p>}
    </div>
  );
};

export default OneBeer;
