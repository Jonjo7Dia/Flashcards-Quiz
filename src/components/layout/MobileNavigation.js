import classes from "./MobileNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function MobileNavigation(props) {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <header className={classes.header}>
          <button className={classes.closeButton} onClick={props.onClick}>
            <FontAwesomeIcon icon={faXmark} className={classes.menuLogo} />
          </button>
        </header>
        <div className={classes.nav}>
          <ul>
            <li>
              <Link onClick={props.onClick} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={props.onClick} to="favorites">
                Favorites
              </Link>
            </li>
            <li>
              <Link onClick={props.onClick} to="create">
                {" "}
                Create
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileNavigation;
