import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
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
        <div className="login-form">
            <h2>Se connecter</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button type="submit" className="mt-3">
                    Se connecter
                </Button>
            </Form>
        </div>
    );
};

export default Login;