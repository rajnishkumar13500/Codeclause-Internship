import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function ProjectCards(props) {
  return (
    <Card className="project-card-view">
     
      <Card.Body>
        <br></br>
        <br></br>
        <Card.Title>{props.title}</Card.Title>
        <br></br>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <br></br>
        <Button variant="primary" href={props.ghLink} target="_blank">
          
          GitHub
        </Button>
        <br></br>
        {"\n"}
        {"\n"} 
      
        
      </Card.Body>
      <br></br>
    </Card>
  );
}
export default ProjectCards;
