import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="home-content-container">
          <h1>Desafio Github API</h1>
          <h4>Bootcamp Spring React - DevSuperior</h4>
        </div>
        <div className="home-button-container">
          <Link to="/search">
            <button
              type="button"
              className="btn btn-primary"
              style={{ color: "#FFF" }}
            >
              Começar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
