import CreateTitle from './CreateTitle';
import classes from './CreateNormal.module.css';
import CreateBody from './CreateBody'

function CreateNormal(){
    function onSubmitHandler(event){
        event.preventDefault();
    }

    return (
        <div className={classes.body}>
            <form action='' onSubmit={onSubmitHandler} className={classes.form}>
                <CreateTitle />
                <CreateBody />
            </form>
        </div>
    )
};

export default CreateNormal;