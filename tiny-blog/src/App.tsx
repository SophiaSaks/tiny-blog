import { useState } from 'react';
import './App.css';
// import axios from 'axios';
// import { useState, useEffect } from 'react'; 
import BlogCards from './components/BlogCards';
import Blog from './types';
import fakePosts from './mockData';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

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
    <Routes>
        <Route path='/' element={
          <main>
              <Navbar />
              <BlogCards blogPosts={posts} />
            </main>
        }/>
         <Route path='/All' element={
          <main>
              <Navbar />
              <BlogCards blogPosts={posts} />
            </main>
        }/>
        <Route path='/Crime' element={
          <main>
              <Navbar />
              <BlogCards blogPosts={posts.filter(post => post.tags.includes('crime'))} />
            </main>
        }/>
         <Route path='/Magical' element={
          <main>
              <Navbar />
              <BlogCards blogPosts={posts.filter(post => post.tags.includes('magical'))} />
            </main>
        }/>
        <Route path='/Mystery' element={
          <main>
              <Navbar />
              <BlogCards blogPosts={posts.filter(post => post.tags.includes('mystery'))} />
            </main>
        }/>
    </Routes>
    
  );
}

{/* <div className="App">
    <Navbar />
    <BlogCards blogPosts={posts} /> 
</div> */}

export default App;
