import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blog, setBlog] = useState(null);

  const handleDelete = (id) => {
    const newBlog = blog.filter((blogs) => blogs.id !== id);
    setBlog(newBlog);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blog")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlog(data);
      });
  }, []);

  return (
    <div className="Home">
      <BlogList blog={blog} title="List of posts" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
