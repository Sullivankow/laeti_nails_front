import { Link, useNavigate } from "react-router-dom";
// @ts-expect-error désactivation error ts
import { logout } from "../../utils/auth";
import DashboardOverview from "./DashboardOverview";
import MesRendezVous from "./MesRendezVous";
import { useState } from "react";
import ClientAdmin from "./ClientAdmin";
import MesServices from "./MesServices";

function AdminDashboard() {
    const navigate = useNavigate();
    const [selectedView, setSelectedView] = useState("dashboard"); // Gérer l'état pour afficher les différentes sections


    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar min-vh-100">
                    <div className="position-sticky pt-3">
                        <h5 className="text-center">Laeti Nails</h5>
                        <ul className="nav flex-column mt-4">
                            <li className="nav-item">
                                <button className="nav-link text-start border-0  w-100" onClick={() => setSelectedView("dashboard")}>
                                    <i className="fas fa-chart-line me-2"></i> Tableau de bord
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-start border-0  w-100" onClick={() => setSelectedView("appointments")}>
                                    <i className="fas fa-calendar-alt me-2"></i> Mes rendez-vous
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-start border-0  w-100" onClick={() => setSelectedView("clients")}>
                                    <i className="fas fa-users me-2"></i> Clients
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-start border-0  w-100" onClick={() => setSelectedView("services")}>
                                    <i className="fas fa-spa me-2"></i> Prestations et tarifs
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-start border-0  w-100" onClick={() => setSelectedView("stocks")}>
                                    <i className="fas fa-boxes me-2"></i> Stocks et Produits
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-start border-0  w-100" onClick={() => setSelectedView("employees")}>
                                    <i className="fas fa-user-clock me-2"></i> Employés et Planning
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-start border-0  w-100" onClick={() => setSelectedView("finance")}>
                                    <i className="fas fa-euro-sign me-2"></i> Finance
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-start border-0  w-100" onClick={() => setSelectedView("marketing")}>
                                    <i className="fas fa-bullhorn me-2"></i> Marketing et Promotion
                                </button>
                            </li>
                        </ul>

                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center mt-4 mb-1 text-muted">
                            <span>Saved reports</span>
                            <a className="link-secondary" href="#" aria-label="Add a new report">
                                +
                            </a>
                        </h6>

                        <ul className="nav flex-column mb-2">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-calendar me-2"></i> Mois en cours
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-calendar-week me-2"></i> Il y a 15 min
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-heart me-2"></i> Engagement social
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-tags me-2"></i> Soldes de fin d'année
                                </a>
                            </li>
                        </ul>

                        <hr />

                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <button className="nav-link text-start border-0  w-100" onClick={() => setSelectedView("settings")}>
                                    <i className="fas fa-cogs me-2"></i> Paramètres
                                </button>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    <i className="fas fa-solid fa-house me-2"></i> Accueil
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" onClick={handleLogout}>
                                    <i className="fas fa-sign-out-alt me-2"></i> Déconnexion
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Main content */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-3">
                    {/* Affichage dynamique du contenu */}
                    {selectedView === "dashboard" && <DashboardOverview />}
                    {/* Autres sections peuvent être ajoutées ici selon l'état */}
                    {selectedView === "appointments" && <MesRendezVous />}
                    {selectedView === "clients" && <ClientAdmin />}
                    {selectedView === "services" && <MesServices />}
                </main>
            </div>
        </div>
    );
}

export default AdminDashboard;








