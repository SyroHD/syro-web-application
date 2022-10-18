import React, { useState } from "react";

//Import Components
import SelectEquipment from "../components/SelectEquipment";
import SelectGender from "../components/SelectGender";
import SelectWeekday from "../components/SelectWeekday";
import MaleNoEquipment from "../workouts/male-no-equipment/MaleNoEquipment";
import MaleDumbbell from "../workouts/male-dumbbells/MaleDumbbells";
import FemaleNE from "../workouts/female-no-equipment/FemaleNE";
import FemaleDB from "../workouts/female-dumbbells/FemaleDB";

//Import CSS
import styles from "../css/Workouts.module.css";

const Workouts = () => {
  const [weightsSelected, setWeightsSelected] = useState(false);
  const [noWeightSelected, setNoWeightSelected] = useState(true);
  const [maleSelected, setMaleSelected] = useState(true);
  const [femaleSelected, setFemaleSelected] = useState(false);
  const [selectedDay, setSelectedDay] = useState(1);

  let handleSelectWeights = () => {
    setWeightsSelected(!weightsSelected);
    setNoWeightSelected(!noWeightSelected);
  };

  let handleSelectGender = () => {
    setMaleSelected(!maleSelected);
    setFemaleSelected(!femaleSelected);
  };

  let handleSelectDay = (day) => {
    setSelectedDay(day);
  };

  return (
    <div>
      <div className={styles["wrapper"]}>
        <h2 className={styles["workout-header"]}>Your Workout Plan</h2>
        <p className={styles["workout-information"]}>
          Welcome to the workout section. Here you'll find your perfect workout
          plan. Usually, you have 5 workout days and 2 rest days (with optional
          workouts). Just choose your gender and workout type (dumbbells or no
          equipment) and get started.
        </p>
        <div className={styles["btn-container"]}>
          <div className={styles["select-equipment"]}>
            <SelectEquipment
              weightsSelected={weightsSelected}
              noWeightSelected={noWeightSelected}
              onSelectWeights={handleSelectWeights}
            />
            <p className={styles["informational-text"]}>
              Dumbbells Or Bodyweight?
            </p>
          </div>
          <div className={styles["select-gender"]}>
            <SelectGender
              maleSelected={maleSelected}
              femaleSelected={femaleSelected}
              onSelectGender={handleSelectGender}
            />
            <p className={styles["informational-text"]}>
              Are You Male Or Female?
            </p>
          </div>
        </div>
        <div className={styles["select-weekday-container"]}>
          <SelectWeekday
            selectedDay={selectedDay}
            onDaySelect={handleSelectDay}
          />
        </div>

        <div className={styles["workouts"]}>
          {maleSelected && noWeightSelected && (
            <MaleNoEquipment selectedDay={selectedDay} />
          )}
          {maleSelected && weightsSelected && (
            <MaleDumbbell selectedDay={selectedDay} />
          )}
          {femaleSelected && noWeightSelected && (
            <FemaleNE selectedDay={selectedDay} />
          )}
          {femaleSelected && weightsSelected && (
            <FemaleDB selectedDay={selectedDay} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Workouts;
