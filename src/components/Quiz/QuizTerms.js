import classes from "./QuizTerms.module.css";
import Term from "./Term";

function QuizTerms(props) {
  let items = props.deck;

  return (
    <div>
      <div className={classes.numOfTerms}>
        <h4>Terms in this set ({props.length})</h4>
      </div>
      <div className={classes.terms}>
        <ul className={classes.termList}>
          {items.map((item) => (
            <Term
              key={item.id}
              id={item.id}
              term={item.term}
              definition={item.definition}
              url={item.url}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default QuizTerms;
