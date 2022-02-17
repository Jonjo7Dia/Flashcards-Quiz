import classes from './CreateItems.module.css'
import NewItem from './NewItem'
function CreateItems(props){
    return (
        <div className={classes.holder}>
            {props.cardItems.map(index => (
                <NewItem key={index.placement} place={index.placement}/>
            ))}
           
        


        </div>
    )


}

export default CreateItems;