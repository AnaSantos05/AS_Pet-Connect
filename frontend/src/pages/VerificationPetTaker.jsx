import React from 'react';

export const VerificationPetTaker = () => {
  const baseFont = 'Lexend Peta, sans-serif';

  const styles = {
    container: {
      position: 'relative',
      width: '100vw',
      height: '100dvh',
      background: 'white',
      fontFamily: baseFont,
      overflowY: 'auto',
    },
    topEllipse: {
      position: 'absolute',
      top: '-120vw',
      left: '-40vw',
      width: '180vw',
      height: '180vw',
      background: '#2D2432',
      borderRadius: '50%',
      zIndex: 0,
    },
    backArrow: {
      position: 'absolute',
      top: '1.5rem',
      left: '1rem',
      fontSize: '2rem',
      color: 'white',
      cursor: 'pointer',
      zIndex: 2,
    },
    avatarWrapper: {
      position: 'relative',
      margin: '6rem auto 2rem',
      width: '120px',
      height: '120px',
      zIndex: 1,
    },
    avatarBorder: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      background: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarImage: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: '#2D2432',
    },
    editIcon: {
      position: 'absolute',
      bottom: 0,
      right: 'calc(50% - 12px)',
      background: 'white',
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      boxShadow: '0 0 2px rgba(0,0,0,0.3)',
      cursor: 'pointer',
      zIndex: 3,
    },
    form: {
      margin: '0 auto',
      padding: '0 1rem',
      maxWidth: '360px',
      display: 'flex',
      flexDirection: 'column',
       gap: '1rem',
       gap: '1rem',     // espaçamento interno
       marginTop: '3rem', // empurra o form para baixo
      zIndex: 1,
    },
    field: {
      display: 'flex',
      flexDirection: 'column',
       gap: '0.2rem',
       gap: '0.2rem',    // espaçamento entre label e input
    },
    label: {
      fontSize: '0.9rem',
      fontWeight: '500',
      color: '#2D2432',
    },
    input: {
      height: '2.5rem',
      borderRadius: '20px',
      background: '#C2C2C2',
      border: '1px solid #000',
      padding: '0 1rem',
      fontFamily: baseFont,
      fontSize: '1rem',
      outline: 'none',
    },
    uploadButton: {
      height: '2.5rem',
      borderRadius: '20px',
      background: '#C2C2C2',
      border: '1px solid #000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    uploadIcon: {
      fontSize: '1.2rem',
    },
    submitButton: {
      position: 'fixed',
      bottom: '1.5rem',
      right: '1.5rem',
      width: '44px',
      height: '44px',
      background: '#380D51',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.5rem',
      cursor: 'pointer',
      zIndex: 2,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.topEllipse} />
      <div style={styles.backArrow}>←</div>

      <div style={styles.avatarWrapper}>
        <div style={styles.avatarBorder}>
          <div style={styles.avatarImage} />
        </div>
        <div style={styles.editIcon}>✎</div>
      </div>

      <form style={styles.form}>
        <div style={styles.field}>
          <label style={styles.label}>Name</label>
          <input type="text" style={styles.input} placeholder="" />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>NIF:</label>
          <input type="text" style={styles.input} placeholder="" />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Age:</label>
          <input type="number" style={styles.input} placeholder="" />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Location:</label>
          <input type="text" style={styles.input} placeholder="" />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Nationality:</label>
          <input type="text" style={styles.input} placeholder="" />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Description:</label>
          <input type="text" style={styles.input} placeholder="" />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Comprovatives:</label>
          <div style={styles.uploadButton}>
            <span style={styles.uploadIcon}>⬆️</span>
          </div>
        </div>
      </form>

      <div style={styles.submitButton}>✔</div>
    </div>
  );
};

export default VerificationPetTaker;