import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header/index";
import Home from "./containers/Home/index";
import Results from "./containers/Results/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search/lat/:lat/lon/:lon" component={Results} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
