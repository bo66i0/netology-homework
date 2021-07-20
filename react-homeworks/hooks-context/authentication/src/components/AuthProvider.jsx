import React, {useState} from 'react';
import AuthContext from '../contexts/AuthContext';
import useStorage from '../hooks/useStorage';

function AuthProvider(props) {
  const [token, setToken] = useStorage(localStorage,'token');
  const [profile, setProfile] = useStorage(localStorage,'profile', true);
  const [error, setError] = useState(null);

  const handleLogin = async (login, password) => {
    try {
      const responseAuth = await fetch(process.env.REACT_APP_AUTH_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({login, password}),
      });
      if(!responseAuth.ok) {
        throw new Error('Ошибка авторизации');
      }
      const {token} = await responseAuth.json();
      setToken(token);
      const responseProfile = await fetch(process.env.REACT_APP_USER_INFO_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      if(!responseProfile.ok) {
        throw new Error('Ошибка: Неверный токен');
      }

      const profile = await responseProfile.json();
      setProfile({...profile});
    } catch(e) {
      setError(e.message);
    }
  };

  const handleLogout = () => {
    setToken(null);
    setProfile(null);
  };

  return (
    <AuthContext.Provider value={{handleLogin, handleLogout, token, profile, error, setError}}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;