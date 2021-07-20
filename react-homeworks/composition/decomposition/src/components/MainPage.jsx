import React from 'react';
import PropTypes from 'prop-types';
import News from './News';
import Search from './Search';
import Advertising from './Advertising';
import InfoBlock from './InfoBlock';
import BottomWidgets from './BottomWidgets';

//главная страница сайта
function MainPage(props) {
  return (
    <>
      <News/>
      <InfoBlock img={'123.png'} title={'qweasd'} link={'/123'} text={'qweasdzdxc'}/>
      <Search/>
      <Advertising img={'123.png'}/>
      <BottomWidgets/>
    </>
  );
}

MainPage.propTypes = {};

export default MainPage;