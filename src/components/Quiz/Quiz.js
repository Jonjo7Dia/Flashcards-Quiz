import { useSelector } from "react-redux";
import { useParams } from "react-router";
import classes from "./Quiz.module.css";
import QuizTitle from './QuizTitle';
import QuizTerms from './QuizTerms';
import FlashCards from './FlashCards';
function Quiz() {
  let item = useParams();
  let deck = useSelector((state) => state.request.requests);
  let data = deck.find((x) => x.id === item.id); 

  return (
    <div className={classes.body}>
      <div className={classes.wrapper}>
        <QuizTitle title = {data.title} />
        <FlashCards />
        <QuizTerms length = {data.deck.length} deck = {data.deck}/>
      </div>
    </div>
  );
}

export default Quiz;
