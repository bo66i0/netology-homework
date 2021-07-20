import React from 'react';
import PropTypes from 'prop-types';
import ColWidget from './ColWidget';

//виджет карты Германии
function MapOfGermany(props) {
  return (
    <ColWidget link={'/qweasd'} title={'Карта Германии'}>
      <p>Расписания</p>
    </ColWidget>
  );
}

MapOfGermany.propTypes = {};

export default MapOfGermany;