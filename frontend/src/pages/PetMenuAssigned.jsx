import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const PetMenuAssigned = () => {
  const navigate = useNavigate();
  const { petName } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  const baseFont = "'Londrina Solid', cursive, sans-serif";

  useEffect(() => {
    const storedPetData = localStorage.getItem('selectedPetData');
    if (storedPetData) {
      setPet(JSON.parse(storedPetData));
      setLoading(false);
      return;
    }

    if (petName) {
      fetch(`http://localhost:5000/api/pets/${encodeURIComponent(petName)}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            console.error('Pet não encontrado:', data.error);
          } else {
            setPet(data);
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar informações do pet:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [petName]);

  const getCaretakerInfo = () => {
    if (!pet) return null;

    if (pet.caretaker_type === 'hotel' || pet.caretaker_id === 999) {
      return {
        name: 'Hotel Bicho Solto',
        logo: '/images/bichosolto-logo.png',
      };
    } else if (pet.caretaker_id === 2) {
      return {
        name: 'João Ferreira',
        logo: '/images/joao_ferreira.jpg',
      };
    } else {
      return {
        name: 'Individual Caretaker',
        logo: '/images/default-caretaker.png',
      };
    }
  };

  const styles = {
    container: {
      width: '100vw',
      minHeight: '100vh',
      background: 'white',
      fontFamily: baseFont,
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '80px',
    },
    backArrow: {
      position: 'fixed',
      top: '1.5rem',
      left: '1rem',
      fontSize: '2.4rem',
      color: '#2D2432',
      cursor: 'pointer',
      zIndex: 10,
    },
    petImage: {
      width: '45vw',
      maxWidth: '180px',
      height: 'auto',
      marginTop: '6rem',
      borderRadius: '20px',
      border: '3px solid #2D2432',
      zIndex: 2,
      objectFit: 'cover',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      userSelect: 'none',
    },
    textGroup: {
      textAlign: 'center',
      marginTop: '1rem',
      zIndex: 2,
    },
    name: {
      fontSize: '2.4rem',
      color: '#2D2432',
      fontWeight: '900',
      marginBottom: '0.25rem',
      userSelect: 'none',
    },
    genderGroup: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      gap: '0.3rem',
      fontSize: '1.2rem',
      userSelect: 'none',
    },
    typeText: {
      color: 'rgba(72, 255, 0, 0.9)',
      fontWeight: 'bold',
    },
    genderText: {
      color: 'rgba(255, 176, 98, 0.9)',
      fontWeight: 'bold',
    },
    age: {
      marginLeft: '0.5rem',
      color: '#9E8DAD',
    },
    caretakerSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginTop: '1.5rem',
      zIndex: 2,
      userSelect: 'none',
    },
    caretakerLogo: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      objectFit: 'cover',
      userSelect: 'none',
    },
    caretakerName: {
      fontSize: '1.5rem',
      color: '#2D2432',
      fontWeight: '900',
    },
    optionsList: {
      marginTop: '2rem',
      width: '85%',
      maxWidth: '360px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      zIndex: 2,
    },
    optionButton: {
      width: '100%',
      padding: '0.9rem 1rem',
      background: '#2D2432',
      color: 'white',
      borderRadius: '30px',
      fontFamily: baseFont,
      fontWeight: '700',
      fontSize: '1.2rem',
      textAlign: 'center',
      cursor: 'pointer',
      boxShadow: '0 6px 14px rgba(0,0,0,0.3)',
      userSelect: 'none',
      transition: 'background-color 0.3s ease',
      border: 'none',
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
      zIndex: 20,
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      userSelect: 'none',
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

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={{ marginTop: '50%', color: '#2D2432', fontSize: '1.5rem' }}>
          Loading pet information...
        </div>
      </div>
    );
  }

  if (!pet) {
    return (
      <div style={styles.container}>
        <div style={{ marginTop: '50%', color: '#2D2432', fontSize: '1.5rem' }}>
          Pet not found
        </div>
      </div>
    );
  }

  const caretakerInfo = getCaretakerInfo();

  return (
    <div style={styles.container}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={styles.backArrow}
        onClick={() => navigate(-1)}
        aria-label="Back"
      />

      <img
        src={pet.image}
        alt={pet.name}
        style={styles.petImage}
        draggable={false}
      />

      <div style={styles.textGroup}>
        <div style={styles.name}>{pet.name}</div>
        <div style={styles.genderGroup}>
          <span style={styles.typeText}>{pet.race}</span>
          <span style={styles.genderText}>({pet.gender})</span>
          <span style={styles.age}>{pet.age} years old</span>
        </div>
      </div>

      {caretakerInfo && (
        <div style={styles.caretakerSection}>
          <img
            src={caretakerInfo.logo}
            alt="Caretaker Logo"
            style={styles.caretakerLogo}
            draggable={false}
          />
          <div style={styles.caretakerName}>{caretakerInfo.name}</div>
        </div>
      )}

      <div style={styles.optionsList}>
        <button
          style={styles.optionButton}
          onClick={() => navigate(`/PetServices/${encodeURIComponent(pet.name)}`)}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#443769'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2D2432'}
        >
          Services
        </button>

        <button
          style={styles.optionButton}
          onClick={() => navigate('/PetAssignedChat')}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#443769'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2D2432'}
        >
          Chat
        </button>

        <button
          style={styles.optionButton}
          onClick={() => navigate(`/PetAssignedPin/${encodeURIComponent(pet.name)}`)}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#443769'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2D2432'}
        >
          PIN
        </button>
      </div>

      <div style={styles.footer}>
        <div
          style={styles.footerIcon}
          onClick={() => navigate('/OwnerHomeInterface')}
          aria-label="Home"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if (e.key === 'Enter') navigate('/OwnerHomeInterface') }}
        >
          <img
            src="/images/home.svg"
            alt="Home"
            style={styles.footerIconImage}
            draggable={false}
          />
        </div>

        <div
          style={styles.footerIcon}
          onClick={() => navigate('/OwnerMap')}
          aria-label="Map"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if (e.key === 'Enter') navigate('/OwnerMap') }}
        >
          <img
            src="/images/map-on.svg"
            alt="Map"
            style={styles.footerIconImage}
            draggable={false}
          />
        </div>

        <div
          style={styles.footerIcon}
          onClick={() => navigate('/OwnerSettings')}
          aria-label="Settings"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if (e.key === 'Enter') navigate('/OwnerSettings') }}
        >
          <img
            src="/images/settings.svg"
            alt="Settings"
            style={styles.footerIconImage}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default PetMenuAssigned;
