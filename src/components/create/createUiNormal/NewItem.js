import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faImage } from "@fortawesome/free-solid-svg-icons";
import classes from "./NewItem.module.css";
import { useState } from "react";

function NewItem(props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isDescFocused, setIsDescFocused] = useState(false);
  const [wantImage, setWantImage] = useState(false);
  let spanclasses;
  let descSpanClasses;
  const onFocusHandler = () => {
    setIsFocused(true);
  };
  const onBlurHandler = () => {
    setIsFocused(false);
  };
  const onDescFocusHandler = () => {
    setIsDescFocused(true);
  };
  const onDescBlurHandler = () => {
    setIsDescFocused(false);
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
      setWantImage(prevState => {
          return !prevState;
      });

  }

  return (
    <div className={classes.card}>
      <div className={classes.placeholder}>
        <div className={classes.position}>
          <span>{props.place}</span>
        </div>
        <div className={classes.delete}>
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
            />
            <span className={spanclasses}></span>
            <span className={classes.label}>TERM</span>
          </div>
        </div>

        <div className={classes.term}>
          <div className={classes.wrapper}>
            {!wantImage && <input

              id="definition"
              type="text"
              placeholder="Add a definition"
              onFocus={onDescFocusHandler}
              onBlur={onDescBlurHandler}
            />}
            {wantImage && <input

              id="definition"
              type="url"
              placeholder="Add a url"
              onFocus={onDescFocusHandler}
              onBlur={onDescBlurHandler}
            />}
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
