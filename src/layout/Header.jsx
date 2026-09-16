import { NavLink } from "react-router-dom";
import '../css/layout/Header.css';

const Header = () => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" className="nav-item">Produtos</NavLink>
          </li>
          <li>
            <NavLink to="/contato" className="nav-item">Contato</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
