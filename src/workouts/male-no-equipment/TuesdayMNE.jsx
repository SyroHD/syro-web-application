import React, { Fragment } from "react";

//Import CSS
import styles from "../../css/WeekdayTemplate.module.css";

const TuesdayMNE = () => {
  return (
    <Fragment>
      <h3 className={styles["workout-information"]}>
        Today is your HIIT Cardio workout day. Try to choose 1 to 3 HIIT
        workouts and do them (do as you feel). These HIIT workouts will help you
        to get fit/athletic and burn fat/lose weight!
      </h3>
      <div className={styles["videos-container"]}>
        <div className={styles.card}>
          <div className={styles["video-container"]}>
            <iframe
              className={styles["video"]}
              src="https://www.youtube.com/embed/vhh7dZvcVF0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h3 className={styles["video-title"]}>
            30 Min Plyometric HIIT Workout
          </h3>
        </div>
        <div className={styles.card}>
          <div className={styles["video-container"]}>
            <iframe
              className={styles["video"]}
              src="https://www.youtube.com/embed/m_32tQUF2LI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h3 className={styles["video-title"]}>
            10 Min Low Impact HIIT Workout
          </h3>
        </div>
        <div className={styles.card}>
          <div className={styles["video-container"]}>
            <iframe
              className={styles["video"]}
              src="https://www.youtube.com/embed/Jv49X85cb8Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h3 className={styles["video-title"]}>
            4 Min HIIT Workout Challenge
          </h3>
        </div>
        <div className={styles.card}>
          <div className={styles["video-container"]}>
            <iframe
              className={styles["video"]}
              src="https://www.youtube.com/embed/FvlDHgzyFjc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h3 className={styles["video-title"]}>
            10 Min Low Impact Plyometric HIIT Workout
          </h3>
        </div>
      </div>
    </Fragment>
  );
};

export default TuesdayMNE;
