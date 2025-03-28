import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../App.css";

function Avis() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("avis-section");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.75) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const avisClients = [
        { id: 1, nom: "Sophie D.", texte: "Super zoo ! Mes enfants ont adoré la visite.", note: "⭐⭐⭐⭐⭐" },
        { id: 2, nom: "Julien M.", texte: "Les animaux sont bien traités et le personnel est sympa.", note: "⭐⭐⭐⭐" },
        { id: 3, nom: "Carla L.", texte: "Expérience magique, surtout avec les girafes !", note: "⭐⭐⭐⭐⭐" },
        { id: 4, nom: "Thomas P.", texte: "Belle découverte, je recommande.", note: "⭐⭐⭐⭐" },
        { id: 5, nom: "Thomas P.", texte: "Belle découverte, je recommande.", note: "⭐⭐⭐⭐" },
        { id: 6, nom: "Thomas P.", texte: "Belle découverte, je recommande.", note: "⭐⭐⭐⭐" },
    ];

    return (
        <motion.section
            id="avis-section"
            initial={{ opacity: 0, x: 100 }} // Initialisation de l'animation à droite
            animate={isVisible ? { opacity: 1, x: 0 } : {}} // Animation à gauche
            transition={{ duration: 1, ease: "easeOut" }} // Effet fluide
            className="container-avis my-4"
        >
            <h2 className="text-center mb-4">Les avis de nos clientes</h2>

            <motion.div
                className="avis-container"
                style={{
                    display: "flex", // On place les avis en ligne
                    whiteSpace: "nowrap", // Pour ne pas que le texte se casse
                    overflow: "hidden", // Cache les éléments qui dépassent
                    padding: "20px",
                }}
                initial={{ x: "100%" }} // Commence à droite
                animate={isVisible ? { x: "0%" } : {}} // Glisse à gauche
                transition={{ duration: 1.5, ease: "easeOut" }} // Animation fluide
            >
                <div
                    className="avis-content"
                    style={{
                        display: "flex",
                        animation: "scroll 50s linear infinite", // Animation de défilement continu
                    }}
                >
                    {avisClients.map((avis) => (  // Index n'est plus utilisé ici
                        <div
                            key={avis.id}
                            className="avis-card"
                            style={{
                                minWidth: "300px", // Largeur fixe des avis
                                margin: "0 35px", // Espacement entre les avis
                                flexShrink: 0, // Ne pas permettre le rétrécissement des avis
                            }}
                        >
                            <p className="avis-texte">"{avis.texte}"</p>
                            <p className="avis-nom">{avis.nom}</p>
                            <p className="avis-note">{avis.note}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
}

export default Avis;






