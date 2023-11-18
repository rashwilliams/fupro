import React, { Fragment } from "react";
import { Card, Container } from "react-bootstrap";
import BlogCategoryCard from "./UI/BlogCategoryCard";
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
            <BlogCategoryCard
              catetory={cat.catetory}
              description={cat.description}
            />
          );
        })}
      </Container>
    </Fragment>
  );
};

export default Blogs;
