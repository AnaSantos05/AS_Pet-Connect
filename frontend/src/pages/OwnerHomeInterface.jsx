import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

export const OwnerHomeInterface = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pets')
      .then((res) => {
        if (!res.ok) throw new Error('Erro na resposta da API');
        return res.json();
      })
      .then((data) => {
        const enrichedPets = data.map((pet) => ({
          ...pet,
          image: pet.image || '/images/logo.png',
          status: pet.status || 'Care-Taker not assigned yet',
          statusColor: pet.statusColor || 'red',
        }));
        setPets(enrichedPets);
      })
      .catch((err) => {
        console.error('Erro ao carregar pets:', err);
        setPets([]);
      });
  }, []);

  const styles = {
    container: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: 'white',
      fontFamily: "'Lexend Peta', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
    },

    header: {
      width: '100%',
      height: '200px',
      backgroundColor: '#2D2432',
      borderBottomLeftRadius: '50px',
      borderBottomRightRadius: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },

    profileImage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      objectFit: 'cover',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    },

    sectionTitle: {
      marginTop: '1rem',
      fontSize: '1.5rem',
      fontWeight: 600,
    },

    text_name: {
      fontFamily: 'Londrina Solid',
      fontWeight: '400',
      color: 'rgb(147, 53, 73)',
      fontSize: '1.6rem',
    },

    text_age: {
      fontFamily: 'Londrina Solid',
      fontWeight: '400',
      color: '#78588A',
    },

    text_type: {
      fontFamily: 'Londrina Solid',
      fontWeight: '400',
      color: 'rgb(104, 128, 173)',
    },

    text_gender: {
      fontFamily: 'Londrina Solid',
      fontWeight: '400',
      color: '#FECD63',
    },

    ellipsisButton: {
      position: 'relative',
      top: '50%',
      right: '3px',
      cursor: 'pointer',
      fontSize: '1.5rem',
      color: 'red',
      zIndex: 10,
    },

    petList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1rem',
      padding: '1rem',
      width: '100%',
      maxWidth: '1000px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 2,
    },

    card: {
      backgroundColor: '#2D243261',
      borderRadius: '16px',
      padding: '1rem',
      width: '280px',
      display: 'flex',
      gap: '1rem',
      cursor: 'pointer',
    },

    petImage: {
      width: '100px',
      height: '100px',
      borderRadius: '12px',
      objectFit: 'cover',
      zIndex: 1,
    },

    petDetails: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontSize: '0.9rem',
    },

    status: (color) => ({
      color,
      fontWeight: 600,
      fontSize: '0.9rem',
    }),

    addCircle: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: '#2D2432',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      right: '20px',
      top: 'calc(50% - 25px)',
      cursor: 'pointer',
    },

    footer: {
      position: 'absolute',
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
      cursor: 'pointer',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      overflow: 'hidden',
      flexShrink: 0,
    },

    footerIconImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img
          style={styles.profileImage}
          src="/images/OwnerPfp.png"
          alt="Profile"
        />
      </div>

      <div style={styles.sectionTitle}>My Pets</div>

      <FontAwesomeIcon
        icon={faEllipsisVertical}
        style={styles.ellipsisButton}
        onClick={() => alert('Ellipsis button clicked!')}
      />

      <div style={styles.addCircle} onClick={() => navigate('/AddPet')}>
        <FontAwesomeIcon icon={faPlus} style={{ color: 'white' }} />
      </div>

      {pets.length === 0 ? (
        <div style={{ marginTop: '1rem' }}>Nenhum pet encontrado.</div>
      ) : (
        <div style={styles.petList}>
          {pets.map((pet, index) => (
            <div
              key={index}
              style={styles.card}
              onClick={() => navigate(`/PetMenu/${encodeURIComponent(pet.name)}`)}
            >
              <img src={pet.image} alt={pet.name} style={styles.petImage} />
              <div style={styles.petDetails}>
                <div style={styles.text_name}>{pet.name}</div>
                <div style={styles.text_age}>{pet.age}</div>
                <div style={styles.text_type}>{pet.race}</div>
                <div style={styles.text_gender}>{pet.gender}</div>
                <span style={styles.status(pet.statusColor)}>
                  {pet.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

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

export default OwnerHomeInterface;
