import StoryCard from "./StoryCard";

function Gallery({ stories }) {
  return (
    <section className="gallery-section">
      <h2>Galería de Éxitos</h2>

      <p>
        Más de 500 vidas transformadas con amor.
      </p>

      <div className="gallery-grid">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;