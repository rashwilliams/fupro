import { Container } from "react-bootstrap";
import Home from "../Components/Home";
import Foooter from "../Components/Foooter";
import styles from "../Components/Home.module.css";

const HomePage = () => {
  return (
    <Container className={styles.homebody} fluid>
      <Home />
      <Foooter />
    </Container>
  );
};

export default HomePage;
