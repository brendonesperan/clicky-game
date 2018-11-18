import React from "react";

const score = 0;
const topScore = 0;
const positions = [1, 2, 3, 4, 5, 6];

const Variables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is ({score})</h1>
        <h2>My name has ({positions.length}) letters</h2>
        <h2>I think React ({topScore})</h2>
      </div>
    </div>
  </div>
);

export default Variables;
