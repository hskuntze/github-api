import UserCard from "components/UserCard";
import "./styles.css";
import { useState } from "react";
import axios from "axios";
import { User } from "types/user";

type FormData = {
  userName: string;
};

const Search = () => {
  const [formData, setFormData] = useState<FormData>({
    userName: "",
  });
  const [user, setUser] = useState<User>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.userName}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        setUser(undefined);
        console.log(err);
      });
  };

  return (
    <div className="all-container">
      <div className="before-container">
        <h2>Encontre um perfil Github</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Usuário Github"
            onChange={handleChange}
          />
          <div>
            <button type="submit" className="btn btn-primary">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      <div className="user-card">{user && <UserCard user={user} />}</div>
    </div>
  );
};

export default Search;
