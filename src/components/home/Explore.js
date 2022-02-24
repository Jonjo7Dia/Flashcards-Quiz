import ViewSet from "./ViewSet";
import classes from './Explore.module.css';
function Explore(props) {
  let DUMMY_ITEMS = props.set;

  return (
    <div>
      <p>Explore</p>
      <ul className={classes.wrapList}>
        {DUMMY_ITEMS.map((comment) => (
            <ViewSet
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

export default Explore;
