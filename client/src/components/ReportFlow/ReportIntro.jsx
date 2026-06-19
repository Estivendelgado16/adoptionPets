import Card, { CardBody } from "../common/Card";

import "./ReportIntro.css";

function ReportIntro() {
  return (
    <Card className="report-intro" tone="elevated">
      <CardBody>
        <h1>Reportar Mascota Perdida</h1>
        <p>
          Entendemos lo difícil que es este momento. Completa los detalles a continuación con la mayor
          precisión posible para ayudarnos a difundir la búsqueda.
        </p>
      </CardBody>
    </Card>
  );
}

export default ReportIntro;
