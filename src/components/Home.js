import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className='container d-flex flex-column justify-content-center align-items-center py-5'>
    <h1 className='display-3 font-weight-bold text-center mb-4'>
      Welcome to Blog Tales
    </h1>
    
    <p className='lead text-center mb-5'>
      Explore a variety of awesome blogs on topics ranging from technology, lifestyle, health, and more.
    </p>
    
    <p className='text-center mb-4'>
      Click the button below to dive into our amazing collection of blog posts.
    </p>
    
    <Link className='btn btn-primary btn-lg shadow' to='/blog' role='button'>
      Check Out Our Blog
    </Link>
    
    <div className='mt-5'>
      <p className='text-muted text-center'>
        Created with ❤️ to inspire and share knowledge.
      </p>
    </div>
  </div>
);

export default Home;
