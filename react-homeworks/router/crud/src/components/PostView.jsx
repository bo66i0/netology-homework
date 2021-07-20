import React, {useContext, useState} from 'react';
import PostsContext from '../contexts/PostsContext';
import useFetch from "../hooks/useFetch";

function PostView({match, history}) {
  const postId = Number(match.params.id),
    {handleRemove, handleEditPost} = useContext(PostsContext),
    [isEditing, setIsEditing] = useState(false),
    [post, setPost] = useFetch(`${process.env.REACT_APP_POSTS_URL}/${postId}`);

  function switchPostToEditing() {
    setIsEditing(true);
  }

  const handleFormChange = ({target}) => {
    setPost(prevPost => ({...prevPost, [target.name]: target.value}));
  };

  function editPost(event) {
    handleEditPost(event, post);
    setIsEditing(false);
  }

  if(post) {
    return (
      !isEditing ? (
        <div className="post-view">
          <div className="post-view__content">
            {post.content}
          </div>
          <div className="post-view-controls">
            <button
              className="uk-button uk-button-primary uk-button-small"
              onClick={switchPostToEditing}>
              Редактировать
            </button>
            <button
              className="uk-button uk-button-primary uk-button-small uk-margin-small-left"
              onClick={() => handleRemove(post.id, history)}>
              Удалить
            </button>
          </div>
        </div>
      ) : (
        <form className="post-edit-view" onSubmit={event => editPost(event)}>
          <textarea
            className="post-edit-view__textarea uk-textarea"
            name="content"
            onChange={handleFormChange} value={post.content} />
          <div className="post-edit-view-controls">
            <button
              className="uk-button uk-button-primary uk-button-small uk-margin-small-top">
              Сохранить
            </button>
          </div>
        </form>
      )
    );
  } else {
    return null;
  }
}

export default PostView;