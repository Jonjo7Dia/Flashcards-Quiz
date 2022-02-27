import React from "react";

import classes from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../../store/search-slice";

function SearchBar(props) {
  const dispatch = useDispatch();
  const loadedSets = useSelector((state) => state.request.requests);
  const searchValue = useSelector((state) => state.search.search);
  const searchItems = loadedSets.filter(
    (set) =>
      set.title.trim().toUpperCase().includes(searchValue.trim().toUpperCase()) || set.description.trim().toUpperCase().includes(searchValue.trim().toUpperCase())
  );
  
  function onSearchHandler(event) {
    dispatch(searchActions.setSearching(true));
    dispatch(searchActions.setSearchItem(event.target.value));
    dispatch(searchActions.setDecks(searchItems));
  }
 
  
  return (
    <div className={classes.search}>
      <form
        action="search"
        className={classes.form}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={classes.searchIcon}
        />
        <input
          className={classes.searchInput}
          type="text"
          placeholder={"Search for a FlashCard"}
          value={searchValue}
          onChange={onSearchHandler}
        />
      </form>
    </div>
  );
}

export default SearchBar;
