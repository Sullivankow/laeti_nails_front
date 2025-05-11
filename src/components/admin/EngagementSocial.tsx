
import { Container, Row, Col, Card, Table } from "react-bootstrap";

const EngagementSocial = () => {
  // Données fictives pour les avis clients
  const reviews = [
    { id: 1, client: "Alice Dupont", rating: 5, comment: "Service impeccable !", date: "2025-05-10" },
    { id: 2, client: "Marie Curie", rating: 4, comment: "Très satisfaite, merci !", date: "2025-05-12" },
    { id: 3, client: "Sophie Martin", rating: 3, comment: "Correct, mais peut mieux faire.", date: "2025-05-15" },
  ];

  // Données fictives pour les messages récents
  const messages = [
    { id: 1, client: "Alice Dupont", subject: "Question sur les services", date: "2025-05-10" },
    { id: 2, client: "Marie Curie", subject: "Demande de rendez-vous", date: "2025-05-12" },
  ];

  // Données fictives pour les statistiques sociales
  const socialStats = {
    totalReviews: 120,
    averageRating: 4.5,
    socialEngagement: "1,200 interactions",
  };

  // Données fictives pour les initiatives communautaires
  const initiatives = [
    { id: 1, title: "Atelier Nail Art", description: "Atelier gratuit pour les débutants.", date: "2025-05-20" },
    { id: 2, title: "Collaboration avec Beauté Locale", description: "Partenariat avec une marque locale.", date: "2025-05-25" },
  ];

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Engagement Social</h2>
        </Col>
      </Row>

      {/* Statistiques sociales */}
      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total Avis</Card.Title>
              <Card.Text className="fs-4 text-primary">{socialStats.totalReviews}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Note Moyenne</Card.Title>
              <Card.Text className="fs-4 text-success">{socialStats.averageRating} / 5</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Engagement Réseaux</Card.Title>
              <Card.Text className="fs-4 text-warning">{socialStats.socialEngagement}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Avis clients */}
      <Row className="mb-4">
        <Col>
          <h4 className="mb-3">Avis Clients</h4>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Client</th>
                <th>Note</th>
                <th>Commentaire</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review.id}>
                  <td>{review.id}</td>
                  <td>{review.client}</td>
                  <td>{review.rating} / 5</td>
                  <td>{review.comment}</td>
                  <td>{review.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Messages récents */}
      <Row className="mb-4">
        <Col>
          <h4 className="mb-3">Messages Récents</h4>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Client</th>
                <th>Sujet</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => (
                <tr key={message.id}>
                  <td>{message.id}</td>
                  <td>{message.client}</td>
                  <td>{message.subject}</td>
                  <td>{message.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Initiatives communautaires */}
      <Row>
        <Col>
          <h4 className="mb-3">Initiatives Communautaires</h4>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Titre</th>
                <th>Description</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {initiatives.map((initiative) => (
                <tr key={initiative.id}>
                  <td>{initiative.id}</td>
                  <td>{initiative.title}</td>
                  <td>{initiative.description}</td>
                  <td>{initiative.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default EngagementSocial;