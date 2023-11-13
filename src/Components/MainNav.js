import React from "react";
import { Navbar, Container } from "react-bootstrap";
import styles from "./MainNav.module.css";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <Navbar className={styles.container}>
      <Container>
        <Navbar.Brand>Play & Write</Navbar.Brand>
        <Navbar.Toggle />
        <NavLink to="/Home" className={styles.home}>
          Home
        </NavLink>
        <NavLink to="/About-Us" className={styles.Aboutus}>
          About Us
        </NavLink>
        <NavLink to="/Contact" className={styles.contact}>
          Contact
        </NavLink>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className={styles.spaces}>
            <NavLink to="/login">Log-in</NavLink>
          </Navbar.Text>
          <Navbar.Text className={styles.spaces}>
            <NavLink to="/sign-up">Sign-up</NavLink>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
