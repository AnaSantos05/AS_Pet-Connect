import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PetTakersList = () => {
  const navigate = useNavigate();
  const { petName, serviceType } = useParams();

  const petTakers = [
    {
      name: 'Madalena Matias',
      age: 25,
      description: 'I do pet–walking and I can stay with a pet when you go on summer vacations.',
    },
    {
      name: 'Pedro Lemos',
      age: 20,
      description: "I will give your pet a bath and also do your pet's fur.",
    },
    {
      name: 'Patrícia Lee',
      age: 44,
      description: 'I will go for a walk with your pet in a defined schedule or just for a day. I can also give training to your pet.',
    },
    {
      name: 'João Ferreira',
      age: 36,
      description: 'I do pet–sitting and pet training for dogs and cats.',
    },
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: 'white',
      padding: '1rem',
      fontFamily: "'Lexend Peta', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '80px', // Add padding for footer
      position: 'relative',
    },
    header: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
    },
    backButton: {
      fontSize: '1.5rem',
      color: '#2D2432',
      cursor: 'pointer',
      padding: '0.5rem',
      userSelect: 'none',
      fontWeight: 'bold',
    },
    headerTitle: {
      flex: 1,
      textAlign: 'center',
      color: '#FFB062',
      marginBottom: '0.5rem',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    card: {
      backgroundColor: '#4B3B6B',
      color: 'white',
      borderRadius: '12px',
      padding: '1rem',
      marginBottom: '1rem',
      width: '90%',
      maxWidth: '360px',
      textAlign: 'left',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      cursor: 'pointer',
    },
    title: {
      color: '#FFB062',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      marginBottom: '0.2rem',
    },
    age: {
      color: '#FFB062',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    descriptionLabel: {
      fontWeight: 'bold',
      color: '#FECD63',
      marginBottom: '0.2rem',
    },
    description: {
      color: 'white',
    },
    location: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#2D2432',
      marginBottom: '1rem',
    },
    footer: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '60px',
      background: '#2D2432',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      zIndex: 10,
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
    },
    footerIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      overflow: 'hidden',
      cursor: 'pointer',
    },
    footerIconImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };

  const handleClick = (name) => {
    if (name === 'João Ferreira') {
      // Store the selected caretaker ID (assuming João has ID 2)
      localStorage.setItem('selectedCaretakerId', '2');
      navigate(`/PetTakerProfile`);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div 
          style={styles.backButton} 
          onClick={() => navigate(-1)}
          title="Go back"
        >
          ←
        </div>
        <h1 style={styles.headerTitle}>Pet care–Takers</h1>
        <div style={{ width: '2rem' }}></div> {/* Spacer for centering */}
      </div>
      
      <div style={styles.location}>Glória, Aveiro</div>
      
      {petTakers.map((pt, index) => (
        <div
          key={index}
          style={styles.card}
          onClick={() => handleClick(pt.name)}
        >
          <div style={styles.title}>👤 {pt.name}</div>
          <div style={styles.age}>{pt.age} years old</div>
          <div style={styles.descriptionLabel}>Description:</div>
          <div style={styles.description}>{pt.description}</div>
        </div>
      ))}

      <div style={styles.footer}>
        <div style={styles.footerIcon}>
          <img
            src="/images/home-on.svg"
            alt="Home"
            style={styles.footerIconImage}
            onClick={() => navigate('/OwnerHomeInterface')}
          />
        </div>
        <div style={styles.footerIcon}>
          <img
            src="/images/map.svg"
            alt="Map"
            style={styles.footerIconImage}
            onClick={() => navigate('/OwnerMap')}
          />
        </div>
        <div style={styles.footerIcon}>
          <img
            src="/images/settings.svg"
            alt="Settings"
            style={styles.footerIconImage}
            onClick={() => navigate('/OwnerSettings')}
          />
        </div>
      </div>
    </div>
  );
};

export default PetTakersList;