//Import Styles
import styles from "../../css/WeekdayTemplate.module.css";

//Import Components
import FridayMD from "./FridayMD";
import MondayMD from "./MondayMD";
import SaturdayMD from "./SaturdayMD";
import SundayMD from "./SundayMD";
import ThursdayMD from "./ThursdayMD";
import TuesdayMD from "./TuesdayMD";
import WednesdayMD from "./WednesdayMD";

const MaleDumbbell = ({ selectedDay }) => {
  return (
    <div className={styles["days-container"]}>
      {selectedDay === 1 && <MondayMD />}
      {selectedDay === 2 && <TuesdayMD />}
      {selectedDay === 3 && <WednesdayMD />}
      {selectedDay === 4 && <ThursdayMD />}
      {selectedDay === 5 && <FridayMD />}
      {selectedDay === 6 && <SaturdayMD />}
      {selectedDay === 7 && <SundayMD />}
    </div>
  );
};

export default MaleDumbbell;
