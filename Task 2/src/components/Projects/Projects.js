import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projects I <strong className="purple"> Completed  </strong>recently 
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={5} className="project-card">
            <ProjectCard             
              
              title="DU Resource Website"
              description="Resource Website for Bsc computer science students buitd with HTML, CSS , Bootstrap.Website contains syllabus, study material for computer science course"
              ghLink="https://github.com/rajnishkumar13500/root"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Portfolio website"
              description="Personal Portfolio Website.Build with the technology : HTML, CSS, React, Javascript, Bootstrap  ."
              ghLink="https://github.com/rajnishkumar13500/Portfolio"
                />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
