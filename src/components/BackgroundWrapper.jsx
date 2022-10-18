import styles from "../css/Background.module.css";

const BackgroundWrapper = (props) => {
  return (
    <div>
      <div className={styles.gradient}>{props.children}</div>
    </div>
  );
};

export default BackgroundWrapper;
