import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    // El header ahora es el contenedor que va de extremo a extremo y lleva la línea
    <header className="separadorB"> 
      {/* Este div interno contiene tus márgenes de 50px y alinea el contenido */}
      <div className="ContNavbar">
        <div className="logo">
          {/* Cambié el texto a PetAdoption para que combine con tu captura original, cámbialo si prefieres Huellitas */}
          <span>PetAdoption</span> 
        </div>

        <div className="nav-container">
          <nav className="nav-links">
            <NavLink to="/nosotros" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Nosotros
            </NavLink>
            <NavLink to="/adopta" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Adopta
            </NavLink>
            <NavLink
              to="/reportar"
              className={({ isActive }) => (isActive ? 'active separadorA' : 'separadorA')}
            >
              Reportar
            </NavLink>
          </nav>

          <div className="user-actions">
            <button className="notificacion" aria-label="notificaciones">
              🔔
            </button>
            <img src="../assets/profile.png" className="avatar" alt="avatar" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;