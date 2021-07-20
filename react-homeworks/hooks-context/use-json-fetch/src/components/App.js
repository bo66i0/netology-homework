import React from 'react';
import Data from './Data';
import Error from './Error';
import Loading from './Loading';

function App() {

  return (
    <div className="App">
      <Data/>
      <Error/>
      <Loading/>
    </div>
  );
}

export default App;
