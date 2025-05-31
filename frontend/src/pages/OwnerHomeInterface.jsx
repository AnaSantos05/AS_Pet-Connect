import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

export const OwnerHomeInterface = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: 'white',
      fontFamily: "'Lexend Peta', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative', // Ensure the container creates a stacking context
    },

    header: {
      width: '100%',
      height: '200px',
      backgroundColor: ' #2D2432',
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

    text_name:{
      fontFamily: 'Londrina Solid',
      fontWeight: '400',
      wordWrap: 'break-word',
      color: ' rgb(147, 53, 73)',
      fontSize: '1.6rem',

    },

    text_age:{
      fontFamily: 'Londrina Solid',
      fontWeight: '400',
      wordWrap: 'break-word',
      color: '#78588A',
    },

    text_type:{
      fontFamily: 'Londrina Solid',
      fontWeight: '400',
      wordWrap: 'break-word',
      color: 'rgb(104, 128, 173) ',
    },

    text_gender:{
      fontFamily: 'Londrina Solid',
      fontWeight: '400',
      wordWrap: 'break-word',
      color: '#FECD63',
    },

    ellipsisButton: {
      position: 'relative',
      top: '50%', // Adjust the vertical position
      right: '3px', // Adjust the horizontal position
      cursor: 'pointer',
      fontSize: '1.5rem',
      color: 'red',
      zIndex: 10, // Ensure it appears above other elements
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
      position: 'relative', // Required for the ellipsis button to be positioned relative to this container
      zIndex: 2, // Ensure it appears above the pet cards
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
      zIndex: 1, // Ensure the image appears above the card background
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
      right: '20px', // Position on the right side of the screen
      top: 'calc(50% - 25px)', // Center vertically relative to the container
      cursor: 'pointer',
    },

    addIcon: {
      width: '30px',
      height: '30px',
      objectFit: 'contain',
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

  const pets = [
    {
      name: 'Roxy',
      age: '5 years old',
      type: 'Dog',
      gender: 'Female',
      image: './images/Roxy.jpg',
      status: 'Care-Taker assigned',
      statusColor: '#059669',
    },
    {
      name: 'Gino',
      age: '2 years old',
      type: 'Cat',
      gender: 'Male',
      image: './images/Gino.jpg',
      status: 'Care-Taker assigned',
      statusColor: '#059669',
    },
    {
      name: 'Sonic',
      age: '10 months old',
      type: 'Turtle',
      gender: 'Male',
      image: './images/Sonic.jpg',
      status: 'Care-Taker not assigned yet',
      statusColor: 'red',
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img
          style={styles.profileImage}
          src="./images/OwnerPfp.png"
          alt="Profile"
        />
      </div>

      <div style={styles.sectionTitle}>My Pets</div>

      {/* Ellipsis Button */}
      <FontAwesomeIcon
        icon={faEllipsisVertical}
        style={styles.ellipsisButton}
        onClick={() => alert('Ellipsis button clicked!')}
      />

      {/* Add Circle for '+' */}
      <div style={styles.addCircle} onClick={() => alert('Add new pet')}>
        <FontAwesomeIcon icon={faPlus} style={{ color: 'white' }} />
      </div>

      <div style={styles.petList}>
        {pets.map((pet, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              backgroundColor: pet.name === 'Gino' ? '#2D2432' : styles.card.backgroundColor, // Change background for Gino
            }}
            onClick={() => {
              if (pet.name === 'Gino') {
                navigate('/Petmenu');
              }
            }}
          >
            <img src={pet.image} alt={pet.name} style={styles.petImage} />
            <div style={styles.petDetails}>
              <div style={{ ...styles.text_name }}>{pet.name}</div>
              <div style={{ ...styles.text_age }}>{pet.age}</div>
              <div style={{ ...styles.text_type }}>{pet.type}</div>
              <div style={{ ...styles.text_gender }}>{pet.gender}</div>
              <span style={styles.status(pet.statusColor)}>{pet.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* footer com ícones */}
      <div style={styles.footer}>
        <div style={styles.footerIcon}>
          <img src="./images/home-on.svg" alt="Ícone 1" style={styles.footerIconImage} onClick={() => navigate('/OwnerHomeInterface')} />
        </div>
        <div style={styles.footerIcon}>
          <img src="./images/map.svg" alt="Ícone 2" style={styles.footerIconImage} />
        </div>
        <div style={styles.footerIcon}>
          <img src="./images/settings.svg" alt="Ícone 3" style={styles.footerIconImage} onClick={() => navigate('/OwnerSettings')}/>
        </div>
      </div>
    </div>
  );
};

export default OwnerHomeInterface;