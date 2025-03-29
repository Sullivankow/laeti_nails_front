import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import IconSection from "./components/IconSection";
import Formules from "./components/Formules";
import Avis from "./components/Avis";
import Reservation from "./components/Reservation";
import Galerie from "./components/Galerie";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>

      <div>
        <About />
        <IconSection />
      </div>

      <div>
        <Formules />
      </div>

      <div>
        <Avis />
      </div>

      <div>
        <Galerie />
      </div>


      <div>
        <Reservation />

      </div>

      <div>

        <Footer />

      </div>




    </div >
  );
}

export default App;
