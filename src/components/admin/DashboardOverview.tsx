import { Card, Row, Col, ProgressBar, Table } from "react-bootstrap";

function DashboardOverview() {
    return (
        <div className="container mt-4">
            <h1 className="mb-4">Vue d'ensemble</h1>

            {/* Statistiques rapides */}
            <Row className="mb-4">
                <Col md={4}>
                    <Card className="text-center shadow-sm">
                        <Card.Body>
                            <Card.Title>Rendez-vous du jour</Card.Title>
                            <Card.Text>
                                <strong>12</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="text-center shadow-sm">
                        <Card.Body>
                            <Card.Title>Chiffre d'affaires du mois</Card.Title>
                            <Card.Text>
                                <strong>2 500€</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="text-center shadow-sm">
                        <Card.Body>
                            <Card.Title>Nouveaux clients</Card.Title>
                            <Card.Text>
                                <strong>5</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Barre de progression */}
            <Card className="mb-4 shadow-sm">
                <Card.Body>
                    <Card.Title>Objectif du mois</Card.Title>
                    <ProgressBar now={60} label={`60%`} />
                </Card.Body>
            </Card>

            {/* Tableau des prochains rendez-vous */}
            <Card className="shadow-sm">
                <Card.Body>
                    <Card.Title>Prochains rendez-vous</Card.Title>
                    <Table striped hover responsive>
                        <thead>
                            <tr>
                                <th>Client</th>
                                <th>Prestation</th>
                                <th>Date</th>
                                <th>Heure</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Marie Dupont</td>
                                <td>Pose de vernis</td>
                                <td>26 avril 2025</td>
                                <td>14h00</td>
                            </tr>
                            <tr>
                                <td>Julie Martin</td>
                                <td>Manucure complète</td>
                                <td>26 avril 2025</td>
                                <td>15h00</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
}

export default DashboardOverview;
