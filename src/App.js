import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import Beers from "./pages/Beers";
import OneBeer from "./pages/OneBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/beers/:beerId" element={<OneBeer />} />
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
