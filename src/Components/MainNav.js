import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import styles from "./MainNav.module.css";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <Navbar className={`${styles.container} fixed-top`}>
      <Container>
        <Navbar.Brand>Play & Write</Navbar.Brand>
        <Navbar.Toggle />
        <NavLink to="/Home" className={styles.home}>
          Home
        </NavLink>
        <NavLink to="/About-Us" className={styles.Aboutus}>
          About Us
        </NavLink>
        <NavLink to="/Blogs" className={styles.Blogs}>
          Blogs
        </NavLink>
        <NavLink to="/Vblogs" className={styles.vblogs}>
          Vblogs
        </NavLink>
        <NavLink to="/Contact" className={styles.contact}>
          Contact
        </NavLink>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className={styles.spaces}>
            <NavLink className="btn btn-primary" to="/login">
              Log-in
            </NavLink>
            {/* <Button bsStyle="primary">Log-In</Button> */}
          </Navbar.Text>
          <Navbar.Text className={styles.spaces}>
            <NavLink className="btn btn-primary" to="/sign-up">
              Sign-up
            </NavLink>
            {/* <Button bsStyle="primary">Sign-Up</Button> */}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
