import React from 'react';
import PropTypes from 'prop-types';
import ColWidget from './ColWidget';

//виджет погода
function Weather(props) {
  return (
    <ColWidget link={'/qweasd'} title={'Погода'}>
      <p>+17</p>
    </ColWidget>
  );
}

Weather.propTypes = {};

export default Weather;