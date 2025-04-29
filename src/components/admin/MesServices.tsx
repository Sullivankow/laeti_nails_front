import React from 'react';
import { Table, Button, Container } from 'react-bootstrap';

type Service = {
    id: number;
    nom: string;
    description: string;
    duree: string;
    prix: number;
    categorie: string;
    disponible: boolean;
};

const fakeServices: Service[] = [
    {
        id: 1,
        nom: 'Pose complète gel',
        description: 'Pose avec rallongement et finition au choix',
        duree: '1h30',
        prix: 45,
        categorie: 'Ongles',
        disponible: true,
    },
    {
        id: 2,
        nom: 'Remplissage',
        description: 'Remplissage avec limage et nouvelle déco',
        duree: '1h15',
        prix: 35,
        categorie: 'Ongles',
        disponible: true,
    },
    {
        id: 3,
        nom: 'Dépose',
        description: 'Retrait de gel ou vernis semi-permanent',
        duree: '30 min',
        prix: 15,
        categorie: 'Soins',
        disponible: false,
    },
];

const MesServices: React.FC = () => {
    return (
        <Container className="my-4">
            <h2 className="mb-4 text-center">Liste des prestations</h2>
            <div style={{ overflowX: 'auto' }}>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th className="d-none d-md-table-cell">Description</th>
                            <th>Durée</th>
                            <th>Prix</th>
                            <th className="d-none d-md-table-cell">Catégorie</th>
                            <th>Disponible</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fakeServices.map((service) => (
                            <tr key={service.id}>
                                <td>{service.nom}</td>
                                <td className="d-none d-md-table-cell">{service.description}</td>
                                <td>{service.duree}</td>
                                <td>{service.prix} €</td>
                                <td className="d-none d-md-table-cell">{service.categorie}</td>
                                <td>{service.disponible ? 'Oui' : 'Non'}</td>
                                <td>
                                    <div className="d-flex flex-column flex-md-row gap-2">
                                        <Button size="sm" variant="info" className="w-100">Voir</Button>
                                        <Button size="sm" variant="warning" className="w-100">Modifier</Button>
                                        <Button size="sm" variant="danger" className="w-100">Supprimer</Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default MesServices;
