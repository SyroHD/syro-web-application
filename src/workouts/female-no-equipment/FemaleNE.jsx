//Import Styles
import styles from "../../css/WeekdayTemplate.module.css";

//Import Components
import FridayFNE from "./FridayFNE";
import MondayFNE from "./MondayFNE";
import SaturdayFNE from "./SaturdayFNE";
import SundayFNE from "./SundayFNE";
import ThursdayFNE from "./ThursdayFNE";
import TuesdayFNE from "./TuesdayFNE";
import WednesdayFNE from "./WednesdayFNE";

const FemaleNE = ({ selectedDay }) => {
  return (
    <div className={styles["days-container"]}>
      {selectedDay === 1 && <MondayFNE />}
      {selectedDay === 2 && <TuesdayFNE />}
      {selectedDay === 3 && <WednesdayFNE />}
      {selectedDay === 4 && <ThursdayFNE />}
      {selectedDay === 5 && <FridayFNE />}
      {selectedDay === 6 && <SaturdayFNE />}
      {selectedDay === 7 && <SundayFNE />}
    </div>
  );
};

export default FemaleNE;
