import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faImage } from "@fortawesome/free-solid-svg-icons";
import classes from "./NewItem.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deckActions } from "../../../store/deck-slice";

function NewItem(props) {

  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [isDescFocused, setIsDescFocused] = useState(false);
  const [wantImage, setWantImage] = useState(false);
  const [term, setTerm] = useState(props.term);
  const [def, setDef] = useState(props.definition);
  const [url, setUrl] = useState(props.url);
  let spanclasses;
  let descSpanClasses;
  const onFocusHandler = () => {
    setIsFocused(true);
  };
  const onBlurHandler = () => {
    setIsFocused(false);
  dispatch(deckActions.addTermToDeck({placement: props.place, id: props.place, term: term, definition: def, url: url}));

  };
  const onDescFocusHandler = () => {
    setIsDescFocused(true);
  };
  const onDescBlurHandler = () => {
    setIsDescFocused(false);
  dispatch(deckActions.addTermToDeck({placement: props.place, id: props.place, term: term, definition: def, url: url}));

  };
  if (isFocused) {
    spanclasses = classes.spanYellow;
  } else {
    spanclasses = classes.span;
  }
  if (isDescFocused) {
    descSpanClasses = classes.spanYellow;
  } else {
    descSpanClasses = classes.span;
  }
  const toggleUrlHandler = () => {
    setWantImage((prevState) => {
      return !prevState;
    });
  };
  const deleteItemHandler = () => {
    dispatch(deckActions.removeItemFromDeck({place: props.place, id: props.id}));

  };



  return (
    <div className={classes.card}>
      <div className={classes.placeholder}>
        <div className={classes.position}>
          <span>{props.place}</span>
        </div>
        <div className={classes.delete} onClick={deleteItemHandler}>
          <span>
            <FontAwesomeIcon icon={faTrashCan} className={classes.trashLogo} />
          </span>
        </div>
      </div>
      <div className={classes.inputs}>
        <div className={classes.term}>
          <div className={classes.wrapper}>
            <input
              id="term"
              type="text"
              placeholder="Enter Term"
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <span className={spanclasses}></span>
            <span className={classes.label}>TERM</span>
          </div>
        </div>

        <div className={classes.term}>
          <div className={classes.wrapper}>
            {!wantImage && (
              <input
                id="definition"
                type="text"
                placeholder="Add a definition"
                onFocus={onDescFocusHandler}
                onBlur={onDescBlurHandler}
                value={def}
                onChange={(e) => setDef(e.target.value)}
              />
            )}
            {wantImage && (
              <input
                id="definition"
                type="url"
                placeholder="Add a url"
                onFocus={onDescFocusHandler}
                onBlur={onDescBlurHandler}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            )}
            <span className={descSpanClasses}></span>
            <span className={classes.label}>DEFINITION</span>
          </div>
        </div>
        <div className={classes.imageButton}>
          <div className={classes.button} onClick={toggleUrlHandler}>
            <span>
              <FontAwesomeIcon icon={faImage} className={classes.imageLogo} />
            </span>
            <span>IMAGE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewItem;
