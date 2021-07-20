import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function getDaysInMonth (year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getDay(year, month, day) {
  let weekDayNumber = new Date(year,month,day).getDay();
  if(weekDayNumber === 0) {
    weekDayNumber = 7;
  }
  return weekDayNumber;
}

function getStatusClass(status) {
  switch(status) {
    case 'otherMonth':
      return 'ui-datepicker-other-month';
    case 'today':
      return 'ui-datepicker-today'
  }
}

function Day(date, status) {
  this.date = date;
  this.status = status;
}

function getCalendarWeeksArr(date) {
  const daysInMonth = getDaysInMonth(date.getFullYear(),date.getMonth());

  let weekDayNumber = getDay(date.getFullYear(),date.getMonth(),1);//начальный день недели для записи дней в массив daysInWeekArr
  console.log(weekDayNumber);
  let today = false;
  let daysInWeekArr = [];
  const weeksArr = [];

  for(let i=1; i<=daysInMonth; i++) {
    today = i === date.getDate();

    daysInWeekArr.push(new Day(
      new Date(date.getFullYear(),date.getMonth(),i),
      today ? 'today' : ''
    ));

    if(weekDayNumber === 7 || i === daysInMonth ) {
      weekDayNumber = 1;
      weeksArr.push(daysInWeekArr);
      daysInWeekArr = [];
    } else {
      weekDayNumber++;
    }
  }

  //Добавляем дни к первой неделе из предыдущего месяца если они есть
  const dayToAddInTheBeginning = 7 - weeksArr[0].length;
  if(dayToAddInTheBeginning > 0) {
    for(let i=1; i<=dayToAddInTheBeginning; i++) {
      weeksArr[0].unshift(new Day(
        new Date(date.getFullYear(),date.getMonth(),1 - i),
        'otherMonth'
      ));
    }
  }

  //Добавляем дни к последней неделе из следующего месяца если они есть
  const dayToAddInTheEnd = 7 - weeksArr[weeksArr.length - 1].length;
  if(dayToAddInTheEnd > 0) {
    for(let i=1; i<=dayToAddInTheEnd; i++) {
      weeksArr[weeksArr.length - 1].push(new Day(
        new Date(date.getFullYear(),date.getMonth(),daysInMonth + i),
        'otherMonth'
      ));
    }
  }

  return weeksArr;
}

const Calendar = (props) => {
  const {date} = props;

  const weeksArr = getCalendarWeeksArr(date);
  const momentDate = moment(date.getTime());

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{momentDate.format('dddd')}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{momentDate.format('D')}</div>
          <div className="ui-datepicker-material-month">{momentDate.format('D MMMM').split(' ').pop()}</div>
          <div className="ui-datepicker-material-year">{momentDate.format('YYYY')}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{momentDate.format('MMMM')}</span>&nbsp;<span className="ui-datepicker-year">{momentDate.format('YYYY')}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col/>
          <col/>
          <col/>
          <col/>
          <col/>
          <col className="ui-datepicker-week-end"/>
          <col className="ui-datepicker-week-end"/>
        </colgroup>
        <thead>
        <tr>
          <th scope="col" title="Понедельник">Пн</th>
          <th scope="col" title="Вторник">Вт</th>
          <th scope="col" title="Среда">Ср</th>
          <th scope="col" title="Четверг">Чт</th>
          <th scope="col" title="Пятница">Пт</th>
          <th scope="col" title="Суббота">Сб</th>
          <th scope="col" title="Воскресенье">Вс</th>
        </tr>
        </thead>
        <tbody>
        {weeksArr.map((daysArrInWeek,i) => (
          <tr key={i}>
            {daysArrInWeek.map(day => (
              <td key={day.date.getTime()} className={getStatusClass(day.status)}>
                {day.date.getDate()}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date)
};

export default Calendar;