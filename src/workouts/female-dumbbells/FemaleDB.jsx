//Import Styles
import styles from "../../css/WeekdayTemplate.module.css";

//Import Components
import FridayFD from "./FridayFD";
import MondayFD from "./MondayFD";
import SaturdayFD from "./SaturdayFD";
import SundayFD from "./SundayFD";
import ThursdayFD from "./ThursdayFD";
import TuesdayFD from "./TuesdayFD";
import WednesdayFD from "./WednesdayFD";

const FemaleDB = ({ selectedDay }) => {
  return (
    <div className={styles["days-container"]}>
      {selectedDay === 1 && <MondayFD />}
      {selectedDay === 2 && <TuesdayFD />}
      {selectedDay === 3 && <WednesdayFD />}
      {selectedDay === 4 && <ThursdayFD />}
      {selectedDay === 5 && <FridayFD />}
      {selectedDay === 6 && <SaturdayFD />}
      {selectedDay === 7 && <SundayFD />}
    </div>
  );
};

export default FemaleDB;
