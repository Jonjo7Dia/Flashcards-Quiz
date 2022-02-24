import { useEffect, useState } from "react";
import Explore from "./Explore";
import Favorites from "./Favorites";
import Recents from "./Recents";
import classes from './Home.module.css';
function Home() {
  const url =
    "https://react-hooks-update-27f2d-default-rtdb.firebaseio.com/sets.json";
  const [isLoading, setIsLoading] = useState(true);
  const [loadedSets, setLoadedSets] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const sets = [];
        for (const key in data) {
          const set = { id: key, ...data[key] };
          sets.push(set);
        }
        setIsLoading(false);
        setLoadedSets(sets);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className={classes.home}>
        <div className={classes.wrapper}>
          <Favorites />
          <Recents />
          <Explore set={loadedSets} />
          
        </div>
      </div>
    );
  }
}

export default Home;
