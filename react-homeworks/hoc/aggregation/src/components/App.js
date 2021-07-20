import React from 'react';
import MonthTable from './MonthTable';
import SortTable from './SortTable';
import YearTable from './YearTable';
import {withSort} from '../hoc/withSort';

const SortedMonthTable = withSort(MonthTable, monthSortFunction);
const SortedYearTable = withSort(YearTable, yearSortFunction);
const SortedTable = withSort(SortTable);

function monthSortFunction(list) {
  const monthGroupList = [];//Создаем массив с группировкой по месяцам за текущий год
  const monthsList = [];//Создаем массив всех месяцев в списке данных list

  list.forEach(day => {
    const dayDate = new Date(day.date),
      year = dayDate.getFullYear(),
      month = dayDate.getMonth();

    const isMonthExists = monthsList.find(monthInList => monthInList.month === month && monthInList.year === year);
    if(!isMonthExists) {
      //Добавляем месяц в массив всех месяцев если его там нет
      monthsList.push({year, month});

      //Создаем массив дней текущего месяца
      const filteredByMonthList = list.filter(day => {
        const date = new Date(day.date);
        return year === date.getFullYear() && month === date.getMonth();
      });

      const monthTotalAmount = filteredByMonthList.reduce((total, day) => total + day.amount, 0);
      monthGroupList.push({month, amount: monthTotalAmount});
    }
  });

  return monthGroupList;
}

function yearSortFunction(list) {
  const yearGroupList = [];//Создаем массив с группировкой по годам
  const yearsList = [];//Создаем массив всех годов

  list.forEach(day => {
    const dayDate = new Date(day.date),
      year = dayDate.getFullYear();

    const isYearExists = yearsList.find(yearInList => yearInList === year);
    if(!isYearExists) {
      //Добавляем год в массив всех годов если его там нет
      yearsList.push(year);

      //Создаем массив дней текущего года
      const filteredByYearList = list.filter(day => {
        const date = new Date(day.date);
        return date.getFullYear() === year;
      });

      const yearTotalAmount = filteredByYearList.reduce((total, day) => total + day.amount, 0);
      yearGroupList.push({year, amount: yearTotalAmount});
    }
  });

  return yearGroupList;
}

export default class App extends React.Component {
  state = {
    list: []
  };

  componentDidMount = () => {
    fetch(process.env.REACT_APP_DATA_URL)
      .then(response => response.json())
      .then(response => this.setState(response))
  };

  render() {
    const {list} = this.state;

    return (
      <div id="app">
        <SortedMonthTable list={list}/>
        <SortedYearTable list={list}/>
        <SortedTable list={list}/>
      </div>
    );
  }
}