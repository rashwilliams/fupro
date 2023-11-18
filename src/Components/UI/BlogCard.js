import React from "react";
import { Card, Col } from "react-bootstrap";
import styles from "./BlogCard.module.css";

const BlogCard = (props) => {
  return (
    <Col>
      <Card className={styles.card}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogCard;
