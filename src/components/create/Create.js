import classes from './Create.module.css';
import CreateNormal from './createUiNormal/CreateNormal';
function Create(){
    return (
        <div className={classes.body}>
            <div className={classes.normal}>
                <CreateNormal />
            </div>
        </div>
    )

};

export default Create;