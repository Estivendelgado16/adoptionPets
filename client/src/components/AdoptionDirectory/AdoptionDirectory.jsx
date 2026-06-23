import { useState, useEffect } from "react";

import PageShell from "../common/PageShell";
import PageHeader from "../common/PageHeader";
import Breadcrumb from "../common/Breadcrumb";
import Button from "../common/Button";

import FilterSidebar from "./FilterSidebar";
import TipCard from "./TipCard";
import PetGrid from "./PetGrid";
import AdoptionPagination from "./AdoptionPagination";

import "./AdoptionDirectory.css";

const speciesFilters = [
  { id: "dogs", label: "Perros" },
  { id: "cats", label: "Gatos" },
  { id: "others", label: "Otros" },
];

const sizeFilters = [
  { value: "Pequeño", label: "Pequeño" },
  { value: "Mediano", label: "Mediano" },
  { value: "Grande", label: "Grande" },
];

const genderFilters = [
  { value: "Macho", label: "Macho" },
  { value: "Hembra", label: "Hembra" },
];

function AdoptionDirectory() {
  const [pets, setPets] = useState([]);
  const [activeSize, setActiveSize] = useState("Mediano");
  const [activeGender, setActiveGender] = useState("Macho");

  useEffect(() => {
    fetch("/api/pets")
      .then((res) => res.json())
      .then((data) => {
        setPets(data);
      })
      .catch(console.error);
  }, []);

  const breadcrumb = (
    <Breadcrumb
      items={[
        { label: "Inicio", href: "#" },
        { label: "Directorio de Adopción" },
      ]}
    />
  );

  const action = (
    <Button variant="ghost">
      Más recientes
      <svg
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          d="M7 10l5 5 5-5H7z"
          fill="currentColor"
        />
      </svg>
    </Button>
  );

  return (
    <PageShell className="adoption-directory">

      <PageHeader
        title="Mascotas en adopción"
        subtitle="Encontramos 128 compañeros esperando por ti."
        breadcrumb={breadcrumb}
        action={(
          <div className="adoption-header__action">
            <span>Ordenar por:</span>
            {action}
          </div>
        )}
      />

      <div className="adoption-layout">

        <div className="adoption-sidebar">
          <FilterSidebar
            speciesOptions={speciesFilters}
            sizeOptions={sizeFilters}
            genderOptions={genderFilters}
            activeSize={activeSize}
            onSizeChange={setActiveSize}
            activeGender={activeGender}
            onGenderChange={setActiveGender}
          />

          <TipCard>
            La paciencia es clave durante las primeras dos semanas de adaptación de tu nueva mascota.
          </TipCard>
        </div>

        <section className="adoption-results">
          <PetGrid pets={pets} />
          <AdoptionPagination />
        </section>

      </div>

    </PageShell>
  );
}

export default AdoptionDirectory;
