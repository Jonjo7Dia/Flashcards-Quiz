import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import classes from "./Switch.module.css";
function Switch(props) {
  return (
    <div className={classes.switchHolder}>
      <div className={classes.switch} onClick={props.switch}>

          <FontAwesomeIcon icon={faRepeat} />

            Switch Terms and Definitions

      </div>
    </div>
  );
}

export default Switch;
