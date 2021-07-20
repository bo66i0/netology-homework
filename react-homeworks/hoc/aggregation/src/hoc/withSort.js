import React from 'react';

function sortList(list) {
  return [...list].sort((day, nextDay) => {
    const dayDate = new Date(day.date);
    const nextDayDate = new Date(nextDay.date);
    if(dayDate < nextDayDate) {
      return 1;
    }
    if(dayDate > nextDayDate) {
      return -1;
    }
    return 0;
  });
}

export function withSort(Component,sortFunction) {
  class WithSort extends React.Component {
    render() {
      const {list} = this.props;

      const sortedList = sortList(list);
      const newList = sortFunction ? sortFunction(sortedList) : sortedList;

      return <Component {...this.props} list={newList}/>
    }
  }
  WithSort.displayName = `withSort(${Component.displayName || Component.name}`;
  return WithSort;
}