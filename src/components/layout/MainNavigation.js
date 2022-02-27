import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../UI/SearchBar";
import classes from "./MainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MobileNavigation from "./MobileNavigation";

import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../../store/search-slice";
function MainNavigation() {
  const dispatch = useDispatch();
  const [mobileNavigation, setMobileNavigation] = useState(false);
  const [searchBarIsActive, setSearchBarIsActive] = useState(false);
  const searchValue = useSelector((state) => state.search.search);

  function toggleSearching() {
    if (searchValue.length > 0) {
      setTimeout(function () {
        dispatch(searchActions.setSearching(true));
      }, 200);
    }
    setSearchBarIsActive(true);
  }
  function toggleNotSearching() {
    setTimeout(function () {
      setSearchBarIsActive(false);
      dispatch(searchActions.setSearching(false));

    }, 100);
  }
  function toggleShowMobile() {
    setMobileNavigation((prevState) => {
      return !prevState;
    });
  }
  let isSearching = searchBarIsActive;
  if (isSearching) {
    isSearching = classes.searching;
  } else {
    isSearching = classes.notSearching;
  }

  return (
    <header className={classes.header}>
      {mobileNavigation && <MobileNavigation onClick={toggleShowMobile} />}
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
      <div className={classes.burger}>
        <button onClick={toggleShowMobile} className={classes.menuButton}>
          <FontAwesomeIcon icon={faBars} className={classes.menuLogo} />
        </button>
      </div>
      <ul className={classes.secondNav}>
        <li className={isSearching}>
          <SearchBar onFocus={toggleSearching} onBlur={toggleNotSearching} />
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
