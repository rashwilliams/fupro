import React, { useEffect } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import styles from "./MainNav.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetCurrentUserMutation } from "../lib/apis/userApi";
import { useLogoutUserMutation } from "../lib/apis/authApi";

const MainNav = () => {
  const [getCurrentUser, { data }] = useGetCurrentUserMutation();
  const [logoutUser] = useLogoutUserMutation();

  const { user } = useSelector((state) => state.userState);

  useEffect(() => {
    const getCurrentUserData = async () => {
      await getCurrentUser();
    };

    getCurrentUserData();
  }, [user, getCurrentUser]);

  const onLogoutUser = () => {
    logoutUser();
  };

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
            {!user && (
              <NavLink className="btn btn-primary" to="/login">
                Log-in
              </NavLink>
            )}
          </Navbar.Text>
          <Navbar.Text className={styles.spaces}>
            {!user && (
              <NavLink className="btn btn-primary" to="/sign-up">
                Sign-up
              </NavLink>
            )}

            {user && (
              <NavLink
                className="btn btn-primary"
                to="/sign-up"
                onClick={onLogoutUser}
              >
                Logout
              </NavLink>
            )}
            {/* <Button bsStyle="primary">Sign-Up</Button> */}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
