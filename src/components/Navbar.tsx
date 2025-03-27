import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <a className="navbar-brand text-white" href="#">Laeti Nails</a>

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
              <a className="nav-link text-white" href="#">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">À propos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-white" aria-disabled="true">Formules</a>
                      </li>
                      <li className="nav-item">
              <a className="nav-link disabled text-white" aria-disabled="true">Réservations</a>
                      </li>
                      <li className="nav-item">
              <a className="nav-link disabled text-white" aria-disabled="true">Galeries</a>
                      </li>
                      <li className="nav-item">
              <a className="nav-link disabled text-white" aria-disabled="true">Contact</a>
            </li>
          </ul>
        </div>

        {/* Bouton Connexion */}
        <div>
          <button className="btn btn-secondary">Connexion</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

  



  