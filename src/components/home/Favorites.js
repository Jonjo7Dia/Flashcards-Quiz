import ViewSet from "./ViewSet";
import classes from "./Favorites.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import {favActions} from '../../store/fav-slice';
function Favorites(props) {
  let DUMMY_ITEMS = [];
  DUMMY_ITEMS = [...props.set];
  const fav = useSelector((state) => state.fav.fav);
  let limit = DUMMY_ITEMS.length;
  let holder = [];
  let content;
  for (let x = 0; x < limit; x++) {
    if (fav.includes(DUMMY_ITEMS[x].id)) {
      holder.push(DUMMY_ITEMS[x]);
    }
  }
  if (holder.length >= 3) {
    holder = holder.slice(0, 3);
    content =   <div>
    <p>Favorites</p>
    <ul className={classes.wrapList}>
      {holder.map((comment) => (
        <ViewSet
          id={comment.id}
          key={comment.id}
          title={comment.title}
          description={comment.description}
          terms={comment.deck.length}
        />
      ))}
    </ul>
    <div><Link to="favorites">View more favorites...</Link></div>
  </div>
  }
  if (holder.length > 0) {
    content = (
      <div>
        <p>Favorites</p>
        <ul className={classes.wrapList}>
          {holder.map((comment) => (
            <ViewSet
              id={comment.id}
              key={comment.id}
              title={comment.title}
              description={comment.description}
              terms={comment.deck.length}
            />
          ))}
        </ul>
      </div>
    );
  }
  else {
      content = <div></div>
  }

  return content;
}

export default Favorites;
