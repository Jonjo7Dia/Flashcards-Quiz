import { useState } from "react";
import CreateItems from './CreateItems';
import classes from './CreateBody.module.css'
function CreateBody() {
    const [cardItems, setCardItems] = useState([{term:'', definition: ''},{term:'', definition: ''},{term:'', definition: ''}]);

    const addTermHandler = () => {
        
    }

    return (
        <div>
           <CreateItems cardItems={cardItems} />
           <div className={classes.addCard}>
           <button className={classes.addButton} onClick={addTermHandler}>+ ADD CARD</button>

            </div>
        </div>
       
    )
}

export default CreateBody;