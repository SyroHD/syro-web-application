import React from "react";

//Import CSS
import styles from "../../css/WeightLossChallenge.module.css";

const WeightLossChallenge = () => {
  return (
    <div className={styles["wrapper"]}>
      <p className={styles["workout-information"]}>
        Our <span className={styles["bold"]}>Weight Loss Challenge</span> will
        help you to burn fat and lose weight in a short amount of time. Choose 1
        to 3 HIIT cardio workouts and do them at least 3 to 5 times a week.
      </p>
      <div className={styles["videos-container"]}>
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
          <p className={styles["video-title"]}>30 Day HIIT Challenge</p>
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
          <p className={styles["video-title"]}>
            10 Min Low Impact Plyometric HIIT
          </p>
        </div>
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
          <p className={styles["video-title"]}>30 Min Plyometric HIIT</p>
        </div>
        <div className={styles.card}>
          <div className={styles["video-container"]}>
            <iframe
              className={styles["video"]}
              src="https://www.youtube.com/embed/1-yNbfBzFqE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p className={styles["video-title"]}>8 Min HIIT Workout</p>
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
          <p className={styles["video-title"]}>10 Min HIIT Workout</p>
        </div>
        <div className={styles.card}>
          <div className={styles["video-container"]}>
            <iframe
              className={styles["video"]}
              src="https://www.youtube.com/embed/FzTsC-wuUig"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p className={styles["video-title"]}>10 Min HIIT Jump Rope Workout</p>
        </div>
      </div>
    </div>
  );
};

export default WeightLossChallenge;
