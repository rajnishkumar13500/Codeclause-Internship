
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



function ResumeNew() {
  

  return (
    <div>
      <Container fluid className="resume-section">
      
        <Particle />
       
        
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download RESUME
          </Button>
          
        </Row>
        <br></br>
        <Row>
        
        <iframe src="https://drive.google.com/file/d/1PFdS1-JQiVIGYw_QDRP6y1_MjniDQQDj/preview" width="480" height="660" allow="autoplay"></iframe>

        <br></br>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
