import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';  
import Blog from './components/Blog'; 
import BlogDetail from './components/BlogDetail'; 
import Category from './components/Category'; 
import './App.css';


const App = () => (
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

);

export default App;