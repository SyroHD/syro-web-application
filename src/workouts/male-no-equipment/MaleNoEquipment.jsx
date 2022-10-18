//Import Styles
import styles from "../../css/WeekdayTemplate.module.css";

//Import Components
import MondayMNE from "./MondayMNE";
import TuesdayMNE from "./TuesdayMNE";
import WednesdayMNE from "./Wednesday";
import ThursdayMNE from "./Thursday";
import FridayMNE from "./Friday";
import SaturdayMNE from "./Saturday";
import SundayMNE from "./SundayMNE";

const MaleNoEquipment = ({ selectedDay }) => {
  return (
    <div className={styles["days-container"]}>
      {selectedDay === 1 && <MondayMNE />}
      {selectedDay === 2 && <TuesdayMNE />}
      {selectedDay === 3 && <WednesdayMNE />}
      {selectedDay === 4 && <ThursdayMNE />}
      {selectedDay === 5 && <FridayMNE />}
      {selectedDay === 6 && <SaturdayMNE />}
      {selectedDay === 7 && <SundayMNE />}
    </div>
  );
};

export default MaleNoEquipment;
