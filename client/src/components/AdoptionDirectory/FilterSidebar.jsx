import Card, { CardBody } from "../common/Card";
import Button from "../common/Button";
import CheckboxOption from "../common/CheckboxOption";
import PillToggle from "../common/PillToggle";

import "./FilterSidebar.css";

const ageOptions = [
  "Todas las edades",
  "Cachorro (0 - 1 año)",
  "Joven (1 - 3 años)",
  "Adulto (3 - 7 años)",
  "Senior (7+ años)",
];

function FilterSidebar({
  speciesOptions,
  sizeOptions,
  genderOptions,
  activeSize,
  onSizeChange,
  activeGender,
  onGenderChange,
}) {
  return (
    <Card className="filter-sidebar" tone="default">
      <CardBody className="filter-sidebar__body">
        <h2>Filtros</h2>

        <div className="filter-block">
          <span className="filter-label">Especie</span>
          <div className="filter-options">
            {speciesOptions.map((option, index) => (
              <CheckboxOption
                key={option.id}
                label={option.label}
                defaultChecked={index === 0}
              />
            ))}
          </div>
        </div>

        <div className="filter-block">
          <span className="filter-label">Edad</span>
          <div className="dropdown-field">
            <select defaultValue={ageOptions[0]}>
              {ageOptions.map((age) => (
                <option key={age}>{age}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="filter-block">
          <span className="filter-label">Tamaño</span>
          <PillToggle
            className="pill-group"
            options={sizeOptions}
            active={activeSize}
            onChange={onSizeChange}
          />
        </div>

        <div className="filter-block">
          <span className="filter-label">Género</span>
          <PillToggle
            className="pill-group"
            options={genderOptions}
            active={activeGender}
            onChange={onGenderChange}
          />
        </div>

        <Button
          className="apply-button"
          type="button"
        >
          Aplicar Filtros
        </Button>

      </CardBody>
    </Card>
  );
}

export default FilterSidebar;
