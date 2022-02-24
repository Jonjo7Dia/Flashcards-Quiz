import classes from "./Term.module.css";
function Term(props) {
    let image;
    if(props.url.length > 0){
        image = <img src={props.url} alt={props.term}/>
    }
    else {
        image= props.definition
    }
  return (
    <li>
      <div className={classes.complete}>
        <div className={classes.term}>{props.term}</div>
        <div className={classes.divider}></div>
        <div className={classes.defUrl}>
            {image}</div>
      </div>
    </li>
  );
}

export default Term;
