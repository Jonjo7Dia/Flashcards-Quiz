import classes from "./ViewSet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favActions } from "../../store/fav-slice";
import { useNavigate } from "react-router";
import {recentActions} from '../../store/rec-slice';

function ViewSet(props) {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  let heart = false;
  const checker = useSelector((state) => state.fav.fav);
  let startingValue;
  if (checker.includes(props.id)) {
    startingValue = true;
  }
  const [isFavorite, setIsFavorite] = useState(startingValue);
  function toggleFavoriteHandler() {
    setIsFavorite(!isFavorite);
    heart = true;
    if (isFavorite) {
      dispatch(favActions.removeFav(props.id));
    } else {
      dispatch(favActions.addFav(props.id));
    }
  }
  let heartClass;
  if (startingValue) {
    heartClass = classes.isFav;
  } else {
    heartClass = classes.heartIcon;
  }
  function openQuizHandler() {
    if(!heart){

      navigate(`/sets/${props.id}`, {replace: false});
      dispatch(recentActions.addRecents(props.id));
    }
  }

  return (
    <li key={props.id}>
      <div className={classes.daddy} id={props.id}  onClick={openQuizHandler}>
        <div className={classes.header}>
          <div className={classes.title}>
            <h4>{props.title}</h4>
          </div>
          <div className={classes.favButton}>
            <FontAwesomeIcon
              icon={faHeart}
              className={heartClass}
              onClick={toggleFavoriteHandler}
            />
          </div>
        </div>
        <div className={classes.terms}>
          <span>{props.terms} terms</span>
        </div>
        <div className={classes.description}>
          <span>{props.description}</span>
        </div>
      </div>
    </li>
  );
}

export default ViewSet;
