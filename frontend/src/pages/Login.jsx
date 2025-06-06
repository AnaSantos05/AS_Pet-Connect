import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FunctionContext } from '../contexts/FunctionContext';

export const Login = () => {
  const navigate = useNavigate();
  const { selectedFunction } = useContext(FunctionContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(process.env.REACT_APP_API_BASE_URL + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const result = await response.json();

    if (response.ok) {
      const { id, type } = result.user;

      localStorage.setItem('userId', id);
      localStorage.setItem('userType', type);  // Guarda o tipo

      if (type === 'owner') {
        navigate('/OwnerHomeInterface');
      } else if (type === 'sitter') {
        navigate('/PetSitterTakerHomeInterface');
      } else {
        alert('Tipo de utilizador desconhecido.');
      }
    } else {
      alert(result.error || "Falha no login.");
    }
  } catch (error) {
    console.error("Erro de login:", error);
    alert("Erro ao comunicar com o servidor.");
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
      background: 'linear-gradient(180deg, #2D2432 49%, rgba(20, 20, 20, 0.74) 60%, rgba(20, 20, 20, 0.38) 78%, rgba(20, 20, 20, 0) 93%), #FFB062',
      borderRadius: '9999px',
      border: '2vw solid #FFB062',
      zIndex: 0,
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '500px',
      marginTop: '10vh',
      zIndex: 1,
      flex: 1,
      justifyContent: 'center',
    },
    logoCircle: {
      width: '180px',
      height: '180px',
      background: 'white',
      borderRadius: '50%',
      border: '3px solid black',
      boxShadow: '0px 6px 4px rgba(0, 0, 0, 0.3)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      marginBottom: '3rem',
    },
    petLogo: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      padding: '20px',
    },
    form: {
      width: '100%',
      maxWidth: '320px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      marginTop: '1rem',
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
      transition: 'all 0.2s ease',
      marginTop: '1rem',
      ':hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
      },
      ':active': {
        transform: 'translateY(1px)',
        boxShadow: '0 2px 3px rgba(0, 0, 0, 0.2)',
      },
    },
    checkboxRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '0.9rem',
      marginTop: '-0.5rem',
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
      padding: '1rem 0',
      width: '100%',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.ellipse}></div>
      
      <div style={styles.contentWrapper}>
        {/* Logo central igual ao MenuPet */}
        <div style={styles.logoCircle}>
          <img 
            src="/images/logo.png"
            alt="Hotel Bicho Solto Logo" 
            style={styles.petLogo} 
          />
        </div>
        
        <form style={styles.form} onSubmit={handleLogin}>
          {/* Campos mantidos mas não obrigatórios */}
            <input 
                type="email" 
                placeholder="Email" 
                style={styles.input} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input 
                type="password" 
                placeholder="Password" 
                style={styles.input} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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
      </div>
      
      <p style={styles.footer}>By Hotel Bicho Solto</p>
    </div>
  );
};

export default Login;