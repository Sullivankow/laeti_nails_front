import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import du routeur
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import IconSection from "./components/IconSection";
import Formules from "./components/Formules";
import Avis from "./components/Avis";
import Reservation from "./components/Reservation";
import Galerie from "./components/Galerie";
import Footer from "./components/Footer";
import Login from "./pages/Login"; // Import de la page Login

function App() {
  return (
    <Router> {/* Déclare le routeur ici */}
      <div>
        {/* Déclare les routes */}
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Hero />
                <About />
                <IconSection />
                <Formules />
                <Avis />
                <Galerie />
                <Reservation />
                <Footer />
              </div>
            }
          />
          
          {/* Route pour la page de connexion */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




