import IconButton from "../common/IconButton";
import Button from "../common/Button";

import "./AdoptionPagination.css";

function AdoptionPagination() {
  return (
    <nav className="adoption-pagination" aria-label="Paginación">
      <IconButton aria-label="Página anterior">
        <svg viewBox="0 0 24 24" aria-hidden>
          <path
            d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
            fill="currentColor"
          />
        </svg>
      </IconButton>

      <Button variant="pill" className="is-active">1</Button>
      <Button variant="pill">2</Button>
      <Button variant="pill">3</Button>
      <span className="pagination-ellipsis">…</span>
      <Button variant="pill">12</Button>

      <IconButton aria-label="Página siguiente">
        <svg viewBox="0 0 24 24" aria-hidden>
          <path
            d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L12.17 12z"
            fill="currentColor"
          />
        </svg>
      </IconButton>
    </nav>
  );
}

export default AdoptionPagination;
