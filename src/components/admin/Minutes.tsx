
import { Container, Row, Col, Card, Table } from "react-bootstrap";

const Minutes = () => {
    // Données fictives pour les activités récentes
    const recentActivities = [
        { id: 1, type: "Rendez-vous", detail: "Alice Dupont - Manucure", time: "14:45" },
        { id: 2, type: "Vente", detail: "Vernis Rouge x2", time: "14:50" },
        { id: 3, type: "Nouveau Client", detail: "Marie Curie", time: "14:55" },
    ];

    // Données fictives pour les alertes
    const alerts = [
        { id: 1, message: "Annulation de rendez-vous : Sophie Martin", time: "14:40" },
        { id: 2, message: "Stock faible : Vernis Bleu", time: "14:50" },
    ];

    // Données fictives pour les statistiques
    const stats = {
        revenue: "150€",
        appointments: 3,
        productsSold: 5,
    };

    return (
        <Container fluid className="mt-4">
            <Row>
                <Col>
                    <h2 className="text-center mb-4">Activités des 15 Dernières Minutes</h2>
                </Col>
            </Row>

            {/* Statistiques en temps réel */}
            <Row className="mb-4">
                <Col md={4}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Revenus</Card.Title>
                            <Card.Text className="fs-4 text-success">{stats.revenue}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Rendez-vous</Card.Title>
                            <Card.Text className="fs-4 text-primary">{stats.appointments}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Produits Vendus</Card.Title>
                            <Card.Text className="fs-4 text-warning">{stats.productsSold}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Activités récentes */}
            <Row className="mb-4">
                <Col>
                    <h4 className="mb-3">Activités Récentes</h4>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Type</th>
                                <th>Détail</th>
                                <th>Heure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentActivities.map((activity) => (
                                <tr key={activity.id}>
                                    <td>{activity.id}</td>
                                    <td>{activity.type}</td>
                                    <td>{activity.detail}</td>
                                    <td>{activity.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            {/* Alertes récentes */}
            <Row>
                <Col>
                    <h4 className="mb-3">Alertes Récentes</h4>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Message</th>
                                <th>Heure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alerts.map((alert) => (
                                <tr key={alert.id}>
                                    <td>{alert.id}</td>
                                    <td>{alert.message}</td>
                                    <td>{alert.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Minutes;