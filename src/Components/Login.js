import React, { Fragment } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <>
      <Fragment>
        <Container className={styles.container6}>
          <Row>
            <Col></Col>
            <Col>
              <Button className={styles.button2} variant="secondary" size="lg">
                Log In
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <Row>
          <Col></Col>
          <Col>
            <Container>
              <Form.Label>Email Address</Form.Label>
              <Form.Control />
              <Form.Label>Password</Form.Label>
              <Form.Control />

              <div>
                <Button as="input" type="submit" value="Submit" />{" "}
              </div>
            </Container>
          </Col>
          <Col></Col>
        </Row>
      </Fragment>
    </>
  );
};

export default Login;
