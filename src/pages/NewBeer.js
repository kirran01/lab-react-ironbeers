import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewerTips, setBrewerTips] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateALevel = (e) => {
    setAttenuationLevel(e.target.value);
  };

  const updateTagline = (e) => {
    setTagline(e.target.value);
  };

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const updateFirstBrewed = (e) => {
    setFirstBrewed(e.target.value);
  };

  const updateBrewTips = (e) => {
    setBrewerTips(e.target.value);
  };

  const updateContributedBy = (e) => {
    setContributedBy(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: firstBrewed,
        brewers_tips: brewerTips,
        attenuation_level: attenuationLevel,
        contributed_by: contributedBy,
      })
      .then((newBeer) => {
        console.log(newBeer);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <header>
        <Link to="/">home</Link>
      </header>
      <h1>new beer</h1>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <br />
        <input value={name} onChange={updateName} />
        <br />
        <label>tagline</label>
        <br />
        <input value={tagline} onChange={updateTagline} />
        <br />
        <label>description</label>
        <br />
        <input value={description} onChange={updateDescription} />
        <br />
        <label>first_brewed</label>
        <br />
        <input value={firstBrewed} onChange={updateFirstBrewed} />
        <br />
        <label>brewers_tips</label>
        <br />
        <input value={brewerTips} onChange={updateBrewTips} />
        <br />
        <label>attenuation_level</label>
        <br />
        <input value={attenuationLevel} onChange={updateALevel} />
        <br />
        <label>contributed_by</label>
        <br />
        <input value={contributedBy} onChange={updateContributedBy} />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
};

export default NewBeer;
