import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blog, setBlog] = useState([
    {
      title: "How to center a div?",
      body: "Centering a div is quite an easy...",
      author: "Hustlehoff",
      id: 1,
    },
    {
      title: "Trying new things",
      body: "You do not know until you try yourself that...",
      author: "Apple",
      id: 2,
    },
    {
      title: "An awful shit",
      body: "Lets discuss something ,that is really...",
      author: "Hustlehoff",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlog = blog.filter((blogs) => blogs.id !== id);
    setBlog(newBlog);
  };

  return (
    <div className="Home">
      <BlogList blog={blog} title="List of posts" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
