import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1>Pao's Blog</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create" className="newBlog">
            New Blog
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
