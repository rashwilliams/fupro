import React from "react";
import { Card } from "react-bootstrap";
import styles from "../Blogs.module.css";

const BlogCategoryCard = (props) => {
  return (
    <Card className={styles.card1}>
      <Card.Body className={styles.card}>
        <Card.Title>{props.catetory}</Card.Title>

        <Card.Text>{props.description}</Card.Text>
        <Card.Link href={`/blogs/${props.catetory}`}>Read more</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default BlogCategoryCard;
