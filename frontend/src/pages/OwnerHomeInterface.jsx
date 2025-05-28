import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    petList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1rem',
      padding: '1rem',
      width: '100%',
      maxWidth: '1000px',
      boxSizing: 'border-box',
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
    footer: {
      marginTop: 'auto',
      width: '100%',
      height: '60px',
      backgroundColor: '#F3F4F6',
      borderTopLeftRadius: '16px',
      borderTopRightRadius: '16px',
    },

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
      statusColor: '#F59E0B',
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

      {/* Add Circle for '+' */}
      <div style={styles.addCircle} onClick={() => alert('Add new pet')}>
        <img
          style={styles.addIcon}
          src="./images/plus-icon.png" // Replace with the path to your '+' image
          alt="Add"
        />
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
              <strong>{pet.name}</strong>
              <span>{pet.age}</span>
              <span>{pet.type}</span>
              <span>{pet.gender}</span>
              <span style={styles.status(pet.statusColor)}>{pet.status}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.footer}></div>
    </div>
  );
};

export default OwnerHomeInterface;