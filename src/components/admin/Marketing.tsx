import React from "react";
import { Container, Row, Col, Table, Button, Form, Modal } from "react-bootstrap";

const Marketing = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [modalType, setModalType] = React.useState(""); // "promotion" ou "codePromo"

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = (type: string) => {
        setModalType(type);
        setShowModal(true);
    };

    // Données fictives pour les promotions
    const promotions = [
        { id: 1, name: "Promo Printemps", description: "10% sur tous les services", startDate: "2025-05-01", endDate: "2025-05-31" },
        { id: 2, name: "Offre Été", description: "15% sur les produits", startDate: "2025-06-01", endDate: "2025-06-30" },
    ];

    // Données fictives pour les codes promo
    const codesPromo = [
        { id: 1, code: "SPRING10", discount: "10%", expiration: "2025-05-31" },
        { id: 2, code: "SUMMER15", discount: "15%", expiration: "2025-06-30" },
    ];

    return (
        <Container fluid className="mt-4">
            <Row>
                <Col>
                    <h2 className="text-center mb-4">Marketing et Promotions</h2>
                </Col>
            </Row>

            {/* Promotions */}
            <Row className="mb-4">
                <Col>
                    <h4 className="mb-3">Promotions Actives</h4>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nom</th>
                                <th>Description</th>
                                <th>Date de Début</th>
                                <th>Date de Fin</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {promotions.map((promo) => (
                                <tr key={promo.id}>
                                    <td>{promo.id}</td>
                                    <td>{promo.name}</td>
                                    <td>{promo.description}</td>
                                    <td>{promo.startDate}</td>
                                    <td>{promo.endDate}</td>
                                    <td>
                                        <Button variant="warning" size="sm" className="me-2">
                                            Modifier
                                        </Button>
                                        <Button variant="danger" size="sm">
                                            Supprimer
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Button variant="primary text-white" onClick={() => handleModalShow("promotion")}>
                        Ajouter une Promotion
                    </Button>
                </Col>
            </Row>

            {/* Codes Promo */}
            <Row className="mb-4">
                <Col>
                    <h4 className="mb-3">Codes Promo</h4>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Code</th>
                                <th>Réduction</th>
                                <th>Expiration</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {codesPromo.map((code) => (
                                <tr key={code.id}>
                                    <td>{code.id}</td>
                                    <td>{code.code}</td>
                                    <td>{code.discount}</td>
                                    <td>{code.expiration}</td>
                                    <td>
                                        <Button variant="warning" size="sm" className="me-2">
                                            Modifier
                                        </Button>
                                        <Button variant="danger" size="sm">
                                            Supprimer
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Button variant="primary text-white" onClick={() => handleModalShow("codePromo")}>
                        Ajouter un Code Promo
                    </Button>
                </Col>
            </Row>

            {/* Modal pour ajouter une promotion ou un code promo */}
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {modalType === "promotion" ? "Ajouter une Promotion" : "Ajouter un Code Promo"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {modalType === "promotion" && (
                            <>
                                <Form.Group className="mb-3" controlId="formPromoName">
                                    <Form.Label>Nom de la Promotion</Form.Label>
                                    <Form.Control type="text" placeholder="Entrez le nom de la promotion" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPromoDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Entrez une description" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPromoStartDate">
                                    <Form.Label>Date de Début</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPromoEndDate">
                                    <Form.Label>Date de Fin</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </>
                        )}
                        {modalType === "codePromo" && (
                            <>
                                <Form.Group className="mb-3" controlId="formCodePromo">
                                    <Form.Label>Code Promo</Form.Label>
                                    <Form.Control type="text" placeholder="Entrez le code promo" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formCodeDiscount">
                                    <Form.Label>Réduction</Form.Label>
                                    <Form.Control type="text" placeholder="Entrez la réduction (ex: 10%)" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formCodeExpiration">
                                    <Form.Label>Date d'Expiration</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </>
                        )}
                        <Button variant="success" type="submit">
                            Enregistrer
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default Marketing;