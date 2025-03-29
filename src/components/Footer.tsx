import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                {/* Cette ligne garantit que le footer utilise toute la largeur disponible */}
                <Row className="text-center">
                    {/* Colonne des liens du menu */}
                    <Col md={4} className="mb-3 d-flex justify-content-center">
                        <div>
                            <h5>Navigation</h5>
                            <ul className="list-unstyled justify-content-center gap-6">
                                <li><a href="#" className="text-light text-decoration-none">Accueil</a></li>
                                <li><a href="#about-section" className="text-light text-decoration-none">À propos</a></li>
                                <li><a href="#formules-section" className="text-light text-decoration-none">Formules</a></li>
                                <li><a href="#galerie-section" className="text-light text-decoration-none">Galerie</a></li>
                                <li><a href="#reservation-section" className="text-light text-decoration-none">Réservation</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
                            </ul>
                        </div>
                    </Col>

                    {/* Colonne des réseaux sociaux */}
                    <Col md={4} className="mb-3 d-flex justify-content-center">
                        <div>
                            <h5>Suivez-nous</h5>
                            <div className="d-flex justify-content-center gap-3">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-light">
                                    <FontAwesomeIcon icon={faTiktok} size="2x" />
                                </a>
                            </div>
                        </div>
                    </Col>

                    {/* Colonne des informations de contact */}
                    <Col md={4} className="mb-3 d-flex justify-content-center">
                        <div>
                            <h5>Contact</h5>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Avenue de la Beauté, Paris</p>
                            <p><FontAwesomeIcon icon={faPhone} /> <a href="tel:+33123456789" className="text-light text-decoration-none">01 23 45 67 89</a></p>
                            <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:contact@centre-esthetique.com" className="text-light text-decoration-none">contact@centre-esthetique.com</a></p>
                        </div>
                    </Col>
                </Row>

                {/* Copyright */}
                <Row>
                    <Col className="text-center mt-3">
                        <p className="m-0">&copy; {new Date().getFullYear()} Laeti Nails - Tous droits réservés</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;



