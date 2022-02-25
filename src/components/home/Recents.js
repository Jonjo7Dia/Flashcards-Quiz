import { useSelector } from "react-redux";
import classes from './Recents.module.css';
import ViewSet from './ViewSet';
function Recents(props) {
  let DUMMY_ITEMS = [];
  DUMMY_ITEMS = [...props.set];
  const rec = useSelector((state) => state.recents.Recents);
  let limit = DUMMY_ITEMS.length;
  let holder = [];
  let content;
  for (let x = 0; x < limit; x++) {
    if (rec.includes(DUMMY_ITEMS[x].id)) {
      holder.push(DUMMY_ITEMS[x]);
    }
  }
  return (
    <div>
      <p>Recents</p>
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

export default Recents;
