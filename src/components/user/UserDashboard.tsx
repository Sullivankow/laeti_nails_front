import { Link, useNavigate } from "react-router-dom";
// @ts-expect-error désactivation error ts
import { logout } from "../../utils/auth";
import { useState } from "react";
import DashboardOverview from "./DashboardOverview";

function UserDashboard() {
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
                                <button className="nav-link text-start border-0  w-100" onClick={() => setSelectedView("informations")}>
                                    <i className="fas fa-users me-2"></i> Mes informations
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-start border-0  w-100" onClick={() => setSelectedView("prestations")}>
                                    <i className="fas fa-spa me-2"></i> Mes prestations
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-start border-0  w-100" onClick={() => setSelectedView("avis")}>
                                    <i className="fas fa-boxes me-2"></i> Mes avis
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-start border-0  w-100" onClick={() => setSelectedView("employees")}>
                                    <i className="fas fa-user-clock me-2"></i> Messages / Contact
                                </button>
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
                </main>
            </div>
        </div>
    );
}

export default UserDashboard;