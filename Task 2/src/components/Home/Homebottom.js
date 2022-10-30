import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me  <span className="blue"> INTRODUCE </span> Myself
            </h1>
            <br></br>
            <hr></hr>
            <br></br>
            <br></br>

            <div class="row">
											<div class="col-md-12">
												<h4>
												   <span> Name </span> : Rajnish Kumar											   
												</h4>
											</div>											
											<div class="col-md-12">
												
												   <span> Age </span>
												   : 21
												
											</div>
											
											<div class="col-md-12">
												
												   <span> Address </span>
												   : Faridabad , Haryana , India
												
											</div>
											
											<div class="col-md-12">
												
												   <span> Mobile Number </span>
												   : 8882283789
												
											</div>
											
											<div class="col-md-12">
												
												   <span> Email </span>
												   : rajnishkumar13500@gmail.com
												
											</div>
										</div>
            
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rajnishkumar13500"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rajnish-kumar-412aba106"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/cryptic_r_j/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
