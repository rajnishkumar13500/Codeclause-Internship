import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Homebottom";
import Type from "./Type";

function Home() {
  return (
    <section>
      
      <Container fluid className="project-section" id="home">
      
        <Particle />
        <Container className="home-content">
          
          <Row>        
            
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hii Good to see you Here !{" "}                
              </h1>            

              <h1 className="heading-name">
                I'M
               <i> <strong className="main-name"> RAJNISH KUMAR</strong></i>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
