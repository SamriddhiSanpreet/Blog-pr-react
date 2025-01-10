import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import './blogDetail.css'; 

function BlogDetail() {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const blogId = parseInt(id); 
    if (storedBlogs && storedBlogs.length > 0 && blogId >= 0 && blogId < storedBlogs.length) {
      setBlog(storedBlogs[blogId]); 
    } else {
      console.error('Blog not found or invalid index');
    }
  }, [id]);

  if (!blog) {
    return <p className="error">Blog not found or invalid index.</p>; 
  }

  return (
    <div className="blog-detail-container">
      <h2>{blog.title}</h2>
      <p><strong>Date:</strong>{blog.date}</p>
      <p><strong>Author:</strong> {blog.author}</p>
      <p><strong>Email:</strong> {blog.email}</p>
      <p><strong>Phone.no:</strong> {blog.phone}</p>
      <p style={{marginTop:'40px',lineHeight:'1.8',textAlign:'justify'}}>{blog.content}</p> 
    </div>
  );
}

export default BlogDetail;
