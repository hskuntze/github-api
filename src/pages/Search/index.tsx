import Navbar from "pages/Navbar";
import "./styles.css";

const Search = () => {
  return (
    <>
      <Navbar />
      <div className="all-container">
        <div className="before-container">
          <h2>Encontre um perfil Github</h2>
          <form>
            <input
              type="text"
              name="user"
              id="user"
              placeholder="Usuário Github"
            />
            <div>
              <button type="submit" className="btn btn-primary">
                Encontrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
