import React, { Fragment, useState, useEffect } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import styles from "./Signup.module.css";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../lib/apis/authApi";
import { useSelector } from "react-redux";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [generalError, setGeneralError] = useState("");

  const navigate = useNavigate();

  const [registerUser, response] = useRegisterUserMutation();
  const { user } = useSelector((state) => state.userState);

  const onCreateNewUser = async (event) => {
    event.preventDefault();

    if (!email || !username || !password) {
      return setGeneralError("All input fields are required");
    }

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email.match(regex)) {
      return setGeneralError("Invalid email address");
    }

    const regData = {
      email,
      username,
      password,
    };

    setGeneralError("");
    await registerUser(regData);
  };

  const { isLoading, isError, error, isSuccess, data } = response;

  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
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
        <Container className={styles.container}>
          <Row>
            <Col></Col>
            <Col>
              {/* <div>
                <h1>Sign Up</h1>
              </div> */}
              <Button className={styles.button2} variant="secondary" size="lg">
                Sign Up
              </Button>

              {isError && (
                <div className="alert alert-danger text-center" role="alert">
                  {error?.data?.error || "Something went wrong"}
                </div>
              )}
              {generalError && (
                <div className="alert alert-danger text-center" role="alert">
                  {generalError}
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
              <Form onSubmit={onCreateNewUser}>
                <Form.Label>username</Form.Label>
                <Form.Control
                  placeholder="Enter Username"
                  onChange={(event) => setUsername(event.target.value)}
                />
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  placeholder="Enter Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <Form.Label>Password</Form.Label>
                <Form.Control
                  placeholder="Enter Password"
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                />

                <div>
                  <Button type="submit">
                    {" "}
                    {isLoading ? "Loading..." : "Sign up"}{" "}
                  </Button>
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

export default Signup;
