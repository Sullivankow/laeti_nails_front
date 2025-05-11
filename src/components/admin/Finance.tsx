


import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Configuration de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Finance = () => {
    // Données fictives pour le résumé financier
    const financialSummary = {
        totalRevenue: "15,000€",
        totalExpenses: "5,000€",
        netProfit: "10,000€",
    };

    // Données fictives pour les transactions
    const transactions = [
        { id: 1, date: "2025-05-01", type: "Vente", amount: "200€", method: "CB", client: "Alice Dupont" },
        { id: 2, date: "2025-05-02", type: "Remboursement", amount: "-50€", method: "Espèces", client: "Marie Curie" },
        { id: 3, date: "2025-05-03", type: "Vente", amount: "300€", method: "CB", client: "Sophie Martin" },
    ];

    // Données fictives pour le graphique des revenus
    const chartData = {
        labels: ["Janvier", "Février", "Mars", "Avril", "Mai"],
        datasets: [
            {
                label: "Revenus (€)",
                data: [5000, 7000, 8000, 6000, 15000],
                backgroundColor: "#C492B1",
                borderColor: "#E8B4BC",
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Évolution des Revenus",
            },
        },
    };

    return (
        <Container fluid className="mt-4">
            <Row>
                <Col>
                    <h2 className="text-center mb-4">Gestion Financière</h2>
                </Col>
            </Row>

            {/* Résumé financier */}
            <Row className="mb-4">
                <Col md={4}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Revenus Totaux</Card.Title>
                            <Card.Text className="fs-4 text-success">{financialSummary.totalRevenue}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Dépenses Totales</Card.Title>
                            <Card.Text className="fs-4 text-danger">{financialSummary.totalExpenses}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Bénéfices Nets</Card.Title>
                            <Card.Text className="fs-4 text-primary">{financialSummary.netProfit}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Graphique des revenus */}
            <Row className="mb-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <Bar data={chartData} options={chartOptions} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Tableau des transactions */}
            <Row>
                <Col>
                    <h4 className="mb-3">Transactions</h4>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Montant</th>
                                <th>Méthode</th>
                                <th>Client</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td>{transaction.id}</td>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.type}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.method}</td>
                                    <td>{transaction.client}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            {/* Bouton pour générer un rapport */}
            <Row className="mt-4">
                <Col className="text-center">
                    <Button variant="primary text-white mb-4">Générer un Rapport</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Finance;