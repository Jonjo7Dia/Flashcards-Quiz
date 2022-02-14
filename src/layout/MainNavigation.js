import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <ul className={classes.firstNav}>
        <li className={classes.logo}>
          <Link to="/">FLASHCARDS</Link>
        </li>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="create"> Create</Link>
        </li>
      </ul>
      <ul className={classes.secondNav}>
        <li>
          <Link to="favorites">Favorites</Link>
        </li>
        <li>Search</li>
      </ul>
    </header>
  );
}

export default MainNavigation;
