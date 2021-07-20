import React from 'react';
import {Link} from 'react-router-dom';
import PostsList from './PostsList';
import useFetch from '../hooks/useFetch';

function Posts() {
  const [posts] = useFetch(process.env.REACT_APP_POSTS_URL);

  return (
    <div className='posts'>
      <div className="posts-header">
        <Link to='/new' className='uk-button uk-button-primary'>Создать пост</Link>
      </div>
      {posts && <PostsList posts={posts}/>}
    </div>
  );
}

export default Posts;