import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Fragment } from "react";
import Rashidi from "../Assets/Images/Rashidi.jpeg";
import Alaafin from "../Assets/Images/Alaafin.jpeg";
import Wisdom from "../Assets/Images/Wisdom.jpeg";
import styles from "./Aboutus.module.css";

const Aboutus = () => {
  return (
    <Fragment>
      <Container className={styles.container} fluid>
        <Col>
          <div>
            <p className={styles.ptext1}>History</p>
            <h4>
              Conceptualized from an informal gathering of minority men, tired
              of the one-way approach and community fixation on health as the
              de-facto entry point into political, social and economic advocacy
              processes.These informal gatherings allowed us to reflect on what
              we want as a people and not necessarily as organizations. The
              resouding theme for us was the need to have a space where learning
              and play was synced. Thus, Play and Write disrupts traditional
              advocacy processes using community gatherings and informal
              writings to speak to issues of discrimination, vulnerability and
              marginalization.
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

      <Container className={styles.container3} fluid>
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
                Play is important. As a community battered by exclusion, avenues
                to play can be a response for healing and affirmation. Through
                Play, we bring together our community to socialize, learn,
                inform and heal.We believe bringing our community together to
                play is part of reclaiming spaces. The annual West African Queer
                Camp is our flagship play event. Also in the pipeline is the
                annual activits-community dialogue spaces, where activists
                listen to community perspectives and use these opinions to
                design and inform their interventions.
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
                principles. Our writings are not focused on a particular theme
                but extends to loads of genres, that help to put our voices in
                the social, political, cultural, religious, intellectual and
                economic spaces.
              </h4>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className={styles.container2} fluid>
        <div>
          <h1 className={styles.ptext4}>People</h1>
        </div>
        <Row>
          <Col className={styles.col1}>
            <img src={Rashidi} className={styles.Rashidi}></img>
            <h4>
              William Rashidi led the conceptualization of Play and Write,
              inviting other co-founders to share in the conceptualization and
              catapult the initiative into life.Recently, Rashidi loves the
              statement "the fraud that is called William Rashidi", where he was
              accused of diverting community resources to his personal gains but
              where the results shows his committment to building a vibrant
              community in Delta State in the last 12years. Rashidi is the
              founding director of Equality Triangle.
            </h4>
          </Col>

          <Col className={styles.col2}>
            <img src={Alaafin} className={styles.Alaafin}></img>
            <h4>
              Ademilola Adenuga Olowu popularly known as Alaafinofeko is a
              social gatherer, erotic writer, journalist, film maker, screen
              writer and Animator whose work speaks to the positivity of sexual
              pleasure for minority men. As an Animator, he teaches young people
              Animation as part of efforts to skills building..
            </h4>
          </Col>

          <Col className={styles.col2}>
            <img src={Wisdom} className={styles.Wisdom}></img>
            <h4>
              Enwukwe Maruoko Wisdom is a mathematician by profession, whose
              passion and love for writing has driven him to pursue a career in
              the literary realm. His interest in conversations combined with
              his analytical skill inspired the birth of the series "Daring The
              Unquestionable gods". A social space that fosters open dialogues
              on topics often overlooked; ranging from arts/entertainment to
              socio-political, providing a platform for expressive discourse,
              heightened visibility and societal accountability.
            </h4>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Aboutus;
