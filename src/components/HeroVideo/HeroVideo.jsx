// Subes dos niveles para llegar a la raíz de 'src' y luego entras a assets
import miVideo from "../../assets/inicio/videoBanner.mp4";
import "./HeroVideo.css";


function HeroVideo() {
  return (
    <section className="hero">

      <h1>Historias que Inspiran</h1>

      <p>
        Conoce las historias que cambiaron vidas.
      </p>

      <div className="hero-video">

        <video
          src={miVideo}
          alt="hero"
          muted
          autoPlay
          loop
          playsInline
          className="video-element"
        >
          Tu navegador no soporta videos de HTML5.
        </video>

      </div>

    </section>
  );
}

export default HeroVideo;