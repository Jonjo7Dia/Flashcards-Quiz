import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateNewDeck from "./pages/CreateNewDeck";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import { useDispatch } from "react-redux";
import { favActions } from "../src/store/fav-slice";

function App() {
  const dispatch = useDispatch();
  dispatch(favActions.setFavs());
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="create" element={<CreateNewDeck />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
