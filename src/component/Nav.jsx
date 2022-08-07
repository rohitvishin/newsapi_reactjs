import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Home} from "../screen/Home";
import {Detail} from "../screen/Detail";

export default function Nav(){
    return (
          <Router>
            <Route path="/details">
                <Detail />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Router>
    );
}
