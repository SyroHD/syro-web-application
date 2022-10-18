import React, { Fragment } from "react";

//Import CSS
import styles from "../../css/WeekdayTemplate.module.css";

const SundayMNE = () => {
  return (
    <Fragment>
      <h3 className={styles["workout-information"]}>
        Today is your <span className={styles["bold"]}>rest day!</span> If you
        feel like doing something, you can do our core workouts including the
        best core exercises(ab exercises & lower back exercises).
      </h3>
      <div className={styles["videos-container"]}>
        <div className={styles.card}>
          <div className={styles["video-container"]}>
            <iframe
              className={styles["video"]}
              src="https://www.youtube.com/embed/NQ7lP3k80Tg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h3 className={styles["video-title"]}>7 Min Ab Workout</h3>
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

export default SundayMNE;
