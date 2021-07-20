import React from 'react';

export default function wrappedInPostsContainer(Component) {
  const WrappedInPostsContainer = props => {
    return (
      <div className="posts-container">
        <Component {...props}/>
      </div>
    )
  };
  WrappedInPostsContainer.displayName = `wrappedInPosts(${Component.displayName || Component.name})`;
  return WrappedInPostsContainer;
}