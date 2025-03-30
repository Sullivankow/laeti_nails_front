import React from "react";
import "../App.css"; // Assure-toi d'avoir les styles
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const images = [
    { id: 1, src: "src/images/ongle1.jpg", title: "ongle" },
    { id: 2, src: "src/images/ongle1.jpg", title: "ongle" },
    { id: 3, src: "src/images/ongle1.jpg", title: "ongle" },
    { id: 4, src: "src/images/ongle1.jpg", title: "ongle" },
    { id: 5, src: "src/images/ongle1.jpg", title: "ongle" },
    { id: 6, src: "src/images/ongle1.jpg", title: "ongle" },
    { id: 7, src: "src/images/ongle1.jpg", title: "ongle" },
    { id: 8, src: "src/images/ongle1.jpg", title: "ongle" },
];

function Galerie({ isAdmin = true }) { // Mettre isAdmin à true pour voir les icônes
    return (
        <section className="galerie-section container">
            <h2 className="title-section text-center my-5">Notre Galerie</h2>
            <div className="galerie-grid">
                {images.map((image) => (
                    <div key={image.id} className="galerie-item">
                        {/* Icônes visibles seulement si admin */}
                        {isAdmin && (
                            <div className="image-actions">
                                <button className="edit-btn"><FontAwesomeIcon icon={faEdit} /></button>
                                <button className="delete-btn"><FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                        )}
                        <img src={image.src} alt={image.title} className="galerie-img" />
                        <div className="overlay">
                            <h3>{image.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center pt-4">
                <Button variant="success" size="lg" className="mt-auto">
                    <a href="#" className="text-white text-decoration-none">Ajouter une image</a>
                </Button>
            </div>
        </section>
    );
}

export default Galerie;

