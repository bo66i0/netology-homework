import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';

function Details({info}) {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_USERS_URL}/${info.id}.json`)
      .then(response => response.json())
      .then(response => setUser(response))
      .then(() => setIsLoading(false));

  }, [info.id]);

  return (
    <div className="details uk-card uk-card-default">
      {isLoading ? <div className="details__spinner" data-uk-spinner/>
        : <>
          <div className="uk-card-media-top details__top">
            <img src={user.avatar} alt=""/>
          </div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">{user.name}</h3>

            <ul className="list uk-list uk-list-divider">
              <li>city: {user.details.city}</li>
              <li>company: {user.details.company}</li>
              <li>position: {user.details.position}</li>
            </ul>
          </div>
        </>}
    </div>
  );
}

Details.propTypes = {};

export default Details;