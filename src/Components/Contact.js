import React from "react";
import { Fragment } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import styles from "./Contact.module.css";

const Signup = () => {
  return (
    <>
      <Fragment>
        <Container className={styles.container4}>
          <div>
            <h1>Share With Us</h1>
          </div>
        </Container>

        <Container className={styles.container}>
          <Row>
            <Col></Col>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control />
              <Form.Label>Last Name</Form.Label>
              <Form.Control />
              <Form.Label>Email Address</Form.Label>
              <Form.Control />
              <Form.Label>Phone Number</Form.Label>
              <Form.Control />
              <Form.Text height="100">Your message</Form.Text>
              <Form.Control />
              <div className={styles.button}>
                <Button as="input" type="submit" value="Submit" />{" "}
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Fragment>
    </>
  );
};

export default Signup;
