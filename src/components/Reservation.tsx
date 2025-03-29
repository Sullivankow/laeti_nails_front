import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../App.css";

// Définition du type pour les données de réservation
interface ReservationData {
    name: string;
    email: string;
    date: string;
    time: string;
    service: string;
}

const Reservation: React.FC = () => {
    const [reservation, setReservation] = useState<ReservationData>({
        name: "",
        email: "",
        date: "",
        time: "",
        service: "",
    });

    // Gestion du changement de valeur des champs du formulaire
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setReservation(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Réservation envoyée :", reservation);
        // Ici tu peux envoyer les données à ton backend Symfony via une API
    };

    return (
        <section id="reservation-section" className="reservation-section">
            <Container>
                <h2 className="title-section text-center my-4 pt-4">Réservez votre prestation</h2>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
                            <Form.Group className="mb-3">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={reservation.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={reservation.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="date"
                                    value={reservation.date}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Heure</Form.Label>
                                <Form.Control
                                    type="time"
                                    name="time"
                                    value={reservation.time}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Prestation</Form.Label>
                                <Form.Select name="service" value={reservation.service} onChange={handleChange} required>
                                    <option value="">Choisissez une prestation</option>
                                    <option value="Manucure Classique">Manucure Classique</option>
                                    <option value="Gel">Gel</option>
                                    <option value="Luxe">Luxe</option>
                                    <option value="VIP">VIP</option>
                                </Form.Select>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                Réserver
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Reservation;





