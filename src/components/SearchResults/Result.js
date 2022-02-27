import classes from "./Result.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {recentActions} from '../../store/rec-slice';
function Result(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
 function openSetHandler(){
    console.log(props.id);
    navigate(`/sets/${props.id}`, {replace: true});
    dispatch(recentActions.addRecents(props.id));
 }

  return (
    <div className={classes.result} onClick={openSetHandler}>
      <div className={classes.searchIcon}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.searchIcon}/>

      </div>
      <div className={classes.resultText}>
        <span>{props.text}</span>
      </div>
    </div>
  );
}

export default Result;
