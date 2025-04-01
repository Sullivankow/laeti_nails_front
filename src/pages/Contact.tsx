import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Définition des données du formulaire
interface ContactData {
    nom: string;
    email: string;
    sujet: string;
    commentaire: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactData>({
        nom: "",
        email: "",
        sujet: "",
        commentaire: "",
    });

    const [errors, setErrors] = useState<Partial<ContactData>>({});
    const [isFormValid, setIsFormValid] = useState(false); // État du bouton
    const [messageEnvoye, setMessageEnvoye] = useState(false); // Message de confirmation
    const navigate = useNavigate();

    // Vérifie si tous les champs sont remplis
    const validateForm = () => {
        const newErrors: Partial<ContactData> = {};
        if (!formData.nom.trim()) newErrors.nom = "Le nom est obligatoire";
        if (!formData.email.trim()) newErrors.email = "L'email est obligatoire";
        if (!formData.sujet.trim()) newErrors.sujet = "Le sujet est obligatoire";
        if (!formData.commentaire.trim()) newErrors.commentaire = "Le commentaire est obligatoire";

        setErrors(newErrors);
        setIsFormValid(Object.keys(newErrors).length === 0);
    };

    // Gère les changements dans les champs du formulaire
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        validateForm(); // Vérifie à chaque modification si le formulaire est valide
    };

    // Gestion de l'envoi du formulaire
    const handleContact = (e: React.FormEvent) => {
        e.preventDefault(); // Empêche le rechargement de la page

        if (isFormValid) {
            console.log("Données envoyées :", formData);
            setMessageEnvoye(true); // Affiche le message de confirmation

            // Réinitialisation du formulaire après 3 secondes
            setTimeout(() => {
                setMessageEnvoye(false);
                setFormData({
                    nom: "",
                    email: "",
                    sujet: "",
                    commentaire: "",
                });
                setIsFormValid(false); // Désactive à nouveau le bouton
            }, 3000);

           
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="text-center">Contactez-nous</h2>
                    <Form onSubmit={handleContact}>
                        {/* Nom */}
                        <Form.Group className="mb-3">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control
                                type="text"
                                name="nom"
                                value={formData.nom}
                                onChange={handleChange}
                                isInvalid={!!errors.nom}
                            />
                            <Form.Control.Feedback type="invalid">{errors.nom}</Form.Control.Feedback>
                        </Form.Group>

                        {/* Email */}
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        </Form.Group>

                        {/* Sujet */}
                        <Form.Group className="mb-3">
                            <Form.Label>Sujet</Form.Label>
                            <Form.Control
                                type="text"
                                name="sujet"
                                value={formData.sujet}
                                onChange={handleChange}
                                isInvalid={!!errors.sujet}
                            />
                            <Form.Control.Feedback type="invalid">{errors.sujet}</Form.Control.Feedback>
                        </Form.Group>

                        {/* Commentaire */}
                        <Form.Group className="mb-3">
                            <Form.Label>Commentaire</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="commentaire"
                                value={formData.commentaire}
                                onChange={handleChange}
                                isInvalid={!!errors.commentaire}
                            />
                            <Form.Control.Feedback type="invalid">{errors.commentaire}</Form.Control.Feedback>
                        </Form.Group>

                        {/* Bouton d'envoi (désactivé tant que les champs ne sont pas remplis) */}
                        <Button variant="primary" type="submit" className="w-100" disabled={!isFormValid}>
                            Envoyer
                        </Button>

                        {/* Message de confirmation en vert */}
                        {messageEnvoye && (
                            <Alert variant="success" className="mt-3">
                                Votre message a bien été envoyé !
                            </Alert>
                        )}

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
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
