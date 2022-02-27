import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import SearchResults from "../SearchResults/SearchResults";

function Layout(props) {
  const isLoading = useSelector((state) => state.request.loading);
  const isSearching = useSelector((state) => state.search.searching);

  return (
    <div>
      <MainNavigation />
      {isLoading && <Loading />}

      <main className={classes.main}>
        {isSearching && <SearchResults />}
        {!isLoading && props.children}
      </main>
    </div>
  );
}

export default Layout;
