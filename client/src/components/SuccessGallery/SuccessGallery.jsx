import Section from "../common/Section";
import Button from "../common/Button";
import Card from "../common/Card";

import Gallery from "../Gallery/Gallery";
import InfoCard from "../InfoCard/InfoCard";

import "./SuccessGallery.css";

function SuccessGallery({ stories }) {
  return (
    <Section className="success-gallery">
      <Card className="success-gallery__header" tone="elevated">
        <div className="success-gallery__title">
          <h2>Galería de Éxitos</h2>
          <p>Más de 569 vidas transformadas este año.</p>
        </div>
        <Button variant="ghost">
          Historias verificadas
          <svg viewBox="0 0 24 24" aria-hidden>
            <path
              d="M7 10l5 5 5-5H7z"
              fill="currentColor"
            />
          </svg>
        </Button>
      </Card>

      <div className="success-gallery__layout">
        <Gallery stories={stories}>
          <InfoCard
            variant="fact"
            eyebrow="Impacto 2025"
            title="¿Sabías que...?"
            description="Los animales rescatados suelen desarrollar un vínculo de gratitud excepcionalmente fuerte con sus nuevos dueños."
            buttonText="Ver estadísticas"
          />
        </Gallery>

        <aside className="success-gallery__aside">
          <InfoCard
            variant="testimonial"
            title="★★★★★"
            description={'"El proceso de PetAdoption fue impecable. Nos sentimos acompañados en cada paso."'}
            footerText="Javier M., Adoptante verificado"
          />

          <InfoCard
            variant="cta"
            title="Únete al movimiento"
            description="Tu donación ayuda a que más historias como estas tengan un final feliz."
            buttonText="Donar ahora"
          />
        </aside>
      </div>
    </Section>
  );
}

export default SuccessGallery;
