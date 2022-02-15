import React from 'react';

import classes from "./SearchBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchBar(props) {
  return (
    <div className={classes.search}>
      <form action="search" className={classes.form} onFocus={props.onFocus} onBlur={props.onBlur}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.searchIcon}/>
        <input className={classes.searchInput} type="text" placeholder={"Search for a FlashCard"} />
      </form>
    </div>
  );
}

export default SearchBar;
