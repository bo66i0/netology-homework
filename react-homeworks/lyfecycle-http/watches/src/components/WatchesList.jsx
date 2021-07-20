import React from 'react';
import PropTypes from 'prop-types';
import WatchItem from './WatchItem';

function WatchesList({watches, onRemove: handleRemove}) {
  return (
    <div className="watches-list">
      {watches.map(watch => (
        <WatchItem key={watch.id} watch={watch} onRemove={handleRemove}/>
      ))}

    </div>
  );
}

WatchesList.propTypes = {
  watches: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default WatchesList;