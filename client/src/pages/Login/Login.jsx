import { useState } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handlesubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || 'Error al iniciar sesion')
            }

            // por ahora solo mostramos el token en consola 
            console.log('Login exitoso:', data);
            console.log('Token:', data.token);
            console.log('¡Inicio de sesion exitoso!');
        } catch (error) {
            setError('Error de conexion con el servidor');
        }
    }

    return (
        <div>
            <h2>Iniciar sesion</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form>
                <div>
                    <label>Email:</label>
                    <input
                        type = "email"
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Contraseña: </label>
                     <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
            <p>
                ¿No tienes cuenta? <a href="/register">Regístrate</a>
            </p>
        </div>
    )
}