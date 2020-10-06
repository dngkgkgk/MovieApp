import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie";
import Home from "./Home";
import MovieList from "./MovieList";
import Nav from "./components/Nav";
import { Route } from "react-router-dom";
import MovieDetail from "./MovieDetail";

function App() {
  return (
    <div>
      <Route path="/" exact={true} component={Movie} />
      <Route path="/MovieList" exact={true} component={MovieList} />
      <Route path="/MovieDetail/:id" exact={true} component={MovieDetail} />
    </div>
  );
}

export default App;
