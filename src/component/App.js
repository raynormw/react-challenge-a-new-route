import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import Github from './Github';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Github} />
          {/* <Route path="/user/:id" component={Users} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
