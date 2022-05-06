import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container bg-primary">
      <Link to="/">
        <h1>GitHub API</h1>
      </Link>
    </div>
  );
};

export default Navbar;
