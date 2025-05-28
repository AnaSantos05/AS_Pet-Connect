import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FunctionContext } from '../contexts/FunctionContext'; // Importar o contexto

export const Login = () => {
  const navigate = useNavigate();
  const { selectedFunction } = useContext(FunctionContext); // Acessar a flag do contexto

  const handleLogin = (event) => {
    event.preventDefault(); // Evita que o form seja enviado

    // Redireciona com base na função escolhida
    if (selectedFunction === 'X') {
      navigate('/OwnerHomeInterface'); // Redireciona para a página do Owner
    } else if (selectedFunction === 'Y') {
      navigate('/PetCaretakerInterface'); // Redireciona para a página do Care-Taker
    } else {
      alert('Please select a function before logging in!'); // Caso nenhuma função tenha sido escolhida
    }
  };

  const styles = {
    container: {
      width: '100vw',
      height: '100vh',
      background: 'white',
      fontFamily: "'Lexend Peta', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
    },
    ellipse: {
      position: 'absolute',
      width: '180vw',
      height: '180vw',
      top: '-80vw',
      left: '-40vw',
      background:
        'linear-gradient(180deg, #2D2432 49%, rgba(20, 20, 20, 0.74) 60%, rgba(20, 20, 20, 0.38) 78%, rgba(20, 20, 20, 0) 93%), #FFB062',
      borderRadius: '9999px',
      border: '2vw solid #FFB062',
      zIndex: 0,
    },
    form: {
      zIndex: 1,
      width: '100%',
      maxWidth: '320px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    input: {
      height: '50px',
      borderRadius: '12px',
      border: '1px solid black',
      padding: '0 1rem',
      background: 'rgba(20, 20, 20, 0.1)',
      fontSize: '1rem',
    },
    button: {
      height: '50px',
      background: '#2D2432',
      color: '#FFB062',
      fontSize: '1.2rem',
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
    },
    checkboxRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '0.9rem',
    },
    checkbox: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    footer: {
      marginTop: 'auto',
      fontSize: '0.8rem',
      textAlign: 'center',
      color: 'black',
      zIndex: 1,
    },
    illustration: {
      width: '100%',
      maxWidth: '500px',
      marginBottom: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.ellipse}></div>
      <img
        src="https://placehold.co/628x471"
        alt="Ilustração"
        style={styles.illustration}
      />
      <form style={styles.form} onSubmit={handleLogin}>
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <div style={styles.checkboxRow}>
          <div style={styles.checkbox}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me!</label>
          </div>
          <a href="#" style={{ fontSize: '0.8rem', textDecoration: 'underline' }}>
            Forgot password?
          </a>
        </div>
        <button type="submit" style={styles.button}>
          LOGIN
        </button>
      </form>
      <p style={styles.footer}>By Hotel Bicho Solto</p>
    </div>
  );
};

export default Login;