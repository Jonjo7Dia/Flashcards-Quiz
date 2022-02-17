import { useState } from "react";
import CreateItems from './CreateItems';
import classes from './CreateBody.module.css'
function CreateBody() {
    const [cardItems, setCardItems] = useState([{placement: 1, term:'', definition: '', url: ''},{placement: 2, term:'', definition: '', url: ''}]);

    const addTermHandler = () => {
        setCardItems(prevState => ([...prevState, {placement: prevState.length +1 , term:'', definition: '', url: ''}]));
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