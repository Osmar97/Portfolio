import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content text-center">
          <Row>
            <Col md={12} className="home-header">
              
              <h1 style={{ paddingBottom: 40 }} className="heading">
                Hi there and welcome!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏾
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Osmar Graça</strong>
              </h1>
              <Type />
              <div style={{ padding: 200, textAlign: "center" }}> {/* Reduced padding */}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
