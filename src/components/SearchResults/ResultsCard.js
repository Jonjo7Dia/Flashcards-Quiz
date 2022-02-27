import classes from "./ResultsCard.module.css";
import Result from './Result';

function ResultsCard() {
 return <div className = {classes.resultsCard}>
     <div className={classes.results}>
         <Result />
         <Result />
         <Result />

     </div>
 </div>
}

export default ResultsCard;