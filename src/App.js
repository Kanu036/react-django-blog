import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';  
import Blog from './components/Blog'; 
import BlogDetail from './components/BlogDetail'; 
import Category from './components/Category'; 
import './App.css';


function App() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/background_image4.jpg')", // pulls from public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(228, 243, 200, 0.5)', // dark overlay
          minHeight: '100vh',
          padding: '1rem',
          color: 'white',
        }}
      >
        <Router>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/blog/:id' element={<BlogDetail />} />
              <Route path='/category/:id' element={<Category />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    </div>
  );
}

export default App;