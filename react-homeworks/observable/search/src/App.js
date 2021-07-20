import React from 'react';
import Skills from './components/Skills';
import {Provider} from 'react-redux';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Skills/>
      </div>
    </Provider>
  );
}

export default App;
