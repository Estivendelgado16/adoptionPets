import React from "react";
import "./Footer.css";
import compartirIcon from '../../assets/icons/compartir.png';
import placaImg from '../../assets/icons/placa.png';
import emailIcon from '../../assets/icons/email.png';


function Footer() {
    return (
        <footer className="main-footer">
            {/* Sección Superior: Información, Enlaces y Boletín */}
            <div className="footer-content">
                
                {/* Bloque de la Marca */}
                <div className="footer-brand">
                    <h2>PetAdoption</h2>
                    <p>Transformando vidas a través de la adopción </p>
                    <p>responsable y el cuidado animal compasivo.</p>
                </div>

                {/* Navegación: Plataforma */}
                <div className="footer-nav-group">
                    <h3>Plataforma</h3>
                    <ul>
                        <li><a href="#mision">Misión</a></li>
                        <li><a href="#accesibilidad">Accesibilidad</a></li>
                    </ul>
                </div>

                {/* Navegación: Legal */}
                <div className="footer-nav-group">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#privacidad">Privacidad</a></li>
                        <li><a href="#terminos">Términos y Condiciones</a></li>
                    </ul>
                </div>

                {/* Bloque del Boletín (Newsletter) */}
                <div className="footer-newsletter">
                    <h3>Boletín</h3>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="Tu correo electrónico" 
                            required 
                        />
                        <button type="submit">Unirse</button>
                    </form>
                </div>
            </div>

            {/* Línea divisoria decorativa */}
            <hr className="footer-divider" />

            {/* Sección Inferior: Copyright y Redes Sociales */}
            <div className="footer-bottom">
                <div className="footer-copyright">
                    <p>&copy; 2026 PetAdoption. Comprometidos con el bienestar animal.</p>
                </div>
                <div className="footer-socials">
                    <a href="#placa" aria-label="Placa">
                        <img src={placaImg} alt="placa" />
                    </a>
                    <a href="#compartir" aria-label="Compartir en redes sociales">
                        <img src={compartirIcon} alt="Compartir" />
                    </a>

                    <a href="#Email" aria-label="Email">
                        <img src={emailIcon} alt="Email" />
                    </a>
                    {/* Se eliminan las etiquetas img vacías para evitar elementos rotos en el DOM */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;