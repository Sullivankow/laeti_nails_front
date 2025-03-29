

import React from "react";
import "../App.css"; // Assure-toi d'avoir les styles

const images = [
    { id: 1, src: "src/images/ongle1.jpg", title: "ongle" },
    { id: 2, src: "src/images/ongle1.jpg", title: "ongle" },
    { id: 3, src: "src/images/ongle1.jpg", title: "ongle" },
    { id: 4, src: "src/images/ongle1.jpg", title: "ongle" },
    { id: 5, src: "src/images/ongle1.jpg", title: "ongle" },
    { id: 6, src: "src/images/ongle1.jpg", title: "ongle" },
    { id: 7, src: "src/images/ongle1.jpg", title: "ongle" },
    { id: 8, src: "src/images/ongle1.jpg", title: "ongle" },
    { id: 9, src: "src/images/ongle1.jpg", title: "ongle" },
];

function Galerie() {
    return (
        <section className="galerie-section container">
            <h2 className="title-section text-center my-5">Notre Galerie</h2>
            <div className="galerie-grid">
                {images.map((image) => (
                    <div key={image.id} className="galerie-item">
                        <img src={image.src} alt={image.title} className="galerie-img" />
                        <div className="overlay">
                            <h3>{image.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Galerie;
