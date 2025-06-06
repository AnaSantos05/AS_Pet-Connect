import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceRequests = () => {
  const navigate = useNavigate();
  const [responses, setResponses] = useState({});

  const handleResponse = (index, status) => {
    setResponses(prev => ({ ...prev, [index]: status }));
  };

  const styles = {
    container: {
      fontFamily: "'Lexend Peta', sans-serif",
      backgroundColor: '#fff',
      minHeight: '100vh',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '80px', // espaço para o footer
    },
    header: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#FFB062',
      marginTop: '1rem',
    },
    subheader: {
      fontSize: '1.2rem',
      marginBottom: '1rem',
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
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    user: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontWeight: 'bold',
    },
    description: {
      margin: '0.5rem 0',
    },
    petInfo: {
      marginTop: '0.8rem',
      textAlign: 'center',
    },
    petImage: {
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      borderRadius: '12px',
      margin: '0.5rem auto',
    },
    note: {
      color: '#FEC063',
      fontSize: '0.9rem',
      marginTop: '0.5rem',
    },
    reward: {
      marginTop: '0.8rem',
      fontWeight: 'bold',
    },
    buttons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      marginTop: '0.5rem',
    },
    iconButton: {
      fontSize: '1.5rem',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    accept: {
      backgroundColor: '#4CAF50',
      color: 'white',
    },
    reject: {
      backgroundColor: '#E53935',
      color: 'white',
    },
    statusText: {
      marginTop: '0.5rem',
      fontWeight: 'bold',
      fontSize: '1rem',
      color: '#FFD700',
      textAlign: 'center',
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
      zIndex: 1,
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
    },
    footerIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      overflow: 'hidden',
    },
    footerIconImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };

  const requests = [
    {
      owner: 'Bernardo Cunha',
      rating: 2,
      pet: 'Gino',
      gender: 'Male',
      age: 5,
      species: 'Cat',
      dateStart: '10/10/2025',
      dateEnd: '15/12/2025',
      note: 'Gino only eats fish. Please feed him only salmon and shrimp. He also needs to take his meds every 12 hours.',
      image: '/images/gino.png',
      value: '12€',
    },
    {
      owner: 'Afonso H.',
      rating: 5,
      pet: 'Patinhas',
      gender: 'Female',
      age: 1,
      species: 'Cat',
      dateStart: '10/10/2025',
      dateEnd: '15/10/2025',
      note: 'Patinhas loves to play a lot.',
      image: '/images/patinhas.png',
      value: '12€',
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>Pet–Training</div>
      <div style={styles.subheader}>Requests</div>

      {requests.map((req, i) => (
        <div key={i} style={styles.card}>
          <div style={styles.user}>
            👤 {req.owner}
            <span>{"★".repeat(req.rating)}{"☆".repeat(5 - req.rating)}</span>
          </div>

          <div style={styles.description}>
            <strong>Description:</strong> Accomodation for {req.pet} from {req.dateStart} till {req.dateEnd}.
          </div>

          <div style={styles.petInfo}>
            <img src={req.image} alt={req.pet} style={styles.petImage} />
            <div>
              <strong>{req.pet}</strong> ({req.gender})<br />
              {req.age} years old<br />
              {req.species}
            </div>
            <div style={styles.note}><strong>Note:</strong> {req.note}</div>
          </div>

          <div style={styles.reward}>You will receive {req.value}</div>

          {responses[i] ? (
            <div style={styles.statusText}>
              {responses[i] === 'accepted' ? '✅ Accepted' : '❌ Rejected'}
            </div>
          ) : (
            <div style={styles.buttons}>
              <div
                style={{ ...styles.iconButton, ...styles.reject }}
                onClick={() => handleResponse(i, 'rejected')}
              >
                ✖
              </div>
              <div
                style={{ ...styles.iconButton, ...styles.accept }}
                onClick={() => handleResponse(i, 'accepted')}
              >
                ✔
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Footer */}
      <div style={styles.footer}>
        <div style={styles.footerIcon}>
          <img
            src="/images/home.svg"
            alt="Home"
            style={styles.footerIconImage}
            onClick={() => navigate('/PetSitterTakerHomeInterface')}
          />
        </div>
        <div style={styles.footerIcon}>
          <img
            src="/images/map.svg"
            alt="Map"
            style={styles.footerIconImage}
            onClick={() => navigate('/PetTakerMap')}
          />
        </div>
        <div style={styles.footerIcon}>
          <img
            src="/images/settings.svg"
            alt="Settings"
            style={styles.footerIconImage}
            onClick={() => navigate('/PetTakerSettings')}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceRequests;

