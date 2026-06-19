import Card, { CardBody } from "../common/Card";
import Button from "../common/Button";

import "./ReportForm.css";

const speciesOptions = ["Perro", "Gato", "Ave", "Conejo", "Otro"];

function ReportForm() {
  return (
    <Card className="report-form" tone="elevated" as="section">
      <CardBody>
        <form className="report-form__grid">

          <IdentitySection />

          <Fieldset label="Última Ubicación Vista" hint="Ingresa calle, barrio o ciudad">
            <input
              type="text"
              name="lastSeen"
              placeholder="Ej: Calle, Barrio o Ciudad"
            />
          </Fieldset>

          <Fieldset label="Marca el punto en el mapa">
            <MapPlaceholder />
          </Fieldset>

          <Fieldset label="Descripción y Señales Particulares">
            <textarea
              name="description"
              rows={4}
              placeholder="Ej: Collar rojo, mancha blanca en el ojo derecho, muy asustadizo..."
            />
          </Fieldset>

          <Fieldset label="Fotografía de la Mascota">
            <UploadDropzone />
          </Fieldset>

          <div className="report-form__actions">
            <Button variant="secondary" type="button">
              Cancelar
            </Button>
            <Button type="submit">
              Publicar Reporte
            </Button>
          </div>

        </form>
      </CardBody>
    </Card>
  );
}

function IdentitySection() {
  return (
    <div className="report-form__identity">
      <Fieldset
        label="Nombre de la Mascota"
        hint='Si no lo conoces, escribe "Desconocido".'
      >
        <input
          type="text"
          name="petName"
          placeholder="Ej: Max"
        />
      </Fieldset>

      <Fieldset label="Especie">
        <div className="select-field">
          <select defaultValue={speciesOptions[0]} name="species">
            {speciesOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </Fieldset>
    </div>
  );
}

function Fieldset({ label, hint, children }) {
  return (
    <div className="report-field">
      <label>{label}</label>
      {children}
      {hint && <span className="report-field__hint">{hint}</span>}
    </div>
  );
}

function MapPlaceholder() {
  return (
    <div className="map-placeholder" role="presentation">
      <div className="map-pin">
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 32 32"
        >
          <path
            d="M16 2a10 10 0 0 0-10 10c0 7.5 10 18 10 18s10-10.5 10-18A10 10 0 0 0 16 2zm0 13.5A3.5 3.5 0 1 1 19.5 12 3.5 3.5 0 0 1 16 15.5z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p>Haz clic en el mapa para marcar el punto exacto.</p>
    </div>
  );
}

function UploadDropzone() {
  return (
    <label className="upload-dropzone">
      <input
        type="file"
        name="petPhoto"
        accept="image/*"
      />
      <div className="upload-dropzone__icon" aria-hidden="true">
        <svg viewBox="0 0 48 48" focusable="false">
          <path
            d="M24 6a1.5 1.5 0 0 1 1.5 1.5v16.19l5.72-5.71a1.5 1.5 0 0 1 2.12 2.12l-8.5 8.5a1.5 1.5 0 0 1-2.12 0l-8.5-8.5a1.5 1.5 0 0 1 2.12-2.12l5.68 5.7V7.5A1.5 1.5 0 0 1 24 6ZM11 30a1.5 1.5 0 0 1 0 3A4 4 0 0 0 7 37v2a4 4 0 0 0 4 4h26a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4 1.5 1.5 0 0 1 0-3 7 7 0 0 1 7 7v2a7 7 0 0 1-7 7H11a7 7 0 0 1-7-7v-2a7 7 0 0 1 7-7Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p>Arrastra una imagen o haz clic para subir</p>
      <span>JPG, PNG. Máx. 5MB</span>
    </label>
  );
}

export default ReportForm;
