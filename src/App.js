import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateNewDeck from "./pages/CreateNewDeck";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
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
