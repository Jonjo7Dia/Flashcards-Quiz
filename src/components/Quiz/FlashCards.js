import classes from "./FlashCards.module.css";
import Card from "./Card";
import CardControls from "./CardControls";
import { useState } from "react";
import useKeypress from "react-use-keypress";
function FlashCards(props) {
  const [counter, setCounter] = useState(1);
  const [front, setFront] = useState(true);
  let items = props.deck;
  let length = items.length;
  let content;

  function nextCardHandler() {
    if (counter < length) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  }
  function lastCardHandler() {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      setCounter(length);
    }
  }
  function toggleFrontHandler() {
    setFront(!front);
  }

  if (front) {
    content = <Card term={items[counter - 1].term} />;
  }
  if (!front) {
    if (items[counter - 1].url.length > 0) {
      content = <Card image={items[counter - 1].url} />;
    } else {
      content = <Card term={items[counter - 1].definition} />;
    }
  }
  console.log(front);
  useKeypress(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"], (event) => {
    if (event.key === "ArrowLeft") {
      setFront(true);
      lastCardHandler();
    }
    if (event.key === "ArrowRight") {
      setFront(true);
      nextCardHandler();
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      toggleFrontHandler();
    }
  });

  return (
    <div className={classes.flashCardBody}>
      {content}

      <CardControls
        next={nextCardHandler}
        last={lastCardHandler}
        current={counter}
        total={length}
      />
    </div>
  );
}

export default FlashCards;
