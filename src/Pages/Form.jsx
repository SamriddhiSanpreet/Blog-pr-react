import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    date: '',
    phone: '',
    email: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    localStorage.setItem('blogs', JSON.stringify([...existingBlogs, formData])); 
    alert('Blog saved successfully!'); 
    setFormData({ title: '', author: '', content: '', date: '', phone: '', email: '' }); 
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Blog Title</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} placeholder="Enter blog title" required/>
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} placeholder="Enter author name" required/>
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea id="content" name="content" rows="6" value={formData.content} onChange={handleChange} placeholder="Write your blog here..." required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
