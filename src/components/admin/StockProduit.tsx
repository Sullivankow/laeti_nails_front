import React from "react";
import { Container, Row, Col, Table, Button, Form, Modal } from "react-bootstrap";

const StockProduits = () => {
    const [showModal, setShowModal] = React.useState(false);

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h2 className="text-center mb-4">Gestion du Stock et des Produits</h2>
                </Col>
            </Row>

            {/* Tableau des produits */}
            <Row>
                <Col>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nom du Produit</th>
                                <th>Prix</th>
                                <th>Quantité</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Vernis Rouge</td>
                                <td>10€</td>
                                <td>50</td>
                                <td>
                                    <Button variant="warning" size="sm" className="me-2">
                                        Modifier
                                    </Button>
                                    <Button variant="danger" size="sm">
                                        Supprimer
                                    </Button>
                                </td>
                            </tr>
                            {/* Ajoutez d'autres produits ici */}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            {/* Bouton pour ajouter un produit */}
            <Row className="mt-4">
                <Col className="text-center">
                    <Button variant="primary text-white" onClick={handleModalShow}>
                        Ajouter un Produit
                    </Button>
                </Col>
            </Row>

            {/* Modal pour ajouter un produit */}
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un Produit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formProductName">
                            <Form.Label>Nom du Produit</Form.Label>
                            <Form.Control type="text" placeholder="Entrez le nom du produit" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formProductPrice">
                            <Form.Label>Prix</Form.Label>
                            <Form.Control type="number" placeholder="Entrez le prix" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formProductQuantity">
                            <Form.Label>Quantité</Form.Label>
                            <Form.Control type="number" placeholder="Entrez la quantité" />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Ajouter
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default StockProduits;