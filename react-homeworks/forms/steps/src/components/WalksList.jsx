import React from 'react';
import PropTypes from 'prop-types';
import WalksListItem from './WalksListItem';

const WalksList = (props) => {
  const {walks, onRemove: handleRemove, onEdit: editHandler} = props;

  if(walks.length === 0) {
    return null
  }

  return (
    <div className="walks-list">
      <div className="walks-list__header">
        <div className="walks-list__header-cell">Дата(ДД.ММ.ГГ.)</div>
        <div className="walks-list__header-cell">Пройдено км</div>
        <div className="walks-list__header-cell">Действия</div>
      </div>
      <ul className="walks-list-content">
        {walks.map(walk => <WalksListItem key={walk.id} walk={walk} onRemove={handleRemove} onEdit={editHandler}/>)}
      </ul>
    </div>
  );
};

WalksList.propTypes = {
  walks: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default WalksList;