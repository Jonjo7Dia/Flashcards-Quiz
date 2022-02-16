import classes from './Create.module.css';
import CreateMobile from './createUiMobile/CreateMobile';
import CreateNormal from './createUiNormal/CreateNormal';
function Create(){
    return (
        <div className={classes.body}>
            <div className={classes.mobile}>
                <CreateMobile />
            </div>
            <div className={classes.normal}>
                <CreateNormal />
            </div>
        </div>
    )

};

export default Create;