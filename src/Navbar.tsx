import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Cryptocurrency Blog</h1>
      <div className="links">
        <Link to="/">Start</Link>
        <Link to="/create">New blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
