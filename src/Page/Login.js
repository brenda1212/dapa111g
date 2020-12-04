import React from "react";
//import { Container } from "reactstrap";
import { Container, Form, Button ,Row} from "reactstrap";

function Login() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <div className="card">
          <Form className="text-center border border-center p-4">
            <p className="h4 mb-4">Bienvenido</p>

            <p>
              Join our mailing list. We write rarely, but only with the best
              content.
            </p>

            <input
              type="text"
              id="defaultSubscriptionFormPassword"
              className="form-control mb-4"
              placeholder="Name"
            />

            <input
              type="email"
              id="defaultSubscriptionFormEmail"
              className="form-control mb-4"
              placeholder="E-mail"
            />

            <Button mdbBtn color="info" block="true" type="submit">
              Sign in
            </Button>
          </Form>
        </div>
      </Row>
    </Container>
  );
}
export default Login;
