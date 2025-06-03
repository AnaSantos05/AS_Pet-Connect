import React from 'react';
import { useNavigate } from 'react-router-dom';

const PetTakerProfile = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      fontFamily: "'Lexend Peta', sans-serif",
      backgroundColor: '#fff',
      minHeight: '100vh',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
    },
    topSection: {
      textAlign: 'center',
      marginTop: '1rem',
    },
    name: {
      fontWeight: 'bold',
      fontSize: '1.4rem',
    },
    photo: {
      width: '120px',
      height: '120px',
      borderRadius: '60px',
      objectFit: 'cover',
      border: '4px solid white',
      marginTop: '-60px',
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
    },
    label: {
      fontWeight: 'bold',
      color: '#FECD63',
    },
    age: {
      color: '#FFB062',
      fontWeight: 'bold',
    },
    rating: {
      margin: '0.5rem 0',
    },
    sampleImage: {
      width: '100%',
      borderRadius: '12px',
      marginTop: '0.5rem',
    },
    checkButton: {
      position: 'fixed',
      bottom: '80px',
      right: '20px',
      backgroundColor: '#2D2432',
      color: 'white',
      borderRadius: '50%',
      width: '48px',
      height: '48px',
      fontSize: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <button onClick={() => navigate(-1)} style={{ alignSelf: 'flex-start' }}>←</button>

      <div style={styles.topSection}>
        <div style={styles.name}>João Ferreira</div>
        <img
          src="/images/joao.jpg"
          alt="João Ferreira"
          style={styles.photo}
        />
        <div style={styles.rating}>
          ⭐☆☆☆☆ <span style={{ fontSize: '0.9rem' }}>(1)</span>
        </div>
        <div>Rua Santa Maria da Feira, 19, AVEIRO</div>
        <div>Male</div>
        <div style={styles.age}>36 years old</div>
      </div>

      <div style={styles.card}>
        <div style={styles.label}>Description:</div>
        <div>I do pet–sitting and pet training for dogs and cats.</div>
      </div>

      <div style={styles.card}>
        <div style={styles.label}>Competences:</div>
        <div>
          As a Doctor of Veterinary Medicine trained in a reputable medical school, I bring extensive expertise in animal health and care, including emergency procedures and CPR. I also provide immediate first aid for unexpected injuries or illnesses.
        </div>
      </div>

      <div style={styles.card}>
        <div style={styles.label}>Pictures of work</div>
        <img src="/images/sample-pet.jpg" alt="Work sample" style={styles.sampleImage} />
      </div>

      {/* Botão de confirmação ✔ */}
      <div
        style={styles.checkButton}
        onClick={() => navigate('/OwnerFinal')}
        title="Confirmar e continuar"
      >
        ✓
      </div>
    </div>
  );
};

export default PetTakerProfile;

