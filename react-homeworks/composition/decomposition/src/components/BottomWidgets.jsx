import React from 'react';
import PropTypes from 'prop-types';
import Weather from './Weather';
import Visited from './Visited';
import MapOfGermany from './MapOfGermany';
import Tv from './Tv';
import Broadcast from './Broadcast';

//группа виджетов находящихся внизу
function BottomWidgets(props) {
  return (
    <div>
      <div>
        <Weather/>
        <Visited/>
      </div>
      <div>
        <MapOfGermany/>
        <Tv/>
      </div>
      <div>
        <Broadcast/>
      </div>
    </div>
  );
}

BottomWidgets.propTypes = {};

export default BottomWidgets;