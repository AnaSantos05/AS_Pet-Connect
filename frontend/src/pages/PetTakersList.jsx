import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PetTakersList = () => {
  const { petName, type } = useParams();
  const navigate = useNavigate();

  const petTakers = [
    {
      name: 'Madalena Matias',
      age: 25,
      description: 'I do pet–walking and I can stay with a pet when you go on summer vacations.',
    },
    {
      name: 'Pedro Lemos',
      age: 20,
      description: 'I will give your pet a bath and also do your pet’s fur.',
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
      cursor: 'pointer', // cursor para indicar clique
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
  };

  const handleClick = (name) => {
    if (name === 'João Ferreira') {
      navigate(`/PetTakerProfile`);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={{ color: '#FFB062', marginBottom: '0.5rem' }}>Pet care–Takers</h1>
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
    </div>
  );
};

export default PetTakersList;
