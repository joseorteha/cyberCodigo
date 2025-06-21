"use client";

import React, { useState } from 'react';
import { login } from './actions';
import '../../../scss/AdminPanel.scss'; // Reutilizaremos algunos estilos

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    
    const formData = new FormData(event.currentTarget);
    const result = await login(formData);

    if (result?.error) {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <div className="admin-login-container">
      <div className="login-box">
        <h2>Cyber Código - Admin</h2>
        <p>Ingresa la contraseña para administrar el contenido.</p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} data-netlify="false">
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className={error ? 'input-error' : ''}
            />
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Verificando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
} 