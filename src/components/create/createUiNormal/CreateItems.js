import classes from './CreateItems.module.css'
import NewItem from './NewItem';
import { useSelector } from "react-redux";
function CreateItems(){

    const DUMMY_PRODUCTS = useSelector((state => state.deck.items));
    return (
        <div className={classes.holder}>
            {DUMMY_PRODUCTS.map(index => (
                <NewItem key={index.placement} place={index.placement}/>
            ))}
           
        


        </div>
    )


}

export default CreateItems;