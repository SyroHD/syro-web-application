import styles from "../css/SelectWeekday.module.css";

const SelectWeekday = ({ selectedDay, onDaySelect }) => {
  return (
    <div className={styles["selection-container"]}>
      <div className={styles["weekdays-container"]}>
        <button
          onClick={() => onDaySelect(1)}
          className={
            selectedDay === 1
              ? `${styles["weekday"]} ${styles.selected}`
              : `${styles["weekday"]}`
          }
        >
          Monday
        </button>
        <button
          onClick={() => onDaySelect(2)}
          className={
            selectedDay === 2
              ? `${styles["weekday"]} ${styles.selected}`
              : `${styles["weekday"]}`
          }
        >
          Tuesday
        </button>
        <button
          onClick={() => onDaySelect(3)}
          className={
            selectedDay === 3
              ? `${styles["weekday"]} ${styles.selected}`
              : `${styles["weekday"]}`
          }
        >
          Wednesday
        </button>
        <button
          onClick={() => onDaySelect(4)}
          className={
            selectedDay === 4
              ? `${styles["weekday"]} ${styles.selected}`
              : `${styles["weekday"]}`
          }
        >
          Thursday
        </button>
        <button
          onClick={() => onDaySelect(5)}
          className={
            selectedDay === 5
              ? `${styles["weekday"]} ${styles.selected}`
              : `${styles["weekday"]}`
          }
        >
          Friday
        </button>
        <button
          onClick={() => onDaySelect(6)}
          className={
            selectedDay === 6
              ? `${styles["weekday"]} ${styles.selected}`
              : `${styles["weekday"]}`
          }
        >
          Saturday
        </button>
        <button
          onClick={() => onDaySelect(7)}
          className={
            selectedDay === 7
              ? `${styles["weekday"]} ${styles.selected}`
              : `${styles["weekday"]}`
          }
        >
          Sunday
        </button>
      </div>

      <div className={styles["mobile-container"]}>
        <button
          onClick={() => onDaySelect(1)}
          className={
            selectedDay === 1
              ? `${styles["weekday-selection-checked"]}`
              : `${styles["weekday-selection-unchecked"]}`
          }
        >
          M
        </button>
        <button
          onClick={() => onDaySelect(2)}
          className={
            selectedDay === 2
              ? `${styles["weekday-selection-checked"]}`
              : `${styles["weekday-selection-unchecked"]}`
          }
        >
          T
        </button>
        <button
          onClick={() => onDaySelect(3)}
          className={
            selectedDay === 3
              ? `${styles["weekday-selection-checked"]}`
              : `${styles["weekday-selection-unchecked"]}`
          }
        >
          W
        </button>
        <button
          onClick={() => onDaySelect(4)}
          className={
            selectedDay === 4
              ? `${styles["weekday-selection-checked"]}`
              : `${styles["weekday-selection-unchecked"]}`
          }
        >
          T
        </button>
        <button
          onClick={() => onDaySelect(5)}
          className={
            selectedDay === 5
              ? `${styles["weekday-selection-checked"]}`
              : `${styles["weekday-selection-unchecked"]}`
          }
        >
          F
        </button>
        <button
          onClick={() => onDaySelect(6)}
          className={
            selectedDay === 6
              ? `${styles["weekday-selection-checked"]}`
              : `${styles["weekday-selection-unchecked"]}`
          }
        >
          S
        </button>
        <button
          onClick={() => onDaySelect(7)}
          className={
            selectedDay === 7
              ? `${styles["weekday-selection-checked"]}`
              : `${styles["weekday-selection-unchecked"]}`
          }
        >
          S
        </button>
      </div>
    </div>
  );
};

export default SelectWeekday;
