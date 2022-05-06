import "./styles.css";
import { User } from "types/user";

type Usuario = {
  user: User;
};

const UserCard = ({ user }: Usuario) => {
  return (
    <div className="card-user-container">
      <div className="card-image">
        <img src={user.avatar_url} alt={user.name} />
      </div>
      <div className="card-content">
        <div className="info-content">
          <h4>Informações</h4>
          <p>
            <b>Perfil:</b> <a href={user.html_url}>{user.html_url}</a>
          </p>
          <p>
            <b>Seguidores:</b> {user.followers}
          </p>
          <p>
            <b>Localidade:</b> {user.location}
          </p>
          <p>
            <b>Nome:</b> {user.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
