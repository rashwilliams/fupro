import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Fragment } from "react";
import myImg from "../Assets/Images/myImg.png";
import styles from "./Aboutus.module.css";

const Aboutus = () => {
  return (
    <Fragment>
      <Container className={styles.container}>
        <Col>
          <div>
            <p className={styles.ptext1}>History</p>
            <h4>
              Play and Write disrupts traditional advocacy processes using
              community gatherings and informal writings to speak to issues of
              discrimination, vulnerability and marginalization. It was
              conceptualized from an informal gathering of minority men, tired
              of the one-way approach and community fixation on health as the
              de-facto entry point into political, social and economic advocacy
              processes.
            </h4>
          </div>
        </Col>

        <Col>
          <div>
            <p className={styles.ptext2}>Mission</p>
            <h4>
              Play and Write works to support advoccay efforts using
              non-traditional approaches of citizens journalism and social
              gatherings.
            </h4>
          </div>
        </Col>

        <Col>
          <div>
            <p className={styles.ptext3}>Vision</p>
            <h4>
              Play and Write envisions a democracy and democratic society that
              works for all persons regardless of socioeconomic status.
            </h4>
          </div>
        </Col>
      </Container>

      <Container className={styles.container2}>
        <div>
          <h1 className={styles.ptext4}>Founders</h1>
        </div>
        <Row>
          <Col className={styles.col1}>
            <h4>
              William Rashidi led the conceptualization of Play and Write,
              inviting other co-founders to share in the conceptualization and
              catapult the initiative into life.
            </h4>
          </Col>

          <Col className={styles.col2}>
            <h4>
              Ademilola Oluwo led the conceptualization of Play and Write,
              inviting other co-founders to share in the conceptualization and
              catapult the initiative into life.
            </h4>
          </Col>
        </Row>
      </Container>

      <Container className={styles.container3}>
        <div>
          <h1 className={styles.ptext5}>Focus</h1>
        </div>
        <Row>
          <Col className={styles.col3}>
            <div>
              <div>
                <h2 classname={styles.ptext6}>Play</h2>
              </div>
              <h4>
                Even as adults, play is important. Through Play, we bring
                together our community to socialize, learn, inform and heal. Our
                Play portofolio includes the annual West African Queer Camp.
              </h4>
            </div>
          </Col>

          <Col className={styles.col4}>
            <div>
              <div>
                <h2 classname={styles.ptext7}>Write</h2>
              </div>
              <h4>
                Through Writing we counter negative narratives that fosters
                stigma, discrimination and exclusion. Using community
                journalism, we inform and contribute to Nigeria's evolving
                democracy to become inclusive and centered on human rights
                principles.
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Aboutus;
