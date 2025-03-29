import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "../App.css"; // Assure-toi d'avoir les styles pour l'animation

const formulesData = [
    {
        id: 1,
        image: "src/images/ongle1.jpg",
        title: "Formule Classique",
        description: "Manucure avec pose de vernis classique.",
        price: "25€",
    },
    {
        id: 2,
        image: "src/images/ongle2.jpg",
        title: "Formule Gel",
        description: "Pose de gel pour une tenue longue durée.",
        price: "40€",
    },
    {
        id: 3,
        image: "src/images/ongle8.jpg",
        title: "Formule Luxe",
        description: "Manucure complète avec soin hydratant.",
        price: "55€",
    },
    {
        id: 4,
        image: "src/images/ongle9.jpg",
        title: "Formule VIP",
        description: "Pose en gel + nail art personnalisé.",
        price: "70€",
    },
];

function Formules() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("formules-section");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.75) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="formules-section" className={`formules-section container text-center my-5 ${isVisible ? "fade-in" : ""}`}>
            <h1 className="title-section text-center my-4">Nos Formules</h1>
            <Row className="justify-content-center">
                {formulesData.map((formule) => (
                    <Col key={formule.id} xs={12} md={6} lg={3} className="d-flex justify-content-center">
                        <Card className="shadow-sm h-100 card-custom">
                            <Card.Img variant="top" src={formule.image} alt={formule.title} className="card-img-top" />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="title-section">{formule.title}</Card.Title>
                                <Card.Text className="formules-text">{formule.description}</Card.Text>
                                <h5 className="text-primary">{formule.price}</h5>
                                <Button variant="success" size="lg" className="mt-auto">
                                    <a href="#" className="text-white text-decoration-none">Réserver</a>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
}

export default Formules;


