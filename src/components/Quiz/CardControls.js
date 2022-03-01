import classes from "./CardControls.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function CardControls(props) {
  return (
    <div className={classes.controlActions} >
      <div className={classes.controls} onClick={props.last} >
        <FontAwesomeIcon icon={faArrowLeftLong} />
      </div>
      <div>{props.current}/{props.total}</div>
      <div className={classes.controls} onClick={props.next}>
        <FontAwesomeIcon icon={faArrowRightLong} />
      </div>
    </div>
  );
}

export default CardControls;
