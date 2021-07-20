import React, {useEffect, useContext, useState} from 'react';
import AuthContext from '../contexts/AuthContext';

function News() {
  const [news, setNews] = useState([]);
  const {token, handleLogout, setError} = useContext(AuthContext);

  useEffect(() => {
    fetch(process.env.REACT_APP_NEWS_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        if(!response.ok) {
          if(response.status === 401) {
            throw new Error('401');
          }
        }
        return response;
      })
      .then(response => response.json())
      .then(response => setNews(response))
      .catch(error => {
        if(error.message === '401')
        handleLogout();
        setError('Ошибка авторизации')
      });
  }, [token, handleLogout, setError]);


  return (
    <div className="news uk-child-width-1-2@m" data-uk-grid>
      {news.map(newsItem => (
        <div key={newsItem.id}>
          <div className="news-item uk-card uk-card-default">
            <div className="uk-card-media-top">
              <img src={newsItem.image} alt=""/>
            </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">{newsItem.title}</h3>
              <p>{newsItem.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;