import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from '../UI/SearchBar';
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const[searchBarIsActive, setSearchBarIsActive] = useState(false);
  
  function toggleSearching() {
    setSearchBarIsActive(true);

  }
  function toggleNotSearching() {
    setSearchBarIsActive(false);
  }
  let isSearching = searchBarIsActive;
  if (isSearching){
    isSearching = classes.searching;
  }
  else{
    isSearching = classes.notSearching;
  }


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
          <Link to="favorites">Favorites</Link>
        </li>
        <li>
          <Link to="create"> Create</Link>
        </li>

      </ul>
      <ul className={classes.secondNav}>
        <li className={isSearching}><SearchBar onFocus={toggleSearching} onBlur={toggleNotSearching}/></li>
      </ul>
    </header>
  );
}

export default MainNavigation;
