import React, { Fragment } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <>
      <Fragment>
        <Container className={styles.container6}>
          <div>
            <h1>Sign Up</h1>
          </div>
        </Container>

        <Row>
          <Col></Col>
          <Col>
            <Container>
              <Form.Label>First Name</Form.Label>
              <Form.Control />
              <Form.Label>Last Name</Form.Label>
              <Form.Control />
              <Form.Label>Email Address</Form.Label>
              <Form.Control />
              <Form.Label>Password</Form.Label>
              <Form.Control />
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </Form.Text>

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

export default Signup;
