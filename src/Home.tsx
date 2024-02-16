import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blog, setBlog] = useState(null);

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
      {blog && <BlogList blog={blog} title="List of posts" />}
    </div>
  );
};

export default Home;
