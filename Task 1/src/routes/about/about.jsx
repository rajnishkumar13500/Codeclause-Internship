
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import {  Link } from 'react-router-dom';
const About= () => {
  

  return (
    <Container  >
      <Row className="justify-content-md-center">        
        <Col md="auto">          
          <h1> About Covid 19 Help-Desk</h1>  
          
        </Col>
      </Row>
      <br></br>
      <Row className="justify-content-md-center">        
        <Col md="auto">          
          <h3> A Helping hand </h3> 
          <br></br>
          <p> 
          We are a great team came together <b>to help people who can't help themselves </b> . This is a non profit Organisation situated in Delhi NCR.</p> 
<br></br>
<p>A non-governmental organization (NGO) [1] is a group of people from different countries acting together, but not connected with the government of any country. Usually non-governmental organizations are non-profit - that is, they are trying to do something other than make money for the people who run them. They include organisations such as 'Oxfam' and 'World Vision'.

Non-governmental organization (NGO) is a term that has become widely accepted as referring to a legally constituted, non-governmental organization created by natural or legal persons with no participation or representation of any government. In the cases in which NGOs are funded totally or partially by governments, the NGO maintains its non-governmental status and excludes government representatives from membership in the organization.

Government funding of NGOs is controversial, since, according David Rieff, writing in The New Republic, "the whole point of humanitarian intervention was precisely that NGOs and civil society had both a right and an obligation to respond with acts of aid and solidarity to people in need or being subjected to repression or want by the forces that controlled them, whatever the governments concerned might think about the matter."[2]

Unlike the term intergovernmental organization, "non-governmental organization" is a term in general use but is not a legal definition. In many jurisdictions these types of organization are defined as "civil society organizations" or referred to by other names.</p>
        </Col>
      </Row>
      <br></br>
      <Row className="justify-content-md-center">        
        <Col md="auto">          
          
          <Link className='nav-link' to='/donate'>
          
            <Button variant="primary" size="lg">
              Donate to Support 
            </Button>
      
    
          </Link>
        </Col>
      </Row>
      
      
    </Container>
  );
};

export default About;
