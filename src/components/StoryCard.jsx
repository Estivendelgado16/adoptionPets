function StoryCard({ story }) {
  return (
    <div className="story-card">
      <img
        src={story.image}
        alt={story.title}
        className="story-image"
      />

      <div className="story-content">
        <h3>{story.title}</h3>

        <p>{story.description}</p>

        <div className="author">
          <img
            src={story.authorAvatar}
            alt={story.author}
          />

          <span>{story.author}</span>
        </div>
      </div>
    </div>
  );
}

export default StoryCard;