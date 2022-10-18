//Import Components

//Import Images
import nadineSM from "../images/nadineSM.jpg";
import nadineXL from "../images/nadineXL.jpg";
import pascalSM from "../images/pascalSM.jpg";
import pascalXL from "../images/pascalXL.jpg";

//Import CSS
import styles from "../css/AboutUs.module.css";

const AboutUs = () => {
  return (
    <div>
      <div className={styles["about-us"]}>
        <div className={styles["section-one"]}>
          <h2 className={styles["about-us-header"]}>About Us</h2>
          <p className={styles["about-us-information"]}>
            Welcome to our at home workout page. We love doing sports. Therefore
            we both also do our Master of Science in Sports. We provide some
            free full body workout plans that include exercises and difficulties
            for everyone. We try to include as much scientific data when
            creating our workouts and would love to help you achieve your goals
            as fast as possible!
          </p>
        </div>
        <div className={styles["profile-wrapper"]}>
          <div className={styles["profile"]}>
            <div className={styles["profile-box"]}>
              <picture>
                <source media="(min-width: 800px)" srcSet={nadineXL} />
                <img
                  className={styles["profile-picture"]}
                  src={nadineSM}
                  alt="profile of Nadine from the workout channel Syro Workout"
                />
              </picture>
            </div>
            <div className={styles["content"]}>
              <h2 className={styles["content-header"]}>Nadine</h2>
              <p className={styles["content-description"]}>
                Sports Scientist - Loves Kickboxing
              </p>
            </div>
          </div>
          <div className={styles["profile"]}>
            <div className={styles["profile-box"]}>
              <picture>
                <source media="(min-width: 800px)" srcSet={pascalXL} />
                <img
                  className={styles["profile-picture"]}
                  src={pascalSM}
                  alt="profile of Nadine from the workout channel Syro Workout"
                />
              </picture>
            </div>
            <div className={styles["content"]}>
              <h2 className={styles["content-header"]}>Pascal</h2>
              <p className={styles["content-description"]}>
                Sports Scientist - Loves Sprint
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
