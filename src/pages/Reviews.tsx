import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


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
                <h3 className="title-section text-center mb-4">Laissez un avis ✨</h3>
                <Form.Group className="mb-3">
                    <Form.Label>Note</Form.Label>
                    <div>
                        {[...Array(5)].map((_, index) => { //Construit les 5 étoiles
                            const rating = index + 1; //veut dire que la première étoile est la n°1, la suivante n°2, etc., jusqu’à 5
                            const isFilled = rating <= (hover ?? stars); //On regarde si chaque étoile doit être allumée
                            const starClass = isFilled ? 'fas fa-star' : 'far fa-star'; //On regarde si l’étoile est plus petite ou égale au chiffre que tu as survolé avec ta souris (hover) ou celui que tu as cliqué (stars).

                            return (
                                <button
                                    key={rating}
                                    type="button"
                                    className="bg-transparent border-0 p-0 me-2"
                                    onClick={() => setStars(rating)} //Après avoir cliquer sur l'étoile, le code s'en souvient même après avoir bouger la souris 
                                    onMouseEnter={() => setHover(rating)} //Toutes les étoiles survolées deviennent colorées
                                    onMouseLeave={() => setHover(null)} //Quand on enlève la souris
                                    aria-label={`Évaluer ${rating} étoile${rating > 1 ? 's' : ''}`}
                                >
                                    {/*Si l’étoile doit être jaune : on lui met text-warning, sinon elle reste grise avec text-muted. */}
                                    <i className={`${starClass} fa-xl ${isFilled ? 'text-warning' : 'text-muted'}`} />
                                </button>
                            );
                        })}
                    </div>
                </Form.Group>
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
                        <Button variant="success" type="submit" className="rounded-pill px-4 py-2">
                            Envoyer
                        </Button>
                    </div>
                    <div className="text-center mt-3">
                        <Button variant="link"><Link to="/" className="btn-link text-dark">
                            Retour à l'accueil</Link>
                        </Button>

                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default ReviewForm;



