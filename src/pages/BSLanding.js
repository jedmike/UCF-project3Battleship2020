import React from "react";
import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

function BSLanding() {
    return (
      <div>
        <Hero backgroundImage="https://miro.medium.com/max/1920/1*C1hodUrhoMWlNmtYDSga5A.png">
        <h1>Battleship!</h1>
        {/* <button type="button" className="btn btn-outline-light">Play</button> */}
        <a href="BSGameBoard" className="btn btn-outline-light">Play</a>
       
      </Hero>
       {/* <Container style={{ marginTop: 30 }}></Container> */}
    </div>
  );
}

export default BSLanding;
