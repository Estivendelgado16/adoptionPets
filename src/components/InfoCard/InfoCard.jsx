function InfoCard({
  title,
  description,
  buttonText,
}) {
  return (
    <div className="info-card">

      <h3>{title}</h3>

      <p>{description}</p>

      {buttonText && (
        <button>
          {buttonText}
        </button>
      )}

    </div>
  );
}

export default InfoCard;