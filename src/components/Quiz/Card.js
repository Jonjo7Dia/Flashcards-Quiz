
import classes from "./Card.module.css";

function Card(props) {
    let content;
    if(props.image){
        content = <img src={props.image} alt='not found'/>
    }
    else {
        content = props.term;
    }
  return (
    <div className={classes.cardBody} onClick={props.flip}>
      <div className={classes.text}>{content}</div>
    </div>
  );
}

export default Card;
