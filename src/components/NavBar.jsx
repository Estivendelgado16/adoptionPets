function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🐾 PetAdoption</div>

      <div className="links">
        <a href="#">Nosotros</a>
        <a href="#">Adopta</a>
        <a href="#">Reportar</a>
      </div>

      <div className="right">
        <span>🔔</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
        />
      </div>
    </nav>
  );
}

export default Navbar;