import React, {useContext} from 'react';
import MainPage from './MainPage';
import News from './News';
import AuthContext from '../contexts/AuthContext';

function Content() {
  const {profile} = useContext(AuthContext);

  return (
    !profile ? <MainPage/> : <News/>
  );
}

export default Content;