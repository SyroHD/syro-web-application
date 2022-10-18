import React, { Fragment } from "react";

//Import CSS
import styles from "../../css/WeekdayTemplate.module.css";

const WednesdayFD = () => {
  return (
    <Fragment>
      <h3 className={styles["workout-information"]}>
        Today, we have a full body workout plan for you including exercises for
        all muscles. We have everything from dumbbell shoulder exercises to
        dumbbell leg workouts.
      </h3>
      <div className={styles["videos-container"]}>
        <div className={styles.card}>
          <div className={styles["video-container"]}>
            <iframe
              className={styles["video"]}
              src="https://www.youtube.com/embed/8Sr9ejYRETU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h3 className={styles["video-title"]}>10 Min Dumbbell Leg Workout</h3>
        </div>
        <div className={styles.card}>
          <div className={styles["video-container"]}>
            <iframe
              className={styles["video"]}
              src="https://www.youtube.com/embed/YoB05TMieBk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h3 className={styles["video-title"]}>5 Min Glute Workout</h3>
        </div>
        <div className={styles.card}>
          <div className={styles["video-container"]}>
            <iframe
              className={styles["video"]}
              src="https://www.youtube.com/embed/pl7vzT5Pv2k"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h3 className={styles["video-title"]}>20 Min Upper Body Workout</h3>
        </div>
        <div className={styles.card}>
          <div className={styles["video-container"]}>
            <iframe
              className={styles["video"]}
              src="https://www.youtube.com/embed/9LiAcaa2_2k"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h3 className={styles["video-title"]}>
            6 Min Bodyweight Back Exercises (Mainly Lower Back)
          </h3>
        </div>
        <div className={styles.card}>
          <div className={styles["video-container"]}>
            <iframe
              className={styles["video"]}
              src="https://www.youtube.com/embed/ZQ5-R4ukgZA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h3 className={styles["video-title"]}>9 Min Ab Workout</h3>
        </div>
      </div>
    </Fragment>
  );
};

export default WednesdayFD;
