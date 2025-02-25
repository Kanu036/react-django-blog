import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
    const [blog, setBlog] = useState({});
    
    const { id } = useParams();

    useEffect(() => {               
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${id}`);
                setBlog(res.data);
            }
            catch (err) {
                
            }

        };
        fetchData();
    }, [id]);


    const createBlog = () => {
            return {__html: blog.content };
        };    

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
    
    return (
        <div className='container mt-3 '>
            <h1 className='display-2'>{blog.title}</h1>
            <h2 className='text-muted mt-3'>Category: {capitalizeFirstLetter(blog.category)}</h2>
            <div className="mb-1 text-muted">{formatDate(blog?.date_created)}</div>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()} />
            <hr />
            <p className='lead mb-5'>
                < Link to='/blog' className='font-weight-bold' style={{ textDecoration: 'none' }}>
                    Back to Blogs
                </Link>
            </p> 
        </div>
    );
};

export default BlogDetail;