import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blog");

  return (
    <div className="Home">
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {blog && <BlogList blog={blog} title="List of posts" />}
    </div>
  );
};

export default Home;
