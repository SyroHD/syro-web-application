//Import Components
import WeightLossChallenge from "../workouts/challenges/WeightLossChallenge";
import GetAthleticChallenge from "../workouts/challenges/GetAhleticChallenge";

//Import CSS
import styles from "../css/Challenges.module.css";
import { useState } from "react";

const Challenges = () => {
  const [weightLoss, setWeightLoss] = useState(true);
  const [getAthletic, setGetAthletic] = useState(false);

  const handleSelectChallenge = () => {
    setWeightLoss(!weightLoss);
    setGetAthletic(!getAthletic);
  };

  return (
    <div>
      <div className={styles["section-container"]}>
        <div className={styles["section-one"]}>
          <h2 className={styles["challenges-header"]}>Challenge Yourself!</h2>
          <p className={styles["challenges-information"]}>
            Want a challenge? Then try one of our 30 day workout challenges. At
            the moment, you can try our weight loss challenge or get athletic
            challenge. We encourage you to do the recommended workouts around 3
            to 5 times a week.
          </p>
        </div>
        <div className={styles["section-two"]}>
          <div className={styles["btn-container"]}>
            <div>
              <button
                onClick={handleSelectChallenge}
                className={weightLoss ? styles["btn-clicked"] : styles["btn"]}
              >
                WEIGHT LOSS
              </button>
            </div>
            <div>
              <button
                onClick={handleSelectChallenge}
                className={getAthletic ? styles["btn-clicked"] : styles["btn"]}
              >
                GET ATHLETIC
              </button>
            </div>
          </div>
          <div className={styles["workouts"]}>
            {weightLoss && <WeightLossChallenge />}
            {getAthletic && <GetAthleticChallenge />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
