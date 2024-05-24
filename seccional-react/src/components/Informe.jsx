import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  CardBody,
} from "react-bootstrap";

function Informe() {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>
          <Card.Title>Informe de comportamiento laboral</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Complete los cuadros con la información correspondiente del servicio
          </Card.Subtitle>
        </Card.Header>
        <CardBody>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="observaciones">
                Observaciones especiales:
              </Form.Label>
              <Form.Control
                as="textarea"
                id="observaciones"
                rows={5}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Informe;
