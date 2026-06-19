import Card, { CardBody } from "../common/Card";

import "./ReportSidebar.css";

const steps = [
  "Tu reporte será validado por nuestro equipo en menos de 15 minutos.",
  "Se enviará una notificación a todos los vecinos en un radio de 5km.",
  "Recibirás actualizaciones en tiempo real si alguien ve a tu mascota.",
];

const tips = [
  "Usa una foto reciente donde se aprecien bien los colores y marcas.",
  "Sé específico sobre el temperamento (si es asustadizo o amigable).",
  "Mantén tu teléfono a mano para recibir llamadas de posibles rescatistas.",
];

function ReportSidebar() {
  return (
    <aside className="report-sidebar">
      <ProcessSteps />
      <QuickTips />
      <SupportHighlight />
    </aside>
  );
}

function ProcessSteps() {
  return (
    <Card className="report-sidebar__card report-sidebar__card--process" tone="accent">
      <CardBody>
        <h3>Proceso de Reporte</h3>
        <ul>
          {steps.map((step) => (
            <li key={step}>
              <span aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path
                    d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.28 7.78-4.95 4.95a1.1 1.1 0 0 1-1.56 0l-1.55-1.55a1.1 1.1 0 0 1 1.56-1.56l0.77 0.77 4.17-4.17a1.1 1.1 0 1 1 1.56 1.56Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {step}
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}

function QuickTips() {
  return (
    <Card className="report-sidebar__card" tone="muted">
      <CardBody>
        <h3>Consejos Rápidos</h3>
        <ul>
          {tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}

function SupportHighlight() {
  return (
    <Card className="report-highlight" tone="elevated">
      <div className="report-highlight__image" role="presentation" />
      <blockquote>
        “No pierdas la esperanza, estamos aquí para ayudarte a que vuelva a casa.”
      </blockquote>
    </Card>
  );
}

export default ReportSidebar;
