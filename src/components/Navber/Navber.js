import { Link } from 'react-router-dom';
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
      </div>
    </div>
  );
}
export default Navbar;
