import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './screen/Home';
import Detail from "./screen/Detail";
import Updater from "./screen/Updater"
import ListNews from './screen/ListNews';
function App() {
  return (
    <Router>
    <Routes>
        <Route index element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/form" element={<Updater />} />
        <Route path="/list" element={<ListNews />} />
    </Routes>
  </Router>
  );
}

export default App;
