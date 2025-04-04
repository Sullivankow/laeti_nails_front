import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const ReviewForm = () => {
    const [stars, setStars] = useState<number>(0);
    const [hover, setHover] = useState<number | null>(null);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log({ name, stars, comment });
        // Ici tu pourrais envoyer la requête à ton API
    };

    return (
        <Container className="my-5">
            <Card className="p-4 shadow-lg rounded-4">
                <h3 className="text-center mb-4">Laissez un avis ✨</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Votre prénom</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ex: Julie"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Note</Form.Label>
                        <div>
                            {[...Array(5)].map((_, index) => {
                                const rating = index + 1;
                                const isFilled = rating <= (hover ?? stars);
                                const starClass = isFilled ? 'fas fa-star' : 'far fa-star';

                                return (
                                    <button
                                        key={rating}
                                        type="button"
                                        className="bg-transparent border-0 p-0 me-2"
                                        onClick={() => setStars(rating)}
                                        onMouseEnter={() => setHover(rating)}
                                        onMouseLeave={() => setHover(null)}
                                        aria-label={`Évaluer ${rating} étoile${rating > 1 ? 's' : ''}`}
                                    >
                                        <i className={`${starClass} fa-xl ${isFilled ? 'text-warning' : 'text-muted'}`} />
                                    </button>
                                );
                            })}
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Commentaire</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Partagez votre expérience"
                            required
                        />
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="dark" type="submit" className="rounded-pill px-4 py-2">
                            Envoyer
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default ReviewForm;



