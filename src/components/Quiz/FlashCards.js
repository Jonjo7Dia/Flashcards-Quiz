import classes from "./FlashCards.module.css";
import Card from "./Card";
import CardControls from "./CardControls";
import { useState } from "react";
import useKeypress from "react-use-keypress";
import Switch from './Switch';
function FlashCards(props) {
  const [counter, setCounter] = useState(1);
  const [front, setFront] = useState(true);
  const [termsFirst, setTermsFirst] = useState(true);
  function termsHandler(){
      setTermsFirst(!termsFirst);
  }
  
  let items = props.deck;
  let length = items.length;
  let content;
  let frontContent;
  let holderClass;
  let frontClass;
  if (front) {
    holderClass = classes.holder;
    frontClass = classes.front;
  }
  if (!front) {
    holderClass = classes.holderTransform;
    frontClass = classes.frontTransform;
  }
  
  function nextCardHandler() {
    setFront(true);
    setTimeout(function () {
      if (counter < length) {
        setCounter(counter + 1);
      } else {
        setCounter(1);
      }
    }, 100);
  }
  function lastCardHandler() {
    setFront(true);
    setTimeout(function () {
      if (counter > 1) {
        setCounter(counter - 1);
      } else {
        setCounter(length);
      }
    }, 100);
  }
  function toggleFrontHandler() {
    setFront(!front);
  }
  if (items[counter - 1].url.length > 0) {
    content = <Card image={items[counter - 1].url} flip={toggleFrontHandler} />;
  } else {
    content = (
      <Card term={items[counter - 1].definition} flip={toggleFrontHandler} />
    );
  }
  if (!termsFirst){
      frontContent = content;
      content = <Card term={items[counter - 1].term} flip={toggleFrontHandler} />;
  }
  else {
      frontContent = <Card term={items[counter - 1].term} flip={toggleFrontHandler} />;
  }

  useKeypress(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"], (event) => {
    if (event.key === "ArrowLeft") {
        lastCardHandler();
    }
    if (event.key === "ArrowRight") {
      nextCardHandler();
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      toggleFrontHandler();
    }
  });

  return (
    <div className={classes.flashCardBody}>
      <div className={holderClass}>
        <div className={classes.back}>{content} </div>
        <div className={frontClass}>
          {frontContent}
        </div>
      </div>

      <CardControls
        next={nextCardHandler}
        last={lastCardHandler}
        current={counter}
        total={length}
      />
      <Switch switch={termsHandler}/>
    </div>
  );
}

export default FlashCards;
