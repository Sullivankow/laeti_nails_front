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
        <Reservation />

      </div>




    </div >
  );
}

export default App;
