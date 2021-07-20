import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostsList({posts}) {
  if(!posts) {
    return null;
  }

  return (
    <div className="posts-list">
      {posts.map(post => (
        <Post key={post.id} post={post}/>
      ))}
    </div>
  );
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;