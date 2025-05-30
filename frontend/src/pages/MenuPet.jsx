import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FunctionContext } from '../contexts/FunctionContext';

export const MenuPet = () => {
  const navigate = useNavigate();
  const { selectedFunction } = useContext(FunctionContext);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div style={styles.container}>
      {/* Background ellipse - igual ao login */}
      <div style={styles.ellipse}></div>
      
      {/* Logo central com imagem */}
      <div style={styles.logoCircle}>
        <img 
          src="/images/logo.png"
          alt="Hotel Bicho Solto Logo" 
          style={styles.petLogo} 
        />
      </div>

      {/* Container dos botões */}
      <div style={styles.buttonsContainer}>
        <div 
          style={styles.button}
          onClick={handleLoginClick}
        >
          {selectedFunction === 'X' ? 'LOGIN AS OWNER' : 'LOGIN AS CARE-TAKER'}
        </div>
        
        <div 
          style={styles.button}
          onClick={handleRegisterClick}
        >
          {selectedFunction === 'X' ? 'REGISTER AS OWNER' : 'REGISTER AS CARE-TAKER'}
        </div>
      </div>

      {/* Footer */}
      <p style={styles.footer}>By Hotel Bicho Solto</p>
    </div>
  );
};


// Estilos
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
    background: 'linear-gradient(180deg, #2D2432 49%, rgba(20, 20, 20, 0.74) 60%, rgba(20, 20, 20, 0.38) 78%, rgba(20, 20, 20, 0) 93%), #FFB062',
    borderRadius: '9999px',
    border: '2vw solid #FFB062',
    zIndex: 0,
  },
  logoCircle: {
    width: '200px',
    height: '200px',
    background: 'white',
    borderRadius: '50%',
    border: '3px solid black',
    boxShadow: '0px 6px 4px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    zIndex: 1,
    marginTop: '10vh',
  },
  petLogo: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    padding: '20px',
  },
  buttonsContainer: {
    width: '100%',
    maxWidth: '350px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    zIndex: 1,
    marginTop: '10vh',
    marginBottom: 'auto',
  },
  button: {
    width: '100%',
    height: '60px',
    background: '#2D2432',
    border: '3px solid black',
    boxShadow: '0px 6px 4px rgba(0, 0, 0, 0.3)',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textTransform: 'uppercase',
  },
  footer: {
    marginTop: 'auto',
    padding: '1rem',
    fontSize: '0.8rem',
    color: 'black',
    zIndex: 1,
    textAlign: 'center',
  },
};

export default MenuPet;