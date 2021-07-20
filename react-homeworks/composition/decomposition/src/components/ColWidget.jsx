import React from 'react';
import PropTypes from 'prop-types';

//Виджет размещающийся в колонках
function ColWidget({link, title, addToTitleEl, ...props}) {
  return (
    <div>
      <div>
        <a href={link}>{title}</a>
        {addToTitleEl || ''}
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
}

ColWidget.propTypes = {};

export default ColWidget;