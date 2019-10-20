import React from "react";
import "../styles/Home.css";
import PlayerForm from "./PlayerForm";

const photo = require("../img/banner.png");

const generatePlayers = numberOfPlayers => {
  return Array.from(Array(numberOfPlayers), (val, index) => index + 1).map(
    val => <PlayerForm key={val} playerId={val} />
  );
};

function Home() {
  return (
    <div id="main-container">
      <div id="banner">
        <img src={photo} alt="Banner" />
      </div>
      <div className="player-container">{generatePlayers(3)}</div>
    </div>
  );
}

export default Home;
