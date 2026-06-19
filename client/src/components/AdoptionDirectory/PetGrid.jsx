import PetCard from "./PetCard";

import "./PetGrid.css";

function PetGrid({ pets }) {
  return (
    <div className="pet-grid">
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
}

export default PetGrid;
