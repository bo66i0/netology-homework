import React from 'react';
import PropTypes from 'prop-types';
import './Toolbar.css';

const Toolbar = (props) => {
  const {filters, selected, onSelectFilter} = props;

  return (
    <ul className="toolbar">
      {filters.map(filter => {
        return <li
          key={filter}
          className={`toolbar__item ${filter === selected && 'toolbar__item_active'}`}
          onClick={event => onSelectFilter(filter)}>{filter}</li>
      })}
    </ul>
  );
};

Toolbar.propTypes = {
  filters: PropTypes.array.isRequired
};

export default Toolbar;