import React from "react";
import Hero from "../components/Hero";


function BSLanding() {
    return (
      <div>
        <Hero backgroundImage="https://miro.medium.com/max/1920/1*C1hodUrhoMWlNmtYDSga5A.png">
        <h1>Battleship!</h1>
        <a href="BSGameBoard" className="btn btn-outline-light">Play</a>
       
      </Hero>
    </div>
  );
}

export default BSLanding;
