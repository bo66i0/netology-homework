import React, {useContext} from 'react';
import AuthContext from '../contexts/AuthContext';
import HeaderLoginForm from './HeaderLoginForm';
import HeaderUserBlock from './HeaderUserBlock';

function Header() {
  const {profile} = useContext(AuthContext);

  return (
    <header className="header uk-navbar-container" data-uk-navbar>
      <div className="uk-navbar-left">
        <a href="#" className="uk-navbar-item uk-logo">Logo</a>
      </div>
      <div className="uk-navbar-right">
        {profile === null
          ? <div className="uk-navbar-item"><HeaderLoginForm/></div>
          : <HeaderUserBlock/>}
      </div>
    </header>
  );
}

export default Header;