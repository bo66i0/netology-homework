import React, {useContext, useState} from 'react';
import AuthContext from '../contexts/AuthContext';

function HeaderLoginForm() {
  const {handleLogin, error} = useContext(AuthContext);
  const [form, setForm] = useState({});

  function handleChange ({target}) {
    setForm(prevForm => ({...prevForm, [target.name] : target.value}));
  }

  function onSubmit(evt) {
    evt.preventDefault();
    handleLogin(form.username, form.password);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        className="uk-input uk-form-width-medium"
        name="username"
        placeholder="Username"
        onChange={handleChange}/>
      <input
        className="uk-input uk-form-width-medium uk-margin-small-left"
        name="password"
        placeholder="Password"
        onChange={handleChange}/>
      <button className="uk-button uk-button-primary  uk-margin-small-left">Login</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default HeaderLoginForm;