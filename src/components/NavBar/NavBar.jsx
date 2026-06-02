import react from 'react';
import './NavBar.css';

function NavBar() {
    return( 
        <header>
            <div>
                <span>🐾 Huellitas</span>
            </div>

            <nav>
                <a href='#inicio'>Inicio</a>
                <a href='#adopciones'>Mascotas</a>
                <a href='#contacto'>Contacto</a>
            </nav>
        </header>
    );
}

export default NavBar;