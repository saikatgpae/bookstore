import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import './Navber.css';

function Navbar() {
  return (
    <div>
      <div className="navber">
        <h1 className="text-primary">Bookstore CMS</h1>
        <ul className="nav-menu">
          <li><Link className="books" style={{ textDecoration: 'none' }} to="/">BOOKS</Link></li>
          <li><Link className="categories" style={{ textDecoration: 'none' }} to="/categories">CATEGORIES</Link></li>
        </ul>
        <div className="login-circle">
          <ImUser className="user-login" style={{ fontSize: '20px', marginTop: '2px' }} />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
