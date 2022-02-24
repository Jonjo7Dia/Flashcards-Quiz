import classes from "./FavList.module.css";
import ViewSet from "../home/ViewSet";
function FavList(props) {
  let DUMMY_ITEMS = props.sets;
  return <ul className = {classes.wrapList}>
       {DUMMY_ITEMS.map((comment) => (
            <ViewSet
             id= {comment.id}
              key={comment.id}
              title={comment.title}
              description={comment.description}
              terms={comment.deck.length}
            />
        ))}
  </ul>;
};

export default FavList;
