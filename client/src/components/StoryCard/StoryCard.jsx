
import "./StoryCard.css";

function StoryCard({ story }) {
  const {
    image,
    title,
    quote,
    description,
    author,
    authorAvatar,
    location,
    badge,
    accent,
    petName,
  } = story;

  return (
    <article
      className="story-card"
      style={accent ? { "--story-accent": accent } : undefined}
    >

      <div className="story-media">
        <img
          src={image}
          alt={title || petName}
        />

        {badge && (
          <span className="story-badge">
            {badge}
          </span>
        )}
      </div>

      <div className="story-content">

        {(petName || title) && (
          <div className="story-eyebrow">
            {petName && <span className="story-pet">{petName}</span>}
            {petName && title && <span aria-hidden="true">·</span>}
            {title && <span className="story-title">{title}</span>}
          </div>
        )}

        <div className="story-quote">
          <span aria-hidden="true">“</span>
          <p>{quote || description}</p>
        </div>

        <div className="story-author">

          {authorAvatar && (
            <img
              src={authorAvatar}
              alt={author}
            />
          )}

          <div>
            <strong>{author}</strong>
            {location && <span>{location}</span>}
          </div>

        </div>

      </div>

    </article>
  );
}

export default StoryCard;
