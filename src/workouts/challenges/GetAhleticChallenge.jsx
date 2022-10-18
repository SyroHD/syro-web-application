import React from "react";

//Import CSS
import styles from "../../css/WeightLossChallenge.module.css";

const GetAthleticChallenge = () => {
  return (
    <div className={styles["wrapper"]}>
      <p className={styles["workout-information"]}>
        Our <span className={styles["bold"]}>Get Athletic Challenge</span> will
        help you to improve your athletic performance and feel fit overall. You
        will become faster, stronger & jump higher.
      </p>
      <div className={styles["videos-container"]}>
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
            10 Min Low Impact Plyometric Workout
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles["video-container"]}>
            <iframe
              className={styles["video"]}
              src="https://www.youtube.com/embed/4LZfEjfAkzQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p className={styles["video-title"]}>10 Min Vertical Jump Workout</p>
        </div>
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
          <p className={styles["video-title"]}>10 Min Leg Workout</p>
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
          <p className={styles["video-title"]}>9 Min Upper Body Workout</p>
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
          <p className={styles["video-title"]}>9 Min Ab Workout</p>
        </div>
        <div className={styles.card}>
          <div className={styles["video-container"]}>
            <iframe
              className={styles["video"]}
              src="https://www.youtube.com/embed/KUi73_ZLE4A"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p className={styles["video-title"]}>5 Min Balance Workout</p>
        </div>
      </div>
    </div>
  );
};

export default GetAthleticChallenge;
