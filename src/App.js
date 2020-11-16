import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import ProjectDetails from "./components/ProjectDetails";
import Error from "./components/Error";


class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/:id" component={ProjectDetails}/>
          <Route component={Error} />
        </Switch>
      </div>
    )
  }
}

    

export default App;
