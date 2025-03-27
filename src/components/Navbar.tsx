import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <img
          src="src/assets/logo2.png"
          alt="logo_laeti_nail"
          style={{ width: '110px', height: 'auto' }}// Définir la taille ici

        />
        <a className="navbar-brand text-success " style={{ fontFamily: 'Playwrite US Trad, sans-serif', fontSize: '28px' }} href="#">Laeti Nails</a>

        {/* Bouton Burger */}
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

        {/* Menu centré */}
        <div className={`collapse navbar-collapse justify-content-center ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav text-center">

            <li className="nav-item">
              <a className="nav-link" href="#">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">À propos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Formules</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Réservations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Galerie</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>




          </ul>
        </div>

        {/* Bouton Connexion */}
        <div>
          <button className="btn btn-secondary text-light">Connexion</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;





