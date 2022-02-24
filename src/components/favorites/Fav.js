import { useSelector } from "react-redux";
import classes from "./Fav.module.css";
import FavList from "./FavList";
function Fav() {
  const fav = useSelector((state) => state.fav.fav);
  const loadedSets = useSelector((state )=> state.request.requests);
  let limit = loadedSets.length;
  let holder = [];
  for (let x = 0; x < limit; x++) {
    if (fav.includes(loadedSets[x].id)) {
      holder.push(loadedSets[x]);
    }
  }
  return (
    <div className={classes.home}>
      <div className={classes.wrapper}>
        <FavList sets={holder} />
      </div>
    </div>
  );
}
export default Fav;
