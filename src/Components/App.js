import React, { Component } from 'react';
import Home from "./Home";
import {  BrowserRouter as Router,Route} from "react-router-dom";
import FlavorPage from "./FlavorPage";

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/flavors" component={FlavorPage} />
            </div>
        </Router>
    );
  }
}

export default App;
