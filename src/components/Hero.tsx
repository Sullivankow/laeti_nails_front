

import Carousel from 'react-bootstrap/Carousel';
import "../App.css";  // Fichier CSS pour styliser le Hero
import { Button } from 'react-bootstrap';

function Hero() {
  return (
    <Carousel fade={true} interval={3000}>
      <Carousel.Item>
        <img
          className="carousel-image"
          src="src\images\couv1.jpg"
          alt="Premier slide"
        />
        <Carousel.Caption>
          <h3>Des ongles parfaits</h3>
          <p>Découvrez nos services de manucure professionnels.</p>
          <Button variant="btn btn-success" className="mt-2">Prendre rendez-vous</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel-image"
          src="src\images\ongle2.jpg"
          alt="Deuxième slide"
        />
        <Carousel.Caption>
          <h3>Soins et bien-être</h3>
          <p>Profitez d'un moment de détente et de beauté.</p>
          <Button variant="btn btn-success" className="mt-2">Voir nos soins</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousel-image"
          src="src\images\ongle4.jpg"
          alt="Troisième slide"
        />
        <Carousel.Caption>
          <h3>Créations uniques</h3>
          <p>Personnalisez vos ongles avec nos designs exclusifs.</p>
          <Button variant="btn btn-success" className="mt-2">Explorer les modèles</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
