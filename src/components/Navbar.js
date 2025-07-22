import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const location = useLocation();
  // Hide navbar on landing, login, and signup pages
  const hideOnPaths = ["/", "/login", "/signup"];
  if (hideOnPaths.includes(location.pathname)) return null;
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img
          src="/7staricon.png"
          alt="7 Star Logo"
          className={styles["navbar-logo"]}
        />
        7 Star Interior
      </div>
      <div className={styles["navbar-links"]}>
        <Link to="/about" className={styles.link}>About</Link>
        <Link to="/terms" className={styles.link}>Terms</Link>
        <Link to="/contact" className={styles.link}>Contact</Link>
      </div>
      <button className={styles.logout}>Logout</button>
    </nav>
  );
};
export default Navbar;