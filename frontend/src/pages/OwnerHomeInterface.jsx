import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const OwnerHomeInterface = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch pets
  const fetchPets = async () => {
    const ownerId = localStorage.getItem('userId');
    if (!ownerId) {
      console.error('Owner ID não encontrado');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/pets?owner_id=${ownerId}`);
      if (response.ok) {
        const data = await response.json();
        setPets(data);
      } else {
        console.error('Erro ao buscar pets');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();

    // Listen for storage changes (when localStorage is updated)
    const handleStorageChange = () => {
      fetchPets();
    };

    // Listen for focus events (when user returns to the page)
    const handleFocus = () => {
      fetchPets();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  // Function to handle pet card click
  const handlePetClick = (pet) => {
    // Store the pet data for use in other components
    localStorage.setItem('selectedPetData', JSON.stringify(pet));
    
    // Navigate based on pet status
    if (pet.status === 'Care-Taker assigned' || pet.status === 'Care-Taker assigned (Hotel)') {
      navigate(`/PetMenuAssigned/${encodeURIComponent(pet.name)}`);
    } else {
      navigate(`/PetMenu/${encodeURIComponent(pet.name)}`);
    }
  };

  const styles = {
    container: {
      fontFamily: "'Lexend Peta', sans-serif",
      backgroundColor: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '80px',
    },
    header: {
      width: '100%',
      height: '20vh',
      background: '#2D2432',
      borderRadius: '0 0 50% 50% / 0 0 100px 100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    profileImage: {
      width: '160px',
      height: '160px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '3px solid white',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#FFB062',
      marginTop: '1rem',
    },
    addCircle: {
      position: 'fixed',
      bottom: '100px',
      right: '20px',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#2D2432',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 10,
    },
    petList: {
      width: '100%',
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
    },
    card: {
      backgroundColor: '#4B3B6B',
      color: 'white',
      borderRadius: '12px',
      padding: '1rem',
      width: '90%',
      maxWidth: '360px',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    petImage: {
      width: '60px',
      height: '60px',
      borderRadius: '12px',
      objectFit: 'cover',
    },
    petDetails: {
      flex: 1,
    },
    text_name: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '0.2rem',
    },
    text_age: {
      fontSize: '0.9rem',
      color: '#E0E0E0',
      marginBottom: '0.2rem',
    },
    text_type: {
      fontSize: '0.9rem',
      color: '#E0E0E0',
      marginBottom: '0.2rem',
    },
    text_gender: {
      fontSize: '0.9rem',
      color: '#E0E0E0',
      marginBottom: '0.5rem',
    },
    status: (color) => ({
      padding: '0.2rem 0.5rem',
      borderRadius: '12px',
      fontSize: '0.8rem',
      fontWeight: 'bold',
      backgroundColor: color,
      color: 'white',
    }),
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

  if (loading) {
    return (
      <div style={styles.container}>
        <div>Loading pets...</div>
      </div>
    );
  }

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
              onClick={() => handlePetClick(pet)}
            >
              <img src={pet.image} alt={pet.name} style={styles.petImage} />
              <div style={styles.petDetails}>
                <div style={styles.text_name}>{pet.name}</div>
                <div style={styles.text_age}>
                  {pet.age} {pet.age === 1 ? 'year old' : 'years old'}
                </div>
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

export default OwnerHomeInterface;