import React, { Fragment } from "react";
import { Card, Container } from "react-bootstrap";
import styles from "./Blogs.module.css";

const blogCategories = [
  {
    id: "djffjkg",
    catetory: "Politics",
    description: "this is all about politics",
  },
  {
    id: "djffje",
    catetory: "Entertainments",
    description: "this is all about entertainment",
  },
  {
    id: "djffjkggsgsg",
    catetory: "Travel",
    description: "this is all about travel and networking",
  },
  {
    id: "djffjkgbnvgh",
    catetory: "Health and Lifestyle",
    description: "this is all about health living",
  },
];

const Blogs = () => {
  return (
    <Fragment>
      <Container className={styles.container}>
        {blogCategories.map((cat) => {
          return (
            <Card className={styles.card1}>
              <Card.Body className={styles.card}>
                <Card.Title>{cat.catetory}</Card.Title>

                <Card.Text>{cat.description}</Card.Text>
                <Card.Link href={`/blogs/${cat.catetory}`}>Read more</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </Fragment>
  );
};

export default Blogs;
