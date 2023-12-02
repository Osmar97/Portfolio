import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pharm from "../../Assets/Projects/pharm.png";
import tictac from "../../Assets/Projects/tictactoe.png";
import mancala from "../../Assets/Projects/mancala.png";
import cinema from "../../Assets/Projects/sala.png";
import sodoku from "../../Assets/Projects/sodoku.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="textcolor">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pharm}
              title="Full Stack Web application"
              description="I’m currently working on an exciting full-stack project, a pharmacy website, using Next.js, MongoDB, Firebase, Strapi, and Tailwind CSS. This project aims to provide a seamless and user-friendly platform for customers to access pharmaceutical information, browse products, and make purchases."
              ghLink="https://github.com/Osmar97/Pharm-Website.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictac}
              title="Customizable Tic Tac Toe Game in Java"
              description="Introducing a versatile and engaging Tic Tac Toe game created in Java, where players have the freedom to tailor the gaming experience to their preferences. This interactive application allows you to customize the game style, size of the board, and the victory conditions, providing a unique and personalized gaming adventure."
              ghLink="https://github.com/Osmar97/TicTacToe/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mancala}
              title="Mancala Game in Python"
              description="Explore the Mancala Game in Python, a simple yet functional creation. Register players, initiate games, make moves strategically, and display game details seamlessly. Exit games gracefully without losing progress, and save/load your game as needed. Experience straightforward and engaging gameplay with this Python-based Mancala Game. Enter your choice and enjoy the strategic journey!."
              ghLink="https://github.com/Osmar97/Mancala"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cinema}
              title="Cinema room in Python"
              description="This program was developed to facilitate the management of shows and ticket sales. It operates in two modes: one for users/buyers and another for the hall administrator. In the user/buyer mode, users can register, check available shows, purchase tickets for their chosen show, view their tickets, and cancel reservations. In the administrator mode, it is possible to create shows and view ticket sales results. The program features a simple and intuitive layout, allowing users to perform actions with just a few steps"
              ghLink="https://github.com/Osmar97/sala_de_cinema"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sodoku}
              title="Sodoku in Python"
              description="The code uses the AC-3 algorithm to solve Sudoku puzzles. It transforms Sudoku into a Constraint Satisfaction Problem (CSP) using the Sudoku class. The solve_sudoku function applies AC-3 to reduce variable domains and fills in determined values, resulting in a solved Sudoku board. The example Sudoku board is a 9x9 grid with the goal of filling numbers 1 to 9 in each row, column, and 3x3 subgrid."
              ghLink="https://github.com/Osmar97/Sodoku_solver"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
