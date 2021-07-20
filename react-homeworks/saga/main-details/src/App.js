import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Services from './components/Services';
import ServiceView from './components/ServiceView';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Services}/>
            <Route path="/:id/details" component={ServiceView}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
