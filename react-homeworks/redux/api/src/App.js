import React from 'react';
import Services from './components/Services';
import ServiceEdit from './components/ServiceEdit';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="services">
          <Route path="/" exact render={() => <Redirect to="/services"/>}/>
          <Route path="/services" exact component={Services}/>
          <Route path="/services/:id" exact component={ServiceEdit}/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
