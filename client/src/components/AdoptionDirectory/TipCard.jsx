import Card, { CardBody } from "../common/Card";

import "./TipCard.css";

function TipCard({ children }) {
  return (
    <Card className="tip-card" tone="muted">
      <CardBody>
        <h3>Consejo del día</h3>
        <p>{children}</p>
      </CardBody>
    </Card>
  );
}

export default TipCard;
