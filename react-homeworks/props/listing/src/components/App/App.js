import React from 'react';
import './App.css';
import Listing from '../Listing/Listing';
import * as items from '../../data/etsy';

function App() {
  return (
    <div className="App">
      <Listing items={items.default}/>
    </div>
  );
}

export default App;
