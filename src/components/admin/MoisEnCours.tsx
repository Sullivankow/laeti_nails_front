
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Configuration de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MoisEnCours = () => {
    // Données fictives pour le résumé
    const monthlySummary = {
        revenue: "12,000€",
        appointments: 45,
        productsSold: 120,
        newClients: 15,
    };

    // Données fictives pour les graphiques
    const revenueData = {
        labels: ["1 Mai", "5 Mai", "10 Mai", "15 Mai", "20 Mai", "25 Mai", "30 Mai"],
        datasets: [
            {
                label: "Revenus (€)",
                data: [1000, 2000, 3000, 4000, 6000, 8000, 12000],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.4,
            },
        ],
    };

    const revenueOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Revenus du Mois",
            },
        },
    };

    // Données fictives pour les activités récentes
    const recentActivities = [
        { id: 1, type: "Rendez-vous", detail: "Alice Dupont - Manucure", date: "2025-05-10" },
        { id: 2, type: "Vente", detail: "Vernis Rouge x2", date: "2025-05-12" },
        { id: 3, type: "Nouveau Client", detail: "Marie Curie", date: "2025-05-15" },
    ];

    return (
        <Container fluid className="mt-4">
            <Row>
                <Col>
                    <h2 className="text-center mb-4">Mois en Cours</h2>
                </Col>
            </Row>

            {/* Résumé des performances */}
            <Row className="mb-4">
                <Col md={3}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Revenus</Card.Title>
                            <Card.Text className="fs-4 text-success">{monthlySummary.revenue}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Rendez-vous</Card.Title>
                            <Card.Text className="fs-4 text-primary">{monthlySummary.appointments}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Produits Vendus</Card.Title>
                            <Card.Text className="fs-4 text-warning">{monthlySummary.productsSold}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Nouveaux Clients</Card.Title>
                            <Card.Text className="fs-4 text-info">{monthlySummary.newClients}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Graphique des revenus */}
            <Row className="mb-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <Line data={revenueData} options={revenueOptions} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Activités récentes */}
            <Row>
                <Col>
                    <h4 className="mb-3">Activités Récentes</h4>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Type</th>
                                <th>Détail</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentActivities.map((activity) => (
                                <tr key={activity.id}>
                                    <td>{activity.id}</td>
                                    <td>{activity.type}</td>
                                    <td>{activity.detail}</td>
                                    <td>{activity.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            {/* Objectifs du mois */}
            <Row className="mt-4">
                <Col>
                    <h4 className="mb-3">Objectifs du Mois</h4>
                    <Card className="mb-3">
                        <Card.Body>
                            <p>Objectif de revenus : <strong>15,000€</strong> (Progression : 80%)</p>
                            <p>Objectif de rendez-vous : <strong>50</strong> (Progression : 90%)</p>
                            <p>Objectif de ventes : <strong>150 produits</strong> (Progression : 80%)</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default MoisEnCours;