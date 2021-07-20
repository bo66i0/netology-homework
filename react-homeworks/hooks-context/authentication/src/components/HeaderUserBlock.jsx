import React, {useContext} from 'react';
import AuthContext from '../contexts/AuthContext';

function HeaderUserBlock() {
  const {profile, handleLogout} = useContext(AuthContext);

  return (
    <div className="uk-navbar-item">
      <div>Hello, {profile.name}</div>
      <img className="user-avatar uk-margin-small-left" src={profile.avatar} alt=""/>
      <button
        onClick={() => handleLogout()}
        className="uk-button uk-button-primary uk-margin-small-left">
        Logout
      </button>
    </div>
  );
}

export default HeaderUserBlock;