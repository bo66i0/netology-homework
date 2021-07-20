import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import AuthProvider from './components/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <div className="uk-container">
          <Header/>
          <Content/>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
