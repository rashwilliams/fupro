import React, { Fragment, useEffect, useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import styles from "./Login.module.css";
import { useLoginUserMutation } from "../lib/apis/authApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [loginUser, { isLoading, isError, error, isSuccess, data }] =
    useLoginUserMutation();

  const { user } = useSelector((state) => state.userState);

  const onLoginUser = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      return;
    }

    return await loginUser({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/blogs");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (user) {
      navigate("/blogs");
    }
  }, [user]);

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

              {isError && (
                <div className="alert alert-danger text-center" role="alert">
                  {error?.data?.error || "Something went wrong"}
                </div>
              )}
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <Row>
          <Col></Col>
          <Col>
            <Container>
              <Form onSubmit={onLoginUser}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  placeholder="Enter Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <Form.Label>Password</Form.Label>
                <Form.Control
                  placeholder="Enter password"
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                />

                <div>
                  <Button type="submit"> Login </Button>{" "}
                </div>
              </Form>
            </Container>
          </Col>
          <Col></Col>
        </Row>
      </Fragment>
    </>
  );
};

export default Login;
