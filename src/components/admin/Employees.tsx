

import React from "react";
import { Container, Row, Col, Table, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Employees = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [selectedEmployee, setSelectedEmployee] = React.useState<Employee | null>(null);

    const handleModalClose = () => setShowModal(false);
    interface Employee {
        id: number;
        name: string;
        role: string;
        schedule: string;
    }

    const handleModalShow = (employee: Employee) => {
        setSelectedEmployee(employee);
        setShowModal(true);
    };

    // Données en dur pour les employés
    const employees = [
        { id: 1, name: "Alice Dupont", role: "Styliste Ongulaire", schedule: "Lundi - Vendredi : 9h - 17h" },
        { id: 2, name: "Marie Curie", role: "Technicienne", schedule: "Mardi - Samedi : 10h - 18h" },
        { id: 3, name: "Sophie Martin", role: "Réceptionniste", schedule: "Lundi - Vendredi : 8h - 16h" },
    ];

    return (
        <Container fluid className="mt-4">
            <Row>
                <Col>
                    <h2 className="text-center mb-4">Gestion des Employés</h2>
                </Col>
            </Row>
            {/*Ajouter un modal quand le back sera prêt, pour faire apparaître une fenêtre pour l'ajout */}
            <Col md={12} className="text-end mb-4">
                <Link to="/">
                    <Button variant="primary text-white">Ajouter un employé</Button>
                </Link>

            </Col>

            {/* Tableau des employés */}
            <Row>
                <Col>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nom</th>
                                <th>Rôle</th>
                                <th>Planning</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.role}</td>
                                    <td>{employee.schedule}</td>
                                    <td>
                                        <Button
                                            variant="warning"
                                            size="sm"
                                            className="me-2"
                                            onClick={() => handleModalShow(employee)}
                                        >
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
                </Col>
            </Row>

            {/* Modal pour modifier le planning */}
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifier le Planning</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedEmployee && (
                        <Form>
                            <Form.Group className="mb-3" controlId="formEmployeeName">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={selectedEmployee.name}
                                    disabled
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmployeeRole">
                                <Form.Label>Rôle</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={selectedEmployee.role}
                                    disabled
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmployeeSchedule">
                                <Form.Label>Planning</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    defaultValue={selectedEmployee.schedule}
                                />
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Enregistrer
                            </Button>
                        </Form>
                    )}
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default Employees;