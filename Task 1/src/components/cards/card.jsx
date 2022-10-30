import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function PaymentCard()
 {
  return (
   
    <Card className="text-center">
      <Card.Header>Payment Gateway</Card.Header>
      <Card.Body>
        <Card.Title>Donation to Covid Helpdesk</Card.Title>
        <Card.Text>
          Every Donation is valuable, Donate with Open Heart
        </Card.Text>
        <Button href = "https://buy.stripe.com/test_28oeWg2cLciN2ModQQ" variant="primary">Donate</Button>
      </Card.Body>
      <Card.Footer className="text-muted">stay safe</Card.Footer>
    </Card>
  );
}

export default PaymentCard ;