import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css"; // Assure-toi d'avoir les styles pour l'animation
import Button from "react-bootstrap/esm/Button";

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

    // Détection du scroll pour déclencher l'animation
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
        <section id="formules-section" className={`formules-section ${isVisible ? "fade-in" : ""}`}>
            <h1 className=" title-section text-center my-4">Nos Formules</h1>
            <Row xs={1} md={2} lg={4} className="g-4">
                {formulesData.map((formule) => (
                    <Col key={formule.id}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={formule.image} alt={formule.title} />
                            <Card.Body>
                                <Card.Title>{formule.title}</Card.Title>
                                <Card.Text>{formule.description}</Card.Text>
                                <h5 className="text-primary">{formule.price}</h5>
                            </Card.Body>
                            <Button variant="success" size="lg" className="mt-3"><a href="#" className="text-white text-decoration-none">
                                Réserver </a>
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
}

export default Formules;
