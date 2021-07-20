import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import wrappedInPostsContainer from './hoc/wrappedInPostsContainer';
import PostsProvider from './components/PostsProvider';
import Posts from './components/Posts';
import NewPostForm from './components/NewPostForm';
import PostView from './components/PostView';

const WrappedPosts = wrappedInPostsContainer(Posts),
  WrappedNewPostForm = wrappedInPostsContainer(NewPostForm),
  WrappedPostView = wrappedInPostsContainer(PostView);

function App() {
  return (
    <PostsProvider>
      <Router>
        <div className="App uk-container">
          <Switch>
            <Route exact path='/' component={WrappedPosts}/>
            <Route exact path='/new' component={WrappedNewPostForm}/>
            <Route exact path='/posts/:id([0-9]+)' component={WrappedPostView}/>
          </Switch>
        </div>
      </Router>
    </PostsProvider>
  );
}

export default App;
