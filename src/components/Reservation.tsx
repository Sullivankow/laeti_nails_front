import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../App.css";

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

    // 📆 Dates déjà réservées
    const reservedDates = ["2025-04-10", "2025-04-15", "2025-04-20"];

    // 🕒 Heures déjà réservées (à associer à une date spécifique si besoin)
    const reservedTimes = ["10:00", "14:00", "16:30"];

    // Vérifie si une date est indisponible
    const isDateDisabled = (date: string) => reservedDates.includes(date);

    // Vérifie si une heure est indisponible
    const isTimeDisabled = (time: string) => reservedTimes.includes(time);

    // Gère les changements de formulaire
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Vérifie si l'utilisateur essaie de sélectionner une date bloquée
        if (name === "date" && isDateDisabled(value)) {
            alert("Cette date est déjà réservée. Veuillez en choisir une autre.");
            return;
        }

        // Vérifie si l'utilisateur essaie de sélectionner une heure bloquée
        if (name === "time" && isTimeDisabled(value)) {
            alert("Cette heure est déjà réservée. Veuillez en choisir une autre.");
            return;
        }

        setReservation(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Réservation envoyée :", reservation);
    };

    return (
        <section id="reservation-section" className="reservation-section pb-4">
            <Container>
                <h2 className="title-section text-center my-4 pt-4">Réservez votre prestation</h2>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
                            <Form.Group className="mb-3">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control type="text" name="name" value={reservation.name} onChange={handleChange} required />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" value={reservation.email} onChange={handleChange} required />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="date"
                                    value={reservation.date}
                                    onChange={handleChange}
                                    required
                                    min={new Date().toISOString().split("T")[0]} // Bloque les dates passées
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
                                    list="available-times"
                                />
                                {/* Liste des heures disponibles */}
                                <datalist id="available-times">
                                    {["09:00", "10:00", "11:00", "14:00", "15:00", "16:30", "18:00"]
                                        .filter(time => !isTimeDisabled(time)) // Filtrer les heures bloquées
                                        .map((time, index) => (
                                            <option key={index} value={time} />
                                        ))}
                                </datalist>
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

                            <Button variant="primary text-white" type="submit" className="w-100">Réserver</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Reservation;








