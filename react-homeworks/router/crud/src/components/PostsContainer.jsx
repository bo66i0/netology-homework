import React from 'react';
import PropTypes from 'prop-types';

function PostsContainer(props) {
  return (
    <div className="posts-container">
      {props.children}
    </div>
  );
}

PostsContainer.propTypes = {};

export default PostsContainer;