import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//@ts-expect-error désactive vérif ts
import { setAuth } from "../utils/auth";

const Login: React.FC = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    //Gère la saisie utilisateur
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Gère la soumission du formulaire
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage(null); // Réinitialiser le message d'erreur

        // Simuler un utilisateur existant (à remplacer par un appel API réel)
        if (formData.email === "admin@email.com" && formData.password === "admin123") {
            const fakeData = { token: "fake-jwt-token", role: "admin" };

            setAuth(fakeData.token, fakeData.role);
            navigate("/admin"); // Redirige après connexion réussie
        }

        else if (formData.email === "user@email.com" && formData.password === "user123") {
            const fakeData = { token: "fake-jwt-token", role: "user" };
            setAuth(fakeData.token, fakeData.role);
            navigate("/user"); // Redirige après connexion réussie
        } else {
            setErrorMessage("Identifiants incorrects !");
        }

        // try {
        //     const response = await fetch("http://localhost:8000/api/login", {
        //         method: "POST",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(formData),
        //     });

        //     if (!response.ok) {
        //         throw new Error("Identifiants incorrects ou problème serveur.");
        //     }

        //     const data = await response.json();
        //     setAuth(data.token, data.role); // Stocke le token et le rôle
        //     navigate("/"); // Redirige après connexion réussie
        // } catch (error) {
        //     setErrorMessage((error as Error).message);
        // }
    };







    return (
        <div className="login-container">
            <Container>
                <Row className="justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <Col md={4} sm={6} xs={12}>
                        <div className="login-form">
                            <h2 className="title-section text-center mb-4">Se connecter</h2>

                            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

                            <Form onSubmit={handleLogin}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
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
                                    />
                                </Form.Group>

                                <Button type="submit" className="w-100 btn-success">Se connecter</Button>

                                <div className="text-center mt-3">
                                    <Button variant="link" onClick={() => navigate("/")} className="btn-link text-dark">
                                        Retour à l'accueil
                                    </Button>
                                    <Button variant="link" onClick={() => navigate("/registration")} className="btn-link text-dark">
                                        Pas encore de compte?
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







