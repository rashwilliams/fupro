import React, { useRef, useEffect } from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
import Typed from "typed.js";
import styles from "./Home.module.css";

const Home = () => {
  const typed = useRef(null);
  const el = useRef(null);

  useEffect(() => {
    const aboutUs = [
      "As we continue to challenge systems of oppression, it is important to remember to play. Often times, we suffer burn-out as advocates and as individuals where our lived realities are a mental and physical burden. Thus, to play is to address these mental and physical exhaustion. Play is a form of advocacy. As we continue our advocacy to dismantle systems of oppression and social injustice, we bring you a platform to play, learn, strategize, inform and heal. It is complementary to existing advocacy interventions, which by extension aims to increase community participation in advocacy. As we love to say, Welcome to Play, Welcome to Rights (Write).",
    ];
    const options = {
      strings: aboutUs,
      startDelay: 500,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
    };

    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <Container className={styles.container}>
      <Row>
        <Col lg={1}></Col>
        <Col lg={10}>
          {/* <Form.Control className="mt-5" placeholder="Search" /> */}

          <div className={styles.home}>
            <span ref={el} />
          </div>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>
  );
};

export default Home;
