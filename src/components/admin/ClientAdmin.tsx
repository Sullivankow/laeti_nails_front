import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';

// Interface TypeScript pour un client
interface Client {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    dateInscription: string;
    nbRdv: number;
    dernierRdv: string;
    notes?: string;
}

const ClientAdmin: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedClient, setSelectedClient] = useState<Client | null>(null);

    // Données temporaires (à remplacer plus tard par appel API)
    const dummyClients: Client[] = [
        {
            id: 1,
            nom: 'Dupont',
            prenom: 'Marie',
            email: 'marie.dupont@example.com',
            telephone: '0601020304',
            dateInscription: '2024-05-01',
            nbRdv: 5,
            dernierRdv: '2025-04-25',
            notes: 'Aime les tons nude',
        },
        {
            id: 2,
            nom: 'Martin',
            prenom: 'Claire',
            email: 'claire.martin@example.com',
            telephone: '0605060708',
            dateInscription: '2024-08-10',
            nbRdv: 2,
            dernierRdv: '2025-04-15',
            notes: 'Allergie au gel',
        },
    ];

    const handleShowModal = (client: Client) => {
        setSelectedClient(client);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedClient(null);
    };

    return (
        <div className="p-4">
            <h2 className="mb-4">Liste des clients</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                        <th>Inscription</th>
                        <th>Rendez-vous</th>
                        <th>Dernier RDV</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyClients.map((client) => (
                        <tr key={client.id}>
                            <td>{client.prenom} {client.nom}</td>
                            <td>{client.email}</td>
                            <td>{client.telephone}</td>
                            <td>{client.dateInscription}</td>
                            <td>{client.nbRdv}</td>
                            <td>{client.dernierRdv}</td>
                            <td>
                                <Button variant="info" size="sm" onClick={() => handleShowModal(client)}>
                                    Voir
                                </Button>{' '}
                                <Button variant="danger" size="sm">
                                    Supprimer
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal pour les détails du client */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Détails du client</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedClient && (
                        <>
                            <p><strong>Nom :</strong> {selectedClient.prenom} {selectedClient.nom}</p>
                            <p><strong>Email :</strong> {selectedClient.email}</p>
                            <p><strong>Téléphone :</strong> {selectedClient.telephone}</p>
                            <p><strong>Inscription :</strong> {selectedClient.dateInscription}</p>
                            <p><strong>Nombre de RDV :</strong> {selectedClient.nbRdv}</p>
                            <p><strong>Dernier RDV :</strong> {selectedClient.dernierRdv}</p>
                            <p><strong>Notes :</strong> {selectedClient.notes || 'Aucune'}</p>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Fermer</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ClientAdmin;

