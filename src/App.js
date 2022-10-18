import "./App.css";

import React, { useRef, useState } from "react";

//Component Import
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import SeperateComponent from "./components/SeperateComponent";

//Page Import
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Challenges from "./pages/Challenges";
import AboutUs from "./pages/AboutUs";

//Import Background
import BackgroundWrapper from "./components/BackgroundWrapper";

//Import CSS Styles
import styles from "./css/App.module.css";

function App() {
  //Scroll Effect
  const progressBar = useRef();
  const [progress, setProgress] = useState();
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function () {
    setProgress((window.scrollY / totalHeight) * 100);
  };

  //Mouse Effect

  return (
    <BackgroundWrapper>
      <div>
        <div
          id={styles["progress-bar"]}
          ref={progressBar}
          style={{ height: `${progress}%` }}
        ></div>
        <div id={styles["scroll-path"]}></div>
        <div id={styles.percent}></div>
        <Navbar />
        <div className={styles["scroll-area"]} id="home">
          <Home />
        </div>
        <SeperateComponent />
        <div className={styles["scroll-area"]} id="workout">
          <Workouts />
        </div>
        <SeperateComponent />{" "}
        <div className={styles["scroll-area"]} id="challenges">
          <Challenges />
        </div>
        <SeperateComponent />
        <div className={styles["scroll-area"]} id="about-us">
          <AboutUs />
        </div>
        <Socials />
      </div>
    </BackgroundWrapper>
  );
}

export default App;
