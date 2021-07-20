import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

function Menu() {
  const [links, setLinks] = useState([
    {name: 'Главная', link: '/'},
    {name: 'Дрифт-такси', link: '/drift'},
    {name: 'Time Attack', link: '/timeattack'},
    {name: 'Forza Karting', link: '/forza'},
  ]);

  return (
    <nav className="menu">
      {links.map(link => (
        <NavLink
          exact
          to={link.link}
          className="menu__item"
          activeClassName="menu__item-active">
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}

Menu.propTypes = {};

export default Menu;