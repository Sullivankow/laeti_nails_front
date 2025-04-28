
import { useState } from 'react';
import { Table, Button, Form, Badge, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MesRendezVous = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const [rendezVous, setRendezVous] = useState([
        {
            id: 1,
            nom: 'Martin',
            prenom: 'Sophie',
            telephone: '0601020304',
            date: '2025-04-30',
            heure: '14:00',
            prestation: 'Remplissage',
            statut: 'Confirmé'
        },
        {
            id: 2,
            nom: 'Dupont',
            prenom: 'Léa',
            telephone: '0611223344',
            date: '2025-05-01',
            heure: '10:30',
            prestation: 'Pose complète',
            statut: 'En attente'
        },
        {
            id: 3,
            nom: 'Girard',
            prenom: 'Amélie',
            telephone: '0677889900',
            date: '2025-05-02',
            heure: '11:00',
            prestation: 'Nail art',
            statut: 'Terminé'
        }
    ]);

    const handleDelete = (id: number) => {
        const updatedRendezVous = rendezVous.filter(rdv => rdv.id !== id);
        setRendezVous(updatedRendezVous);
    };

    const filteredRendezVous = rendezVous.filter(rdv =>
        rdv.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rdv.prestation.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusBadge = (statut: string) => {
        switch (statut) {
            case 'Confirmé':
                return <Badge bg="success">Confirmé</Badge>;
            case 'En attente':
                return <Badge bg="warning">En attente</Badge>;
            case 'Terminé':
                return <Badge bg="primary">Terminé</Badge>;
            case 'Annulé':
                return <Badge bg="danger">Annulé</Badge>;
            default:
                return <Badge bg="secondary">{statut}</Badge>;
        }
    };

    return (
        <div className="p-4">
            <h2>Mes Rendez-vous</h2>

            <Row className="mb-3">
                <Col md={6}>
                    <Form.Control
                        type="text"
                        placeholder="Rechercher par nom ou prestation..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Col>
                <Col md={6} className="text-end">
                    <Link to="/">
                        <Button variant="primary text-white">Ajouter un rendez-vous</Button>
                    </Link>

                </Col>
            </Row>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Téléphone</th>
                        <th>Date</th>
                        <th>Heure</th>
                        <th>Prestation</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRendezVous.map((rdv) => (
                        <tr key={rdv.id}>
                            <td>{rdv.nom}</td>
                            <td>{rdv.prenom}</td>
                            <td>{rdv.telephone}</td>
                            <td>{rdv.date}</td>
                            <td>{rdv.heure}</td>
                            <td>{rdv.prestation}</td>
                            <td>{getStatusBadge(rdv.statut)}</td>
                            <td>
                                <Button variant="outline-primary" size="sm" className="me-2">
                                    Modifier
                                </Button>
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={() => handleDelete(rdv.id)}
                                >
                                    Supprimer
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default MesRendezVous;

