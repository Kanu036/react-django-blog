import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Category = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');

    
    const { id } = useParams();
    
    useEffect(() => {        
        setCurrentCategory(capitalizeFirstLetter(id));
        setBlogs([]);

        const config = {
            headers: {
                'content-Type': 'application/json'

            },
        };

        const fetchData = async () => {
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category`, { category: id }, config);
                console.log("API Response:", res.data);
                setBlogs(Array.isArray(res.data) ? res.data : []);
                                
            }
            catch (err) {
                setBlogs([]);
                
            }
        };
        
        fetchData(); 
    }, [id]);

    
    
    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';

    };

    const formatDate = (dateString) => {
        if (!dateString) return "Unknown Date";
        const parsedDate = new Date(dateString);
        return isNaN(parsedDate.getTime()) 
            ? "Unknown Date" 
            : parsedDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
        };

    const getCategoryBlogs = () => {
        if (!blogs || blogs.length === 0) {
            return (
                <div className="alert alert-info text-center">
                    No blogs posts available in this category.
                </div>
            );
        }

        let list = [];
        let result = [];

        blogs.forEach(blogPost => {
            list.push(
        
                <div key={blogPost.slug} className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative ">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary-emphasis">{capitalizeFirstLetter(blogPost.category)}</strong>
                        <h3 className="mb-0 blog-title">{blogPost.title}</h3>
                        <div className="mb-1 text-muted">{formatDate(blogPost?.date_created)}</div>
                        <p className="card-text mb-auto excerpt-text">{blogPost.excerpt}.</p>
                        <Link to={`/blog/${blogPost.slug}`} className=" custom-link stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width='200' height='250' src={`${process.env.REACT_APP_API_URL}${blogPost.thumbnail}`} alt='thumbnail' />
                    </div>
                </div>
            );
        });
            
        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2 d-flex flex-wrap'>
                    <div className='col-md-6'>{list[i]}</div>
                        {list[i + 1] && <div className='col-md-6'> {list[i + 1]}</div>}                    
                </div>
            );
        }

        return result;        

    };

    return (
    <div className='container mt-3'>            
        <h3 className='display-4'> {currentCategory} Category</h3>
        <div className="nav-scroller py-1 mb-3 border-bottom">
            <nav className="nav nav-underline justify-content-between">
                <Link className="nav-item nav-link link-body-emphasis" to='/category/world'>World</Link>
                <Link className="nav-item nav-link link-body-emphasis" to='/category/environment'>Environment</Link>
                <Link className="nav-item nav-link link-body-emphasis" to='/category/technology'>Technology</Link>
                <Link className="nav-item nav-link link-body-emphasis" to='/category/design'>Design</Link>
                <Link className="nav-item nav-link link-body-emphasis" to='/category/culture'>Culture</Link>
                <Link className="nav-item nav-link link-body-emphasis" to='/category/business'>Business</Link>
                <Link className="nav-item nav-link link-body-emphasis" to='/category/politics'>Politics</Link>
                <Link className="nav-item nav-link link-body-emphasis" to='/category/opinion'>Opinion</Link>
                <Link className="nav-item nav-link link-body-emphasis" to='/category/science'>Science</Link>
                <Link className="nav-item nav-link link-body-emphasis" to='/category/health'>Health</Link>
                <Link className="nav-item nav-link link-body-emphasis" to='/category/style'>Style</Link>
                <Link className="nav-item nav-link link-body-emphasis" to='/category/travel'>Travel</Link>
            </nav>
        </div>
        {getCategoryBlogs()}
    </div>
    );
};

export default Category;