import classes from "./Result.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function Result() {
  return (
    <div className={classes.result}>
      <div className={classes.searchIcon}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.searchIcon}/>

      </div>
      <div className={classes.resultText}>
        <span>Text</span>
      </div>
    </div>
  );
}

export default Result;
