import NavBar from "../components/NavBar/NavBar";
import HeroVideo from "../components/HeroVideo/HeroVideo";
import Gallery from "../components/Gallery/Gallery";
import InfoCard from "../components/InfoCard/InfoCard";
import { stories } from "../data/stories";

function Home() {
  return (
    <>
      <NavBar />
      <main className="home">
        <HeroVideo />
        <section>
          <h2>Galería de Éxitos</h2>
          <div className="content-layout">
            <Gallery stories={stories} />
            <aside className="sidebar">
              <InfoCard
                title="¿Sabías que...?"
                description="Cada adopción salva dos vidas."
                buttonText="Ver más"
              />
              <InfoCard
                title="★★★★★"
                description="95% de adopciones exitosas."
              />
              <InfoCard
                title="Únete al movimiento"
                description="Ayuda a más animales."
                buttonText="Donar"
              />
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;