import classes from "./ResultsCard.module.css";
import Result from "./Result";
import { useSelector } from "react-redux";

function ResultsCard() {
  const searchResults = useSelector((state) => state.search.decks);
  const totalDecks = useSelector((state) => state.request.requests);
  let checkStatement =
    searchResults.length >= 1 && searchResults.length <= totalDecks.length;

  return (
    <div className={classes.resultsCard}>
      {checkStatement && (
        <div className={classes.results}>
          {searchResults.map((result) => (
            <Result key={result.id} id={result.id} text={result.title} />
          ))}
        </div>
      )}

    </div>
  );
}

export default ResultsCard;
