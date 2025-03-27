import React, { useEffect, useState } from "react";
import '../App.css'


function About() {
    const [isVisible, setIsVisible] = useState(false);

    // Détecter quand la section entre dans le viewport
    const handleScroll = () => {
        const section = document.getElementById("about-section");
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            setIsVisible(true);
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
                    <h2>À propos de l'entreprise</h2>
                    <p>
                        Laeti Nails est une entreprise spécialisée dans la beauté des ongles.
                        Nous proposons des services de manucure et pédicure de qualité supérieure,
                        avec une attention particulière aux détails et au confort de nos clients.
                    </p>
                </div>
                <div className="about-image">
                    <img src="src\images\ongle6.jpg" alt="About us" />
                </div>
            </div>
        </section>
    );
}

export default About;