import CreateItems from "./CreateItems";
import classes from "./CreateBody.module.css";
import { useDispatch } from "react-redux";
import { deckActions } from "../../../store/deck-slice";
function CreateBody(props) {
  const dispatch = useDispatch();

  // const [cardItems, setCardItems] = useState([{placement: 1, term:'', definition: '', url: ''},{placement: 2, term:'', definition: '', url: ''}]);

  const addTermHandler = () => {
    // setCardItems(prevState => ([...prevState, {placement: prevState.length +1 , term:'', definition: '', url: ''}]));
    dispatch(deckActions.addItemToDeck());
  };

  return (
    <div>
      <CreateItems />
      <div className={classes.addCard} onClick={addTermHandler}>
        <button type='button' className={classes.addButton}>+ ADD CARD</button>
      </div>
      <div className={classes.createAction} >
          <button  onClick={props.onSubmit} className={classes.createButton}> Create</button>
      </div>
    </div>
  );
}

export default CreateBody;
