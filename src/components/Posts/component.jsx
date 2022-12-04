import { useEffect } from 'react';
import { connect } from 'react-redux';

import Post from './Post';

import { setPosts } from '../../store/posts/actions';
import { selectPosts, selectPostsCount } from '../../store/posts/selector';


import './styles.css';


const Posts = ({ posts, setPosts, count }) => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(data => setPosts(data))
  }, [])
  return (
    <>
    <h2>Count: {count}</h2>
      <ul className="list">
      <div>{}</div>
      {posts.map(post => <Post key={post.id} {...post} />)}
    </ul>
    </>
  )
}

const mapStateToProps = state => ({
  posts: selectPosts(state),
  count: selectPostsCount(state),
})

const mapDispatchToProps = {
  setPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
