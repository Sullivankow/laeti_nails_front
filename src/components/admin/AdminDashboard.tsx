

function AdminDashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                    <div className="position-sticky pt-3">
                        <h5 className="text-center">Company Name</h5>
                        <ul className="nav flex-column mt-4">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Dashboard
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Orders
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Products
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Customers
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Reports
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Integrations
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
                                    Current month
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Last quarter
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Social engagement
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Year-end sale
                                </a>
                            </li>
                        </ul>

                        <hr />

                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Settings
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Sign out
                                </a>
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
                                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                            </div>
                            <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                This week
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
                                {/* Ajoute d'autres lignes ici */}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default AdminDashboard;


