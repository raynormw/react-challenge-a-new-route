import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import Home from './Home';
import Github from './Github';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/github" component={Github} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
