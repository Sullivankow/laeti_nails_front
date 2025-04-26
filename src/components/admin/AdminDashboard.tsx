import { Link } from "react-router-dom";
//@ts-expect-error désactivation error ts
import { logout } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
    const navigate = useNavigate();
    // Fonction pour gérer la déconnexion
    const handleLogout = () => {
        logout();
        navigate("/"); // Redirection vers l'accueil après déconnexion
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
                                <a className="nav-link active" aria-current="page" href="#">
                                    <i className="fas fa-chart-line me-2"></i> Tableau de bord
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-calendar-alt me-2"></i> Mes rendez-vous
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-users me-2"></i> Clients
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-spa me-2"></i> Prestations et tarifs
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-boxes me-2"></i> Stocks et Produits
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-user-clock me-2"></i> Employés et Planning
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-euro-sign me-2"></i> Finance
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-bullhorn me-2"></i> Marketing et Promotion
                                </a>
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
                                <a className="nav-link" href="#">
                                    <i className="fas fa-cogs me-2"></i> Paramètres
                                </a>
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
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Dashboard</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group me-2">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Partager</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Exporter</button>
                            </div>
                            <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                Cette semaine
                            </button>
                        </div>
                    </div>

                    <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>

                    <h2>Section title</h2>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1,001</td>
                                    <td>random</td>
                                    <td>data</td>
                                    <td>placeholder</td>
                                    <td>text</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default AdminDashboard;




