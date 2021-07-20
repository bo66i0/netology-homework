import React, {useEffect, useState} from 'react';
import './App.css';
import List from './List';
import Details from './Details';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserInfo, setSelectedUserInfo] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_USERS_URL}/users.json`)
      .then(response => response.json())
      .then(response => setUsers(response))
  }, []);

  function handleUserClick(id) {
    const user = users.find(user => user.id === id);
    setSelectedUserInfo({id: user.id, name: user.name});
    setUsers(prevUsers => prevUsers.map(user => {
      user.active = user.id === id;
      return user;
    }))
  }

  return (
    <div className="App uk-container">
      <div data-uk-grid>
        <div className="uk-width-1-2">
          <List users={users} onUserClick={handleUserClick}/>
        </div>
        <div className="uk-width-1-2">
          {selectedUserInfo && <Details info={selectedUserInfo}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
