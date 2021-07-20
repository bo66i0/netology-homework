import React from 'react';
import PropTypes from 'prop-types';
import WalkModel from '../models/WalkModel';

const WalksListItem = (props) => {
  const {walk, onRemove: handleRemove, onEdit: handleEdit} = props;

  return (
    <li className="walks-list-content-row">
      <div className="walks-list-content-row__cell">{walk.date}</div>
      <div className="walks-list-content-row__cell">{walk.distance}</div>
      <div className="walks-list-content-row__cell">
        <button className="walks-list-content-row__btn walks-list-content-row__btn_edit"
                onClick={() => handleEdit(walk.id)}/>

        <button className="walks-list-content-row__btn walks-list-content-row__btn_remove"
                onClick={() => handleRemove(walk.id)}/>
      </div>
    </li>
  );
};

WalksListItem.propTypes = {
  walk: PropTypes.instanceOf(WalkModel).isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default WalksListItem;