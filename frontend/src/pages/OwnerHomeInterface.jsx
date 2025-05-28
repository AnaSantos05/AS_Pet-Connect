import React from 'react';

export const OwnerHomeInterface = () => {
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
      backgroundColor: '#CFFAFE',
      borderBottomLeftRadius: '50px',
      borderBottomRightRadius: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    profileImage: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      objectFit: 'cover',
      position: 'absolute',
      left: '16px',
      top: '40px',
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
      backgroundColor: '#E5E7EB',
      borderRadius: '16px',
      padding: '1rem',
      width: '280px',
      display: 'flex',
      gap: '1rem',
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
  };

  const pets = [
    {
      name: 'Roxy',
      age: '5 years old',
      type: 'Dog',
      gender: 'Female',
      image: 'https://placehold.co/112x106',
      status: 'Care-Taker assigned',
      statusColor: '#059669',
    },
    {
      name: 'Gino',
      age: '10 months old',
      type: 'Turtle',
      gender: 'Male',
      image: 'https://placehold.co/108x104',
      status: 'Care-Taker not assigned yet',
      statusColor: '#F59E0B',
    },
    {
      name: 'Sonic',
      age: '2 years old',
      type: 'Cat',
      gender: 'Male',
      image: 'https://placehold.co/108x104',
      status: 'Care-Taker assigned',
      statusColor: '#059669',
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img
          style={styles.profileImage}
          src="https://placehold.co/198x205"
          alt="Profile"
        />
      </div>

      <div style={styles.sectionTitle}>My Pets</div>

      <div style={styles.petList}>
        {pets.map((pet, index) => (
          <div key={index} style={styles.card}>
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