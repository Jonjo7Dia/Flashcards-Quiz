import classes from "./ViewSet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {favActions} from '../../store/fav-slice';


function ViewSet(props) {
  const dispatch =   useDispatch()
 

  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavoriteHandler() {
    setIsFavorite(!isFavorite);
    if(!isFavorite){
      dispatch(favActions.removeFav(props.id));
    }
  }
  let heartClass;
  if(isFavorite){
      heartClass = classes.isFav;
      dispatch(favActions.addFav(props.id));
  }
  else{
      heartClass = classes.heartIcon;
      
  }

  return (
    <li key={props.id}>
      <div className={classes.daddy} id={props.id}>
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
