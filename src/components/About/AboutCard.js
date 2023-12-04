import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="textcolor">Osmar Graça</span>,
            <br />
            I am eagerly seeking my first opportunity in the field and 
            <br />
            im in the final year of my Computer 
Engineering studies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Go to the gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Read Books
            </li>
          </ul>

          <p style={{ color: "#62B6CB" }}>
            "It’s hard to beat a person who never gives up.!"{" "}
          </p>
          <footer className="blockquote-footer">Babe Ruth</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
