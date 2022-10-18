import styles from "../css/WorkoutButtons.module.css";

const SelectGender = ({ maleSelected, femaleSelected, onSelectGender }) => {
  return (
    <div className="w-100 d-flex justify-content-around">
      <button
        className={
          maleSelected ? styles["btn-checked"] : styles["btn-unchecked"]
        }
        onClick={onSelectGender}
      >
        <svg
          className={maleSelected ? styles["icon-clicked"] : styles["icon"]}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 260 406"
        >
          <g
            id="Ebene_1"
            data-name="Ebene 1"
            image-rendering="optimizeQuality"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
          >
            <g id="Layer_1">
              <path
                className="cls-1"
                d="M176,143c-2,0-4,0-5-3l-17-22v63c0,4-4,7-8,7h-33c-4,0-7-3-7-8v-62l-17,22c-1,2-3,3-4,3-2,0-4,0-6-1l-31-23c-2-1-3-3-3-5-1-2,0-4,1-5L124,3c3-4,9-4,12,0l78,106c1,1,1,3,1,5-1,2-1,4-3,5l-32,23c-1,1-2,1-4,1Zm-46,263C58,406,0,348,0,277c0-58,38-108,92-125v40c-33,15-55,48-55,85,0,51,42,93,93,93s92-42,92-93c0-38-22-70-54-85v-39c54,16,92,66,92,124,0,71-59,129-130,129Zm0-51c-43,0-78-35-78-78,0-4,3-7,7-7,5,0,8,3,8,7,0,35,28,63,63,63,4,0,8,4,8,8s-4,7-8,7Z"
              />
            </g>
          </g>
        </svg>
      </button>

      <button
        className={
          femaleSelected ? styles["btn-checked"] : styles["btn-unchecked"]
        }
        onClick={onSelectGender}
      >
        <svg
          className={femaleSelected ? styles["icon-clicked"] : styles["icon"]}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 259 335"
        >
          <g
            id="Ebene_1"
            data-name="Ebene 1"
            image-rendering="optimizeQuality"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
          >
            <g id="Layer_1">
              <path
                class="cls-1"
                d="M130,207c-43,0-78-35-78-78,0-4,3-8,7-8s7,4,7,8c0,35,29,63,64,63,4,0,7,3,7,8,0,4-3,7-7,7Zm15,128h-34c-2,0-3-1-5-2-1-1-2-3-2-6l1-19h-12c-5,0-8-3-8-7v-34c0-4,3-7,8-7h12l1-32c0-4,3-7,7-7,10,0,22,1,33,1,4,0,7,3,7,7v32h12c5,0,8,3,8,7v34c0,4-3,7-8,7h-13v19c0,4-3,7-7,7Zm22-120c33-14,55-47,55-85,0-51-42-92-92-92S37,80,37,130c0,38,22,70,55,85v39C38,238,0,188,0,130,0,58,58,0,130,0s129,59,129,130c0,58-38,108-92,124v-39Z"
              />
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default SelectGender;
