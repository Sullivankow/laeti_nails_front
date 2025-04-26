import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//@ts-expect-error désactivation error ts
import { getAuth, logout } from "../utils/auth.js";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    setIsAuthenticated(!!auth.token);
  }, []);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid d-flex justify-content-between align-items-center">

        {/* Logo */}
        <div className="d-flex align-items-center">
          <img
            src="src/assets/logo2.png"
            alt="logo_laeti_nail"
            style={{ width: '110px', height: 'auto' }}
          />
          <a className="navbar-brand text-success ms-2"
            style={{ fontFamily: 'Playwrite US Trad, sans-serif', fontSize: '28px' }}
            href="#"
          >
            Laeti Nails
          </a>
        </div>

        {/* Menu centré */}
        <div className={`collapse navbar-collapse justify-content-center ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item"><a className="nav-link" href="/">Accueil</a></li>
            <li className="nav-item"><a className="nav-link" href="#about-section">À propos</a></li>
            <li className="nav-item"><a className="nav-link" href="#formules-section">Formules</a></li>
            <li className="nav-item"><a className="nav-link" href="#galerie-section">Galerie</a></li>
            <li className="nav-item"><a className="nav-link" href="#reservation-section">Réservation</a></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>

        {/* Profil à droite */}
        <div className="d-flex align-items-center position-relative ms-3">
          {!isAuthenticated ? (
            <button className="btn btn-secondary text-light">
              <Link to="/login" className="text-light text-decoration-none">Connexion</Link>
            </button>
          ) : (
            <div className="position-relative me-3">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="btn bg-transparent border-0 p-0"
                style={{ cursor: 'pointer' }}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                aria-label="Menu utilisateur"
              >
                <i className="fas fa-user-circle fa-2x text-white profile-icon"></i>
              </button>

              {/* Menu déroulant du profil */}
              {dropdownOpen && (
                <div
                  className={`dropdown-menu-custom ${dropdownOpen ? "show" : ""}`}
                >
                  <ul className="list-unstyled mb-0">
                    <li className="nav-item">
                      <Link to="/admin" className="nav-link">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                      <button
                        onClick={handleLogout}
                        className=" nav-link"
                      >
                        Déconnexion
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>



        {/* Burger menu pour mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      </div>
    </nav >
  );
}

export default Navbar;








