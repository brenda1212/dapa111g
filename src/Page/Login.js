import React from "react";
//import { Container } from "reactstrap";
import { Container, Form, Button ,Card,Input} from "reactstrap";

function Login() {
  return (
    <Container>
      <form>
      <Card className="text-center border border-center p-2 card  col-lg-6 ">
        <Form>
          <p className="h4 mb-4">Bienvenido</p>

          <p>inicia sesión o crea tu cuenta.</p>

          <Input
            type="text"
            id="defaultSubscriptionFormPassword"
            className="form-control mb-4"
            placeholder="Name"
          />

          <Input
            type="email"
            id="defaultSubscriptionFormEmail"
            className="form-control mb-4"
            placeholder="E-mail"
          />
          <Button mdbBtn color="info" block="true" type="submit">
            Iniciar sesión
          </Button>
        </Form>
      </Card></form>
    </Container>
  );
}
export default Login;
