import classes from './CreateItems.module.css'
import NewItem from './NewItem';
import { useDispatch, useSelector } from "react-redux";
import { deckActions } from '../../../store/deck-slice';
function CreateItems(){

    const DUMMY_PRODUCTS = useSelector((state => state.deck.items));
    const dispatch = useDispatch();
    dispatch(deckActions.rerender());
    return (
        <div className={classes.holder}>
            {DUMMY_PRODUCTS.map(index => (
                <NewItem key={index.id.toString()} id={index.id} place={index.placement} term ={index.term} definition={index.definition} url={index.url}/>
                
            ))}
           
        


        </div>
    )


}

export default CreateItems;