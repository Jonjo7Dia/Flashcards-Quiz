import { useState } from "react";
import classes from "./CreateTitle.module.css";

function CreateTitle() {
    const [isFocused, setIsFocused] =useState(false);
    const [isDescFocused, setIsDescFocused] = useState(false);
    let spanclasses;
    let descSpanClasses;
    const onFocusHandler = () => {
        setIsFocused(true);
        

    }
    const onBlurHandler = () => {
        setIsFocused(false)
    }
    const onDescFocusHandler = () => {
        setIsDescFocused(true);
        

    }
    const onDescBlurHandler = () => {
        setIsDescFocused(false)
    }
    
    if (isFocused){
        spanclasses = classes.spanYellow;
    }
    else {
        spanclasses = classes.span;
    }
    if (isDescFocused){
        descSpanClasses = classes.spanYellow;
    }
    else {
        descSpanClasses = classes.span;
    }
  return (
    <div className={classes.holder}>
      <div className={classes.header}>
        <div className={classes.title}>
          <span>Create a new study set</span>
        </div>
        <div className={classes.create}>
          <button className={classes.createButton}>
              <span>Create</span>
          </button>
        </div>
      </div>
      <div className={classes.description}>
        <div>
          <input
            id="title "
            type="text"
            placeholder='Enter a title, like "Biology - Chapter 22 - Evolution"'
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
          />
          <span className={spanclasses}></span>
          <span className={classes.label}>TITLE</span>
        </div>
        <div>
          <input id="description " type="text" placeholder="Add a description..."
          onFocus={onDescFocusHandler}
          onBlur={onDescBlurHandler} />
          <span className={descSpanClasses}></span>
          <span className={classes.label}>DESCRIPTION</span>
        </div>
      </div>
    </div>
  );
}

export default CreateTitle;
