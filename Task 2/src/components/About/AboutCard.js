import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Rajnish Kumar </span>
            from <span className="blue"> Haryana, India.</span>
            <br />I Have completed my Bsc. Computer science From,
            <br />Motilal Nehru COllege University of Delhi.
            <br />
            <br></br>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Mobile Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring things
            </li>
          </ul>
          <br></br>

          <p style={{ color: "#0a3d9b" }}>
            "Solving Problems & Creating Things"{" "}
          </p>
          <footer className="blockquote-footer">Rajnish Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
