import React from 'react';
import PostsContext from '../contexts/PostsContext';

function PostsProvider(props) {
  const handleRemove = (id, history) => {
    fetch(`${process.env.REACT_APP_POSTS_URL}/${id}`, {
      method: 'DELETE'
    }).then(() => {
      history.push(`/`);
    });
  };

  const sendPost = (form) => {
    return fetch(process.env.REACT_APP_POSTS_URL, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(form)
    })
  };

  const handleAddPost = (event, form, history) => {
    event.preventDefault();
    sendPost(form)
      .then(() => {
        history.push(`/`);
      });
  };

  const handleEditPost = (event, form) => {
    event.preventDefault();
    sendPost(form);
  };

  return (
    <PostsContext.Provider value={{handleRemove, handleAddPost, handleEditPost}}>
      {props.children}
    </PostsContext.Provider>
  );
}

export default PostsProvider;