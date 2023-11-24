import { Fragment } from "react";
import React from "react";
import { Footer } from "flowbite-react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ETILogo from "../Assets/Images/ETILogo.png";
import styles from "./Foooter.module.css";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const Foooter = () => {
  return (
    <Fragment>
      <Container className={`${styles.footer}`} fluid>
        <Row>
          <Col lg={3}>
            <h4 className={styles.logo}>Logo</h4>
            <img src={ETILogo} width="100px" />
          </Col>
          <Col lg={3}>
            <div>
              <h4 className={styles.contact}> Contact </h4>
              <p> +234 8095191019 </p>
              <p>info@playwrite.org</p>
            </div>
          </Col>
          <Col lg={3}>
            <h4 className={styles.mailinglist}>Join our Mailing List</h4>
            <Form.Control
              className={styles.formcontrol}
              placeholder="Email Address"
            />
            <div>
              <Button as="input" type="submit" value="Submit" />{" "}
            </div>
          </Col>

          <Col lg={3}>
            <h4 className={styles.socialmedia}>Follow on Social Media</h4>
            <div>
              <a
                className={styles.sm1}
                target="blank"
                href="https://www.facebook.com/EqualitytriangleInitiative"
              >
                <i class="fab fa-facebook"></i>
              </a>
              <a
                className={styles.sm2}
                target="blank"
                href="https://www.twitter.com/ETI_Warri"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                className={styles.sm3}
                target="blank"
                href="https://www.instagram.com/equalitytriangleinitiative/"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <section className={styles.section}>
        <p className={styles.section1}>©2023 Play & Write</p>
        <a className={styles.section2} href="Disclaimer">
          {" "}
          Disclaimer{" "}
        </a>{" "}
        |{" "}
        <a className={styles.section3} href="Privacy Statement">
          {" "}
          Privacy Statement{" "}
        </a>{" "}
        |{" "}
        <a className={styles.section4} href="Cookies Policy">
          {" "}
          Cookies Policy{" "}
        </a>
        |{" "}
        <a className={styles.section5} href="Compliance">
          {" "}
          Compliance
        </a>
      </section>
    </Fragment>
  );
};

export default Foooter;
