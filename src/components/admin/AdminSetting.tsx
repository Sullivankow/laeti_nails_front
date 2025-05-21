

import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export default function AdminSetting() {
    return (
        <Container fluid className="p-4" style={{ backgroundColor: "#fdf6f9" }}>
            <h2 className="mb-4 text-center" style={{ color: "black" }}>Paramètres du salon</h2>
            <Row xs={1} md={2} className="g-4">
                {/* Informations du salon */}
                <Col>
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <Card.Title className="text-muted">Informations du salon</Card.Title>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nom du salon</Form.Label>
                                    <Form.Control type="text" placeholder="Laeti Nails" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Adresse</Form.Label>
                                    <Form.Control type="text" placeholder="123 rue des Ongles, Paris" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Téléphone</Form.Label>
                                    <Form.Control type="tel" placeholder="06 00 00 00 00" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="contact@laetinails.fr" />
                                </Form.Group>
                                <Button variant="outline-primary" className="w-100">Enregistrer</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Horaires */}
                <Col>
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <Card.Title className="text-muted">Horaires d'ouverture</Card.Title>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Lundi - Vendredi</Form.Label>
                                    <Form.Control type="text" placeholder="09:00 - 18:00" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Samedi</Form.Label>
                                    <Form.Control type="text" placeholder="10:00 - 16:00" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Dimanche</Form.Label>
                                    <Form.Control type="text" placeholder="Fermé" />
                                </Form.Group>
                                <Button variant="outline-primary" className="w-100">Mettre à jour les horaires</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Réseaux sociaux */}
                <Col>
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <Card.Title className="text-muted">Réseaux sociaux</Card.Title>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Instagram</Form.Label>
                                    <Form.Control type="url" placeholder="https://instagram.com/laetinails" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Facebook</Form.Label>
                                    <Form.Control type="url" placeholder="https://facebook.com/laetinails" />
                                </Form.Group>
                                <Button variant="outline-primary" className="w-100">Mettre à jour</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Mot de passe */}
                <Col>
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <Card.Title className="text-muted">Sécurité</Card.Title>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nouveau mot de passe</Form.Label>
                                    <Form.Control type="password" placeholder="••••••••" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Confirmer le mot de passe</Form.Label>
                                    <Form.Control type="password" placeholder="••••••••" />
                                </Form.Group>
                                <Button variant="success" className="w-100">Changer le mot de passe</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
} 
