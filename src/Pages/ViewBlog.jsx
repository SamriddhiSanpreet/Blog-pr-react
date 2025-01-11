import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './viewBlog.css';

function ViewBlog() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  // Filter blogs based on the search term
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort blogs based on the selected sort option
  const sortedBlogs = filteredBlogs.sort((a, b) => {
    if (sortOption === 'title-asc') {
      return a.title.localeCompare(b.title);
    } else if (sortOption === 'title-desc') {
      return b.title.localeCompare(a.title);
    } else if (sortOption === 'author-asc') {
      return a.author.localeCompare(b.author);
    } else if (sortOption === 'author-desc') {
      return b.author.localeCompare(a.author);
    }
    return 0;
  });

  return (
    <div className="view-blog-container">
      <h2>View Blogs</h2>

      <div className="search-and-sort">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="sort-dropdown"
        >
          <option value="">Sort By</option>
          <option value="title-asc">Title (A-Z)</option>
          <option value="title-desc">Title (Z-A)</option>
          <option value="author-asc">Author (A-Z)</option>
          <option value="author-desc">Author (Z-A)</option>
        </select>
      </div>

      {sortedBlogs.length > 0 ? (
        <div className="blog-posts-container">
          {sortedBlogs.map((blog, index) => (
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
