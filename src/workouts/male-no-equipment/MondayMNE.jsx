import React, { Fragment } from "react";

//Import CSS
import styles from "../../css/WeekdayTemplate.module.css";

const MondayMNE = () => {
  return (
    <Fragment>
      <h3 className={styles["workout-information"]}>
        Today, we have a full body workout plan for you including exercises for
        all muscles. The plan includes everything from bodyweight back exercises
        to bodyweight leg exercises.
      </h3>
      <div className={styles["videos-container"]}>
        <div className={styles.card}>
          <div className={styles["video-container"]}>
            <iframe
              className={styles["video"]}
              src="https://www.youtube.com/embed/QRY3zbW7dhw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h3 className={styles["video-title"]}>10 Min Leg Workout For Men</h3>
        </div>
        <div className={styles.card}>
          <div className={styles["video-container"]}>
            <iframe
              className={styles["video"]}
              src="https://www.youtube.com/embed/6_NbY4n86Q4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h3 className={styles["video-title"]}>
            10 Min Full Upper Body Workout
          </h3>
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
            6 Min Back Workout (Mainly Lower Back)
          </h3>
        </div>
        <div className={styles.card}>
          <div className={styles["video-container"]}>
            <iframe
              className={styles["video"]}
              src="https://www.youtube.com/embed/s6SRe-VKe1w"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h3 className={styles["video-title"]}>6 Min Ab Workout</h3>
        </div>
      </div>
    </Fragment>
  );
};

export default MondayMNE;
