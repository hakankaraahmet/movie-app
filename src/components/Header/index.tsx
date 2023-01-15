import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div>
        <img src={user} alt="user" className="user-image" />
      </div>
    </div>
  );
};

export default Header;
