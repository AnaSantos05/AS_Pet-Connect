import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FunctionContext } from '../contexts/FunctionContext';

export const Register = () => {
  const { selectedFunction } = useContext(FunctionContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleRegister = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.repeatPassword) {
    alert("As senhas não coincidem!");
    return;
  }

  const type = selectedFunction === 'X' ? 'owner' : 'sitter';

  try {
    const response = await fetch(process.env.REACT_APP_API_BASE_URL + '/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        type: type
      })
    });

    const result = await response.json();

    if (response.ok) {
      navigate('/login');
    } else {
      alert(result.error || "Erro no registo.");
    }

  } catch (error) {
    console.error("Erro ao registar:", error);
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
      marginBottom: '2rem',
    },
    petLogo: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      padding: '20px',
    },
    headerText: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      color: '#2D2432',
      textAlign: 'center',
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
      width: '100%',
      boxSizing: 'border-box',
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
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      ':hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
      },
      ':active': {
        transform: 'translateY(1px)',
        boxShadow: '0 2px 3px rgba(0, 0, 0, 0.2)',
      },
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
    loginLink: {
      color: '#2D2432',
      textDecoration: 'underline',
      marginTop: '1rem',
      cursor: 'pointer',
      fontWeight: 'bold',
      ':hover': {
        color: '#FFB062',
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.ellipse}></div>
      
      <div style={styles.contentWrapper}>
        <div style={styles.logoCircle}>
          <img 
            src="/images/logo.png"
            alt="Hotel Bicho Solto Logo" 
            style={styles.petLogo} 
          />
        </div>
        
        <h1 style={styles.headerText}>Criar Conta</h1>
        
        <form style={styles.form} onSubmit={handleRegister}>
          <input 
            type="text" 
            name="name"
            placeholder="Nome" 
            style={styles.input} 
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            style={styles.input} 
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          
          <input 
            type="password" 
            name="password"
            placeholder="Senha" 
            style={styles.input} 
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          
          <input 
            type="password" 
            name="repeatPassword"
            placeholder="Repetir Senha" 
            style={styles.input} 
            value={formData.repeatPassword}
            onChange={handleInputChange}
            required
          />
          
          <button type="submit" style={styles.button}>
            Registrar
          </button>
          
          <p style={styles.loginLink} onClick={() => navigate('/login')}>
            Já tem uma conta? Faça login
          </p>
        </form>
      </div>
      
      <p style={styles.footer}>By Hotel Bicho Solto</p>
    </div>
  );
};

export default Register;