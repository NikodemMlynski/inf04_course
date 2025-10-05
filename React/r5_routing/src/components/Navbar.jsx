import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">Moja Aplikacja</Link>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link to="/" className="nav-link">Strona główna</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">O nas</Link></li>
            <li className="nav-item"><Link to="/products" className="nav-link">Produkty</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Kontakt</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
