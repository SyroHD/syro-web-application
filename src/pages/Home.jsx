import shoesXL from "../images/shoesXL.png";
import shoesMD from "../images/shoesMD.png";
import plateXL from "../images/plateXL.png";
import plateMD from "../images/plateMD.png";
import plateSM from "../images/plateSM.png";
import watchXL from "../images/watchXL.png";
import watchMD from "../images/watchMD.png";
import kettlebellXL from "../images/kettlebellXL.png";
import kettlebellMD from "../images/kettlebellMD.png";
import dbOneXL from "../images/db-oneXL.png";
import dbOneMD from "../images/db-oneMD.png";
import dbOneSM from "../images/db-oneSM.png";
import flascheXL from "../images/flascheXL.png";
import flascheMD from "../images/flascheMD.png";
import flascheSM from "../images/flascheSM.png";

//Import CSS
import styles from "../css/Home.module.css";

//Import Library
import { NavHashLink as HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["equipment"]}>
        <picture>
          <source media="(min-width: 800px)" srcSet={flascheXL} />
          <source media="(min-width: 400px)" srcSet={flascheMD} />
          <img
            className={styles["flasche"]}
            src={flascheSM}
            alt="fitness weight plate"
          />
        </picture>
        <picture>
          <source media="(min-width: 800px)" srcSet={plateXL} />
          <source media="(min-width: 400px)" srcSet={plateMD} />
          <img
            className={styles["plate"]}
            src={plateSM}
            alt="fitness weight plate"
          />
        </picture>
        <picture>
          <source media="(min-width: 800px)" srcSet={watchXL} />
          <img className={styles["watch"]} src={watchMD} alt="sports watch" />
        </picture>
        <picture>
          <source media="(min-width: 800px)" srcSet={kettlebellXL} />
          <img
            className={styles["kettlebell"]}
            src={kettlebellMD}
            alt="sports watch"
          />
        </picture>
        <picture>
          <source media="(min-width: 800px)" srcSet={dbOneXL} />
          <source media="(min-width: 400px)" srcSet={dbOneMD} />
          <img
            className={styles["dumbbell"]}
            src={dbOneSM}
            alt="sports watch"
          />
        </picture>
        <picture>
          <source media="(min-width: 800px)" srcSet={shoesXL} />
          <img className={styles["shoes"]} src={shoesMD} alt="sport shoes" />
        </picture>
      </div>
      <div className={styles["information"]}>
        <p className={styles["slogan"]}>Workout And Outwork</p>
        <p className={styles["description"]}>
          We provide the best science based workouts plans!
        </p>
        <HashLink to="#workout">
          <button className={styles["btn"]}>Get Started</button>
        </HashLink>
      </div>
    </div>
  );
};

export default Home;
