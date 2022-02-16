import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from '../UI/SearchBar';
import classes from "./MainNavigation.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import MobileNavigation from './MobileNavigation';


function MainNavigation() {
  const [mobileNavigation, setMobileNavigation ] = useState(false);
  const[searchBarIsActive, setSearchBarIsActive] = useState(false);
  
  function toggleSearching() {
    setSearchBarIsActive(true);

  }
  function toggleNotSearching() {
    setSearchBarIsActive(false);
  }
  function toggleShowMobile() {
    setMobileNavigation(prevState => {
      return !prevState;
    })
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
      {mobileNavigation && <MobileNavigation onClick={toggleShowMobile}/>}
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
      <div className={classes.burger}><button onClick={toggleShowMobile}className={classes.menuButton}>
      <FontAwesomeIcon icon={faBars} className={classes.menuLogo}/></button></div>
      <ul className={classes.secondNav}>
        <li className={isSearching}><SearchBar onFocus={toggleSearching} onBlur={toggleNotSearching}/></li>
      </ul>
    </header>
  );
}

export default MainNavigation;
