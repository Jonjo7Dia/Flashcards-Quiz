import { useEffect, useState } from "react";
import Explore from "./Explore";
import Favorites from "./Favorites";
import Recents from "./Recents";
import classes from './Home.module.css';
import { useSelector } from "react-redux";
function Home() {
  // const fav = useSelector((state) => state.fav.fav);
  const loadedSets = useSelector((state )=> state.request.requests);



    return (
      <div className={classes.home}>
        <div className={classes.wrapper}>
          <Favorites set={loadedSets}/>
          <Recents />
          <Explore set={loadedSets} />
          
        </div>
      </div>
    );

}

export default Home;
