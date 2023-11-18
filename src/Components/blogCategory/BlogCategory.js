import React, { Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import BlogCard from "../UI/BlogCard";
import styles from "./BlogCategory.module.css";

const BlogCategory = () => {
  return (
    <Container>
      <Row>
        <BlogCard title="Tinubu removed fuel subsidy" />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Row>
    </Container>
  );
};

export default BlogCategory;
