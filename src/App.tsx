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
import Contact from "./pages/Contact"; // Import de la page Login
import Registration from "./pages/Registration"; // Import de la page Registration
import Reviews from "./pages/Reviews"; // Import de la page formulaire avis
import AdminDashboard from "./components/admin/AdminDashboard";
import DashboardOverview from "./components/admin/DashboardOverview";
import MesRendezVous from "./components/admin/MesRendezVous";
import ClientAdmin from "./components/admin/ClientAdmin";
import MesServices from "./components/admin/MesServices";

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
          {/* Route pour la page de contact */}
          <Route path="/contact" element={<Contact />} />
          {/* Route pour la page d'inscription */}
          <Route path="/registration" element={<Registration />} />
          {/* Route pour la page formulaire avis */}
          <Route path="/review" element={<Reviews />} />

          {/* PARTIE ADMIN */}
          {/* Route pour la page adminDashboard */}
          <Route path="/admin" element={<AdminDashboard />} />
          {/* Route pour la page DashboardOverview */}
          <Route path="/dashboardoverview" element={<DashboardOverview />} />
          {/* Route pour la page MesRendezVous */}
          <Route path="/dashboardmesrendezvous" element={<MesRendezVous />} />
          {/* Route pour la page ClientAdmin */}
          <Route path="/dashboardclientadmin" element={<ClientAdmin />} />
          {/* Route pour la page MesServices */}
          <Route path="/dashboardmeservices" element={<MesServices />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;




