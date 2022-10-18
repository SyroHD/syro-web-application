import React, { Fragment } from "react";
import { NavHashLink as HashLink } from "react-router-hash-link";

//Import Images
import logo from "../images/logosmall.svg";
import home from "../images/home.svg";
import workout from "../images/workout.svg";
import challenges from "../images/challenges.svg";
import aboutus from "../images/aboutus.svg";

//Import CSS
import styles from "../css/Navbar.module.css";

const Navbar = () => {
  return (
    <Fragment>
      <div className={`${styles.desktop}`}>
        <div
          className={`fixed-top d-flex justify-content-between align-items-center py-4`}
        >
          <div className="ps-5">
            <HashLink to="#home">
              <img src={logo} alt="Syro Workout Logo" className={styles.logo} />
            </HashLink>
          </div>
          <ul className={styles.navigation}>
            <li>
              <HashLink
                to="#home"
                className={styles["navigation-item"]}
                activeClassName={styles["navigation-item-active"]}
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                to="#workout"
                className={styles["navigation-item"]}
                activeClassName={styles["navigation-item-active"]}
              >
                Workouts
              </HashLink>
            </li>
            <li>
              <HashLink
                to="#challenges"
                className={styles["navigation-item"]}
                activeClassName={styles["navigation-item-active"]}
              >
                Challenges
              </HashLink>
            </li>
            <li className="pe-5">
              <HashLink
                to="#about-us"
                className={styles["navigation-item"]}
                activeClassName={styles["navigation-item-active"]}
              >
                About Us
              </HashLink>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.mobile}>
        <div className="fixed-top">
          <ul
            className={`d-flex justify-content-between align-items-center py-4 ${styles["mobile-navigation"]}`}
          >
            <li className={`ps-5 styles["nav-element"]`}>
              <HashLink
                to="#home"
                className={styles["navigation-item-mobile"]}
                activeClassName={styles["navigation-mobile-active"]}
              >
                <img
                  src={home}
                  alt="Home Icon"
                  className={` ${styles["mobile-icon"]}`}
                />
                Home
              </HashLink>
            </li>
            <li className={styles["nav-element"]}>
              <HashLink
                to="#workout"
                className={styles["navigation-item-mobile"]}
                activeClassName={styles["navigation-mobile-active"]}
              >
                <img
                  src={workout}
                  alt="Home Icon"
                  className={styles["mobile-icon"]}
                />
                Workouts
              </HashLink>
            </li>
            <li className={styles["nav-element"]}>
              <HashLink
                to="#challenges"
                className={styles["navigation-item-mobile"]}
                activeClassName={styles["navigation-mobile-active"]}
              >
                <img
                  src={challenges}
                  alt="Home Icon"
                  className={styles["mobile-icon"]}
                />
                Challenges
              </HashLink>
            </li>
            <li className={`pe-5 styles["nav-element"]`}>
              <HashLink
                to="#about-us"
                className={styles["navigation-item-mobile"]}
                activeClassName={styles["navigation-mobile-active"]}
              >
                <img
                  src={aboutus}
                  alt="Home Icon"
                  className={styles["mobile-icon"]}
                />
                About Us
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
