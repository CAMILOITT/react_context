import { Link } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
// import { generateToken } from '../../../components/challenge5/token/Token';

export default function Login() {
  const [error, setError] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = e.target;
    const emailRegiter = sessionStorage.getItem(email);
    console.log('datos ingresados', email.value, password.value);
    
    if (!email.value || !password.value) {
      setError('todos los campos son obligatorio');
    }
    
    sessionStorage.setItem('session', email.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="formSign">
        <h1 className="formSign__title">Login</h1>
        <span>{error}</span>
        <label className="formSign__label">Email:</label>
        <input
          type="email"
          name="userEmail"
          id="email"
          placeholder="email"
          className="formSign__input"
          autoComplete="on"
          requerid
        />
        <label className="formSign__label">Password:</label>
        <input
          type="password"
          name="userPassword"
          id="password"
          placeholder="password"
          className="formSign__input"
          autoComplete="off"
          requerid
        />
        <button type="submit">Iniciar sesión</button>
      </form>
      <div>
        <Link to="/register">Registrarse</Link>
      </div>
    </div>
  );
}
