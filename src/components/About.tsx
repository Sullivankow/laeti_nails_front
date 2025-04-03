import React, { useEffect, useState } from "react";
import '../App.css'
import Button from "react-bootstrap/esm/Button";
import aboutImage from '../images/ongle6.jpg'; // Importation de l'image

function About() {
    const [isVisible, setIsVisible] = useState(false);

    // Détecter quand la section entre dans le viewport
    const handleScroll = () => {
        const section = document.getElementById("about-section");

        // Vérification si section est null avant d'appeler getBoundingClientRect()
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setIsVisible(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="about-section" className={`about-section ${isVisible ? "fade-in" : ""}`}>
            <div className="about-content">
                <div className="about-text">
                    <h1 className="title-section">À propos de nous</h1>
                    <h2>L'entreprise</h2>
                    <p>
                        Laeti Nails est une entreprise spécialisée dans la beauté des ongles.
                        Nous proposons des services de manucure et pédicure de qualité supérieure,
                        avec une attention particulière aux détails et au confort de nos clients.
                    </p>
                    <Button variant="success" size="lg" className="mt-3">
                        <a href="#formules-section" className="text-white text-decoration-none">
                            Nos formules
                        </a>
                    </Button>
                </div>
                <div className="about-image">
                    <img src={aboutImage} alt="About us" />
                </div>
            </div>
        </section>
    );
}

export default About;
