import { Container } from "react-bootstrap";
import Home from "../Components/Home.js";
import styles from "../Components/Home.module.css";

const HomePage = () => {
  return (
    <Container className={styles.homebody} fluid>
      <Home />
    </Container>
  );
};

export default HomePage;
