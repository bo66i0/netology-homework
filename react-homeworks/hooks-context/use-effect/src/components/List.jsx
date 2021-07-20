import React from 'react';
import PropTypes from 'prop-types';

function List({users, onUserClick: selectUser}) {
  return (
    <ul className="list uk-list uk-list-divider">
      {users.map(user => (
        <li className={'list-item ' + (user.active ? 'list-item_active' : '')}
            key={user.id}
            onClick={() => selectUser(user.id)}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {};

export default List;