
import "./Gallery.css";

import StoryCard from "../StoryCard/StoryCard";

function Gallery({ stories, children }) {
  return (
    <div className="gallery-grid">
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          story={story}
        />
      ))}

      {children}
    </div>
  );
}

export default Gallery;
