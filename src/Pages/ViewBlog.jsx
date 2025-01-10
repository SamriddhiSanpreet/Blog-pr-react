import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './viewBlog.css';

function ViewBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  return (
    <div className="view-blog-container">
      <h2>View Blogs</h2>
      {blogs.length > 0 ? (
        <div className="blog-posts-container">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-post">
              
              <Link to={`/blogs/${index}`}>
                <h3>{blog.title}</h3>
                <p><strong>Author:</strong> {blog.author}</p>
                <p>{blog.content.slice(0, 100)}...</p> 
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-blogs">No blogs available. Please add a blog from the form.</p>
      )}
    </div>
  );
}

export default ViewBlog;
