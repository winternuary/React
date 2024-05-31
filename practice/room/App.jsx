import "./styles.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Card from "./components/Card";
import NoPage from "./components/NoPage.jsx";
import CardList from "./CardList";
import Home from "./components/Home";
import HomeAxios from "./HomeAxios.jsx";
import Detail from "./components/Detail.jsx";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeAxios />} />
        <Route path="/header" element={<Header />} />
        <Route path="/card" element={<Card />} />
        <Route path="/cardList" element={<CardList />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}