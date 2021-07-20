import React from 'react';
import './App.css';
import Calendar from './components/Calendar';
import moment from 'moment';
import 'moment/locale/ru'

moment.locale('ru');

const now = new Date(2018,4,1);

function App() {
  return (
    <div className="App">
      <Calendar date={now}/>
    </div>
  );
}

export default App;
