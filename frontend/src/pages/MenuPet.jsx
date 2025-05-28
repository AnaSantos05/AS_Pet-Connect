import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FunctionContext } from '../contexts/FunctionContext'; // Importar o contexto

export const MenuPet = () => {
  const navigate = useNavigate();
  const { selectedFunction } = useContext(FunctionContext); // Acessar a flag do contexto

  const handleLoginClick = () => {
    navigate('/login'); // Redireciona para a página de login
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Redireciona para a página de registro
  };

  const styles = {
    page: {
      width: '100vw',
      height: '100vh',
      background: 'white',
      fontFamily: "'Lexend Peta', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '1rem',
      boxSizing: 'border-box',
    },
    ellipse: {
      position: 'absolute',
      width: '180vw',
      height: '180vw',
      top: '-80vw',
      left: '-40vw',
      background: 'linear-gradient(180deg, #2D2432 49%, rgba(20, 20, 20, 0.74) 60%, rgba(20, 20, 20, 0.38) 78%, rgba(20, 20, 20, 0) 93%), #FFB062',
      borderRadius: '9999px',
      border: '2vw solid #FFB062',
      zIndex: 0,
    },
    ilustracao: {
      width: '100%',
      maxWidth: '500px',
      marginTop: '5vh',
      zIndex: 1,
    },
    button: {
      width: '80%',
      maxWidth: '300px',
      height: '60px',
      background: '#2D2432',
      border: '3px solid black',
      boxShadow: '0px 6px 4px rgba(0, 0, 0, 0.3)',
      color: 'white',
      fontSize: '1.2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '10px',
      cursor: 'pointer',
      margin: '1rem 0',
      zIndex: 1,
    },
    footer: {
      marginTop: 'auto',
      padding: '1rem',
      fontSize: '0.8rem',
      color: 'black',
      zIndex: 1,
    },
  };

  return (
    <div style={styles.page}>
      {/* Ellipse background */}
      <div style={styles.ellipse}></div>

      {/* Ilustração */}
      <img
        src="https://placehold.co/628x471"
        alt="Ilustração"
        style={styles.ilustracao}
      />

      {/* LOGIN Button */}
      <div
        style={styles.button}
        onClick={handleLoginClick}
      >
        {selectedFunction === 'X' ? 'LOGIN AS OWNER' : 'LOGIN AS CARE-TAKER'}
      </div>

      {/* REGISTER Button */}
      <div
        style={styles.button}
        onClick={handleRegisterClick}
      >
        {selectedFunction === 'X' ? 'REGISTER AS OWNER' : 'REGISTER AS CARE-TAKER'}
      </div>

      {/* Footer */}
      <p style={styles.footer}>By Hotel Bicho Solto</p>
    </div>
  );
};

export default MenuPet;