import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PetMenu = () => {
  const { petName } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pets/${encodeURIComponent(petName)}`)
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao buscar pet');
        return res.json();
      })
      .then((data) => {
        setPet(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao carregar dados do pet:', err);
        setLoading(false);
      });
  }, [petName]);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#fff',
      fontFamily: "'Lexend Peta', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '1rem',
      position: 'relative',
    },

    topBackground: {
      backgroundColor: '#2D2432',
      width: '100%',
      height: '180px',
      position: 'absolute',
      top: 0,
      zIndex: -1,
      borderBottomLeftRadius: '50px',
      borderBottomRightRadius: '50px',
    },

    imageWrapper: {
      marginTop: '2rem',
      backgroundColor: '#2D2432',
      padding: '0.5rem',
      borderRadius: '20px',
    },

    image: {
      width: '260px',
      height: '180px',
      objectFit: 'cover',
      borderRadius: '12px',
    },

    name: {
      marginTop: '1rem',
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#2D2432',
    },

    infoRow: {
      fontSize: '1rem',
      marginTop: '0.3rem',
    },

    race: {
      color: '#78588A',
    },

    gender: {
      color: '#FECD63',
    },

    age: {
      color: '#5B5B5B',
    },

    button: {
      width: '80%',
      maxWidth: '300px',
      padding: '0.75rem',
      backgroundColor: '#2D2432',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: '1rem',
      margin: '0.5rem 0',
      cursor: 'pointer',
      boxShadow: '2px 3px 0 #00000040',
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

  if (loading) return <div style={styles.container}>Carregando pet...</div>;
  if (!pet) return <div style={styles.container}>Pet não encontrado.</div>;

  return (
    <div style={styles.container}>
      <div style={styles.topBackground}></div>

      <div style={styles.imageWrapper}>
        <img src={pet.image} alt={pet.name} style={styles.image} />
      </div>

      <div style={styles.name}>{pet.name}</div>
      <div style={styles.infoRow}>
        <span style={styles.race}>{pet.race}</span>{' '}
        (<span style={styles.gender}>{pet.gender}</span>)
      </div>
      <div style={{ ...styles.infoRow, ...styles.age }}>{pet.age} years old</div>

      <button style={styles.button} onClick={() => navigate(`/EditPet/${pet.name}`)}>
        Edit Profile
      </button>
      <button style={styles.button} onClick={() => navigate(`/PetRequestService/${pet.name}`)}>
        Request Service
      </button>
      <button style={styles.button} onClick={() => navigate(`/PetServices/${pet.name}`)}>
        Services
      </button>
      <button style={styles.button} onClick={() => navigate(`/PetHistory/${pet.name}`)}>
        History
      </button>

      {/* Footer */}
      <div style={styles.footer}>
        <div style={styles.footerIcon}>
          <img
            src="/images/home.svg"
            alt="Home"
            style={styles.footerIconImage}
            onClick={() => navigate('/PetTakerHome')}
          />
        </div>
        <div style={styles.footerIcon}>
          <img
            src="/images/map-on.svg"
            alt="Map"
            style={styles.footerIconImage}
            draggable={false}
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

export default PetMenu;

