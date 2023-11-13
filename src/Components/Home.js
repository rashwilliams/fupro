import React from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col lg={1}></Col>
        <Col lg={10}>
          <Form.Control placeholder="Search" />
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>
  );
};

export default Home;
