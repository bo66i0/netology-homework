import React from 'react';
import './App.css';
import Card from './Card';

const image = {
  src: 'https://www.w3schools.com/w3css/img_lights.jpg',
  desc: 'lights'
};

function App() {
  return (
    <div className="App">
      <Card image={image}>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </Card>

      <Card>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </Card>
    </div>
  );
}

export default App;
