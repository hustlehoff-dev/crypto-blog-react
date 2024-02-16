const BlogList = ({ blog, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title} </h2>
      {blog.map((blogs) => (
        <div className="blog-preview" key={blogs.id}>
          <h2>{blogs.title}</h2>
          <p>Written by: {blogs.author}</p>
          <button onClick={() => handleDelete(blogs.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
