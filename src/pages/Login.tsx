import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Utilisation du hook pour naviguer après la soumission

// Définition du type pour les données du formulaire
interface LoginData {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [formData, setFormData] = useState<LoginData>({
        email: "",
        password: "",
    });

    const navigate = useNavigate(); // Hook pour la navigation après la soumission

    // Fonction pour gérer la soumission du formulaire
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Logique de validation (ici on simule l'authentification)
        if (formData.email === "user@example.com" && formData.password === "password") {
            navigate("/"); // Redirige vers la page d'accueil après la connexion réussie
        } else {
            alert("Identifiants incorrects");
        }
    };

    // Fonction pour mettre à jour les champs du formulaire
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="login-container">
            <Container>
                <Row className="justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <Col md={4} sm={6} xs={12}>
                        <div className="login-form">
                            <h2 className="title-section text-center mb-4">Se connecter</h2>
                            <Form onSubmit={handleLogin}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Mot de passe</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    />
                                </Form.Group>

                                <div className="d-flex justify-content-between">
                                    <Button type="submit" className="w-100 btn-success">
                                        Se connecter
                                    </Button>
                                </div>
                                <div className="text-center mt-3">
                                    <Button
                                        variant="link"
                                        onClick={() => navigate("/")}
                                        className="btn-link text-dark "
                                    >
                                        Retour à l'accueil
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
