import React from 'react';
import Video from './Video';
import Article from './Article';
import {withWrap} from '../hoc/withWrap';

const WrappedVideo = withWrap(Video);
const WrappedArticle = withWrap(Article);

function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <WrappedVideo key={item.url || item.title} {...item}/>
        );

      case 'article':
        return (
          <WrappedArticle key={item.url || item.title} {...item}/>
        );
    }
  });
}

export default List;