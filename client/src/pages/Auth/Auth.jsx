import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/auth.css";

function Auth() {
  const navigate = useNavigate();
  const location = useLocation();
  const isRegisterPage = location.pathname === "/register";

  const [isFlipped, setIsFlipped] = useState(isRegisterPage);

  useEffect(() => {
    setIsFlipped(isRegisterPage);
  }, [isRegisterPage]);

  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Register state
  const [username, setUsername] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regError, setRegError] = useState('');
  const [regSuccess, setRegSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = await res.json();
      if (!res.ok) {
        setLoginError(data.message || 'Error al iniciar sesion');
        return;
      }
      console.log('Login exitoso:', data);
      console.log('Token:', data.token);
    } catch {
      setLoginError('Error de conexion con el servidor');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setRegError('');
    setRegSuccess('');

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email: regEmail, phone, password: regPassword }),
      });
      const data = await res.json();
      if (!res.ok) {
        setRegError(data.message || 'Error al registrarse');
        return;
      }
      setRegSuccess('¡Registro exitoso! Ahora puedes iniciar sesión.');
    } catch {
      setRegError('Error de conexión con el servidor');
    }
  };

  const flipToRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const flipToLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className={`flip-container ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-inner">
          {/* Login - front */}
          <div className="flip-front auth-card">
            <h2>Iniciar sesion</h2>
            {loginError && <p className="auth-message error">{loginError}</p>}
            <form onSubmit={handleLogin}>
              <div>
                <label>Email:</label>
                <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
              </div>
              <div>
                <label>Contraseña:</label>
                <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
              </div>
              <button type="submit">Iniciar Sesión</button>
            </form>
            <p>¿No tienes cuenta? <a href="/register" onClick={flipToRegister}>Regístrate</a></p>
          </div>

          {/* Register - back */}
          <div className="flip-back auth-card">
            <h2>Crear Cuenta</h2>
            {regError && <p className="auth-message error">{regError}</p>}
            {regSuccess && <p className="auth-message success">{regSuccess}</p>}
            <form onSubmit={handleRegister}>
              <div>
                <label>Nombre de usuario:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" value={regEmail} onChange={(e) => setRegEmail(e.target.value)} required />
              </div>
              <div>
                <label>Teléfono:</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div>
                <label>Contraseña:</label>
                <input type="password" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} required />
              </div>
              <button type="submit">Registrarse</button>
            </form>
            <p>¿Ya tienes cuenta? <a href="/login" onClick={flipToLogin}>Inicia sesión</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
