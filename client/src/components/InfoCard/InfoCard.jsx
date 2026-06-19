import Button from "../common/Button";

import "./InfoCard.css";

function InfoCard({
  title,
  description,
  buttonText,
  eyebrow,
  footerText,
  variant = "default",
}) {
  return (
    <div className={`info-card info-card--${variant}`}>

      {eyebrow && (
        <span className="info-card__eyebrow">{eyebrow}</span>
      )}

      <h3>{title}</h3>

      <p>{description}</p>

      {footerText && (
        <footer>{footerText}</footer>
      )}

      {buttonText && (
        <Button variant={variant === "fact" ? "ghost" : "primary"} type="button">
          <span>{buttonText}</span>
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              d="M5 12h14m0 0l-5-5m5 5l-5 5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
          </svg>
        </Button>
      )}

    </div>
  );
}

export default InfoCard;
