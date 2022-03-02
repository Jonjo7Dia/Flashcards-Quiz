import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { useDispatch } from "react-redux";
import HomePage from './pages/HomePage';
import Favorites from './pages/Favorites';
import CreateNewDeck from './pages/CreateNewDeck';
import Sets from './pages/Sets';
import { favActions } from "../src/store/fav-slice";
import { requestActions } from "../src/store/request-slice";
import { recentActions } from "../src/store/rec-slice";
import { useEffect } from "react";

function App() {
 

  const dispatch = useDispatch();
  const url =
    "https://react-hooks-update-27f2d-default-rtdb.firebaseio.com/sets.json";

  useEffect(() => {
    dispatch(requestActions.setLoading(true));
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
        dispatch(favActions.setFavs());
        dispatch(recentActions.setRecents());
        dispatch(requestActions.setRequests(sets));
        dispatch(requestActions.setLoading(false));
      });
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback ={<p>loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="create" element={<CreateNewDeck />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="sets/:id" element={<Sets />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
