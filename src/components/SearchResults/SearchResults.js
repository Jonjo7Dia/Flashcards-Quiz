import classes from "./SearchResults.module.css";
import ResultsCard from './ResultsCard';
function SearchResults(){
    return <div className={classes.searchResults}>
        <ResultsCard />
    </div>
}

export default SearchResults;