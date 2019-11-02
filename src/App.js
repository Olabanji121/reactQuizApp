import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "./App.css";
import Home from './pages/Home';
import Game from './pages/Game';
import NavBar from './components/NavBar';



export default class App extends Component {
  

  render() {

    return (
      <Router>
          <main>
              <NavBar/>
              <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/game" exact component={Game}/>
              </Switch>
          </main>
      </Router>
    );
  }
}

