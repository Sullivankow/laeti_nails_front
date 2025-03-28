

import React, { useEffect, useState } from "react";

import "../App.css"; // Assure-toi d'avoir les styles correspondants

function IconSection() {
    const [isIconsVisible, setIsIconsVisible] = useState(false);

    // Détection de l'entrée dans le viewport
    const handleScroll = () => {
        const iconsSection = document.getElementById("icons-section");
        if (iconsSection) {
            const rect = iconsSection.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setIsIconsVisible(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="icons-section" className={`icons-section ${isIconsVisible ? "slide-in" : ""}`}>
            <div className="icon-container">
                <div className="icon-item">
                    <img className="icon" src="src\assets\icon4.png" alt="expertise professionnelle" />
                    <h3>Expertise professionnelle</h3>
                </div>
                <div className="icon-item">
                    <img className="icon" src="src\assets\icon1.png" alt="Hygiène et sécurité" />
                    <h3>Hygiène & sécurité garanties</h3>
                </div>
                <div className="icon-item">
                    <img className="icon" src="src\assets\icon2.png" alt="Produits de qualité" />
                    <h3>Produits de qualité</h3>
                </div>
                <div className="icon-item">
                    <img className="icon" src="src\assets\icon3.png" alt="Expérience Relaxante" />
                    <h3>Expérience relaxante</h3>
                </div>
            </div>
        </section>
    );
}

export default IconSection;
