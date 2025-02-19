import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
    <div className='container'>
        
        <h1 className='display-4'> Welcome to Blog Tales</h1>
        <p className='lead'>There are various kinds of awesome blog about various topics</p>
        <hr className='my-4'></hr>
        <p>Clicks the button below to check out our awesome blog. </p>
        <Link className='btn btn-primary btn-lg' to='/blog' role="button"> Check out our Blog</Link>
        
            
    </div>
);

export default Home;