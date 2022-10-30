
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {  Link } from 'react-router-dom';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';


const Home = () => {
  

  return (
    <Container  >
      <Row className='justify-content-md-center'>
      <Col md="auto">          
        <h1> Covid 19 Help-Desk</h1> 
              
        </Col>
        
      </Row>   
      <br></br> 

      <Row md={2}>
        <img src = {img1} alt="Logo" style={{height : '100%'}}/>
        <img src = {img2} alt="Logo" style={{height : '100%'}}/>
        </Row>      
   
      <br></br>
      <Row className="justify-content-md-center">        
        <Col md="auto">          
          <h2> Covid 19 </h2> 
          <br></br>
          <p> 
          The COVID-19 pandemic in India is a part of the worldwide pandemic of coronavirus disease 2019 (COVID-19) caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). As of 24 October 2022, according to Indian government figures, India has the second-highest number of confirmed cases in the world (after the United States of America) with 44,642,742[4] reported cases of COVID-19 infection and the third-highest number of COVID-19 deaths (after the United States and Brazil) at 528,961[4] deaths.[6][7] In May 2022, the World Health Organization estimated 4.7 million excess deaths, both directly and indirectly related to COVID-19 to have taken place in India.[8][9]

The first cases of COVID-19 in India were reported on 30 January 2020 in three towns of Kerala, among three Indian medical students who had returned from Wuhan, the epicenter of the pandemic.[10][11][12] Lockdowns were announced in Kerala on 23 March, and in the rest of the country on 25 March. Infection rates started to drop in September.[13] Daily cases peaked mid-September with over 90,000 cases reported per-day, dropping to below 15,000 in January 2021.[14] A second wave beginning in March 2021 was much more devastating than the first, with shortages of vaccines, hospital beds, oxygen cylinders and other medical supplies in parts of the country.[14] By late April, India led the world in new and active cases. On 30 April 2021, it became the first country to report over 400,000 new cases in a 24-hour period.[15][6] Experts stated that the virus may reach an endemic stage in India rather than completely disappear;[16] in late August 2021, Soumya Swaminathan said India may be in some stage of endemicity where the country learns to live with the virus.[17] By 23 December 2021, India had 78,190 active cases which was lowest in 573 days.[18] This number fell to 21,530 in March 2022.[19]

India began its vaccination programme on 16 January 2021 with AstraZeneca vaccine (Covishield) and the indigenous Covaxin.[20][21] Later, Sputnik V and the Moderna vaccine was approved for emergency use too.[22] On January 30, 2022, India announced that it administered about 1.7 billion doses of vaccines and more than 720 million people were fully vaccinated.[23]
            </p> 
          
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
          <br></br>
        </Col>
      </Row>
      
      
    </Container>
  );
};

export default Home;
