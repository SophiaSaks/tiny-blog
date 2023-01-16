import { useState } from 'react';
import './App.css';
// import axios from 'axios';
// import { useState, useEffect } from 'react'; 
import BlogCard from './components/BlogCard';
import Blog from './types';
import fakePosts from './mockData';

function App() {

  const [posts, setPosts] = useState<Blog[]>(fakePosts);

  // const getBlogPost = () => {
  //   axios.get('https://dummyjson.com/posts')
  //   .then(res => {
  //     console.log(res.data)
  //     setBlogPost(res.data);
  // })
  // .catch(err => {
  //     console.log(err)
  // })
  // }

  // useEffect(() => {
  //   getBlogPost();
  // }, []);

  return (
    <div className="App">
      <BlogCard blogPosts={posts} /> 
    </div>
  );
}

export default App;
