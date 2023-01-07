import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = e.target;

    if (!name.value || !email.value || !password.value) {
      setError('todos los campos son requeridos');
      return;
    }
    setError('');

    if (!email.value.includes('@')) {
      setError('correo no valido');
      return;
    }
    setError('');
    if (password.value.length < 7) {
      setError('password no valido');
      return;
    }
    setError('');

    console.log(sessionStorage.getItem('session'));
  }
  return (
    <div>
      <form className="formSign" onSubmit={handleSubmit}>
        <h1 className="formSign__title">Register</h1>
        <span className="formSign__messageError">{error}</span>
        <label htmlFor="name" className="formSign__label">
          Nombre:
        </label>
        <input
          type="text"
          name="userName"
          id="name"
          className="formSign__input"
          requerid
        />
        <label htmlFor="email" className="formSign__label">
          Email:
        </label>
        <input
          type="email"
          name="userEmail"
          id="email"
          className="formSign__input"
          requerid
        />
        <label htmlFor="password" className="formSign__label">
          Password:
        </label>
        <input
          type="password"
          name="userPassword"
          id="password"
          className="formSign__input"
          requerid
        />
        <button type="submit">Registrarse</button>
      </form>
      <Link to="/login">iniciar sesión</Link>
    </div>
  );
}
