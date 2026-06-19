import Card, { CardBody } from "../common/Card";
import IconButton from "../common/IconButton";
import Tag from "../common/Tag";

import "./PetCard.css";

const STATUS_TONE = {
  new: "new",
  urgent: "urgent",
};

function PetCard({ pet }) {
  const statusTone = pet.status ? STATUS_TONE[pet.status.variant] : null;

  return (
    <Card className="pet-card">
      <div className="pet-card__media">
        <img
          src={pet.image}
          alt={pet.name}
        />

        {pet.status && (
          <Tag tone={statusTone === "urgent" ? "warning" : "default"}>
            {pet.status.label}
          </Tag>
        )}

        <IconButton className="pet-card__favorite" aria-label={`Guardar a ${pet.name}`}>
          <svg viewBox="0 0 24 24" aria-hidden>
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
              fill="currentColor"
            />
          </svg>
        </IconButton>
      </div>

      <CardBody className="pet-card__body">
        <header>
          <h3>{pet.name}</h3>
          <ul>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z"
                  fill="currentColor"
                />
              </svg>
              {pet.ageLabel}
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M12 2a7 7 0 0 0-7 7v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a7 7 0 0 0-7-7zm3 18H9v-2h6zm0-4H9V9a3 3 0 0 1 6 0z"
                  fill="currentColor"
                />
              </svg>
              {pet.size}
            </li>
          </ul>
        </header>

        <footer>
          <div className="pet-card__tags">
            {pet.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </footer>
      </CardBody>
    </Card>
  );
}

export default PetCard;
