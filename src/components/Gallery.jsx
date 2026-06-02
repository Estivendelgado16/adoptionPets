import StoryCard from "./StoryCard";

function Gallery({ stories }) {
  return (
    <div className="gallery-grid">
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          story={story}
        />
      ))}
    </div>
  );
}

export default Gallery;