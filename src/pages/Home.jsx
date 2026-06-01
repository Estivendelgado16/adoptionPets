import Navbar from "../components/NavBar";
import HeroVideo from "../components/HeroVideo";
import Gallery from "../components/Gallery";
import InfoCard from "../components/InfoCard";

import { stories } from "../data/stories";

function Home() {
  return (
    <>
    <Navbar />
    <HeroVideo />
    <Gallery stories={stories} />

    <div className="info-container">
        <InfoCard
          title="¿Sabías que...?"
          description="La adopción responsable ayuda a reducir el abandono animal."
          buttonText="Ver estadísticas"
        />

        <InfoCard
          title="Únete al movimiento"
          description="Cada adopción cambia una vida."
          buttonText="Descubrir más"
        />
    </div>
    </>
  );
}

export default Home;