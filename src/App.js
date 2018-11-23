import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header/index";
import Home from "./containers/Home/index";
import Results from "./containers/Results/index";
import Searched from "./containers/Searched/index";
import Border from "./components/Border/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Border />
        <Header />

        <Switch>
          <Route
            exact
            path="/"
            render={({ history }) => <Home context={history} />}
          />
          <Route path="/search/lat/:lat/lon/:lon" component={Results} />
          <Route path="/find/:term" component={Searched} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
