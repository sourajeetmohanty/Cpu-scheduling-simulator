import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Gantt from "./components/Gantt"
import Example from './components/Home';
import Navi from "./components/Navbar"

function App() {
 

  return (
    <BrowserRouter>
      <Navi/>
      <Switch>
        <Route path="/" exact>
          <Example/>  
        </Route>
        <Route path="/fcfs" exact>
          <Gantt algorithm="fcfs" />
        </Route>
        <Route path="/sjf" exact>
          <Gantt algorithm="sjf" />
        </Route>
        <Route path="/priority" exact>
          <Gantt algorithm="priority" />
        </Route>
        <Route path="/roundrobin" exact>
          <Gantt algorithm="roundRobin" />
        </Route>
      </Switch>  
    </BrowserRouter>
  );
}

export default App;