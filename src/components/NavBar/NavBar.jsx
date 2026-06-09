import react from 'react';
import './NavBar.css';

function NavBar() {
    return( 
        <header className='ContNavbar'>
            <div className='logo'>
                <span>🐾 Huellitas</span>
            </div>

            <div className='nav-container'>
                <nav className='nav-links'>
                    <a href='#inicio'>Nosotros</a>
                    <a href='#adopciones'>Adopta</a>
                    <a href='#contacto' className='separador'>Reportar</a> 
                </nav>

                <div className='user-actions'>
                    <button className="notificacion">🔔</button>
                    <img src="../assets/profile.png" className="avatar"></img>
                </div>
            </div>
        </header>
    );
}

export default NavBar;