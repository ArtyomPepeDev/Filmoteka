import Header from "./components/Header/Header";
import "./AppStyle.css";
import CardList from "./components/CardList/CardList";
import { useState } from "react";

const App = () => {
  const [films, setFilms] = useState([])
  return (
    <div>
      <Header setFilms={setFilms} />
      <CardList list={films} />
    </div>
  );
};

export default App;