import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import osmarImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  const userAgent = navigator.userAgent.toLowerCase();
  const isChrome = /chrome/.test(userAgent);
  const isSafari = /safari/.test(userAgent);

  const rotateClass = isChrome
    ? "rotate270-chrome"
    : isSafari
    ? "rotate270-safari"
    : "";

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who`s <strong className="textcolor">Osmar Graça ?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={4}
            xs={12}
            style={{
              paddingTop: "120px",
              paddingBottom: "50px",
            }}
            className={`about-img ${rotateClass}`}
          >
            <img src={osmarImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="textcolor">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="textcolor">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
