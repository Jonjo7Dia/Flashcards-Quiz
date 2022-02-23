import CreateTitle from "./CreateTitle";
import classes from "./CreateNormal.module.css";
import CreateBody from "./CreateBody";
import { useDispatch, useSelector } from "react-redux";
import { setActions } from "../../../store/set-slice";
import { useEffect } from "react";

function CreateNormal() {
  const dispatch = useDispatch();
  const DUMMY_PRODUCTS = useSelector((state) => state.deck.items);
  const view = useSelector((state) => state.set.deck);
  useEffect(() => {
    // Update the document title using the browser API
    let s = 0;
    for (let x = 0; x < DUMMY_PRODUCTS.length; x++) {
      let holder = DUMMY_PRODUCTS[x];
      if (
        holder.term.length > 0 &&
        (holder.definition.length > 0 ||
        holder.url.length > 0)
      ) {
          s++
      }
    }
    if (s!== DUMMY_PRODUCTS.length){
       return
    }
    else {
        dispatch(setActions.setDeck(DUMMY_PRODUCTS));

    }
  }, [DUMMY_PRODUCTS]);
  function onSubmitHandler(event) {
    event.preventDefault();
    if (DUMMY_PRODUCTS.length !== view.length){
        alert('some of your cards are missing information');
    }
    else {
        console.log(view);
        console.log(DUMMY_PRODUCTS);
    }
  }

  return (
    <div className={classes.body}>
      <form action="" onSubmit={onSubmitHandler} className={classes.form}>
        <CreateTitle />
        <CreateBody />
      </form>
    </div>
  );
}

export default CreateNormal;
