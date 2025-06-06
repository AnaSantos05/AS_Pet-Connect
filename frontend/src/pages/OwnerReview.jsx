import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fontsource/londrina-solid';

const OwnerReview = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const styles = {
    page: {
      fontFamily: "'Londrina Solid', sans-serif",
      background: '#fff',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      paddingBottom: '80px',
    },
    topSection: {
      background: '#2D2432',
      width: '100%',
      height: '180px',
      borderBottomLeftRadius: '100px',
      borderBottomRightRadius: '100px',
      display: 'flex',
      justifyContent: 'center',
    },
    profileImage: {
      width: '140px',
      height: '140px',
      borderRadius: '20px',
      marginTop: '2rem',
      objectFit: 'cover',
      border: '4px solid white',
    },
    name: {
      marginTop: '1rem',
      fontSize: '1.5rem',
      color: '#000',
    },
    details: {
      color: '#7E66A2',
      fontSize: '1rem',
      marginBottom: '1rem',
      marginTop: '-0.3rem',
      textAlign: 'center',
    },
    sectionLabel: {
      fontSize: '1rem',
      marginTop: '1rem',
      color: '#000',
    },
    stars: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '0.5rem',
    },
    star: {
      fontSize: '2rem',
      color: '#ccc',
      cursor: 'pointer',
      margin: '0 0.3rem',
    },
    starFilled: {
      color: '#FECD63',
    },
    input: {
      width: '80%',
      padding: '0.6rem 1rem',
      background: '#ccc',
      borderRadius: '20px',
      border: 'none',
      marginTop: '0.8rem',
      fontFamily: "'Londrina Solid', sans-serif",
      outline: 'none',
      fontSize: '1rem',
    },
    button: {
      marginTop: '1.5rem',
      padding: '0.8rem 2rem',
      background: '#2D2432',
      color: 'white',
      borderRadius: '25px',
      border: '2px solid black',
      fontSize: '1.1rem',
      boxShadow: '3px 3px 0 #000',
      cursor: 'pointer',
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

  const handleSubmit = () => {
    if (rating > 0) {
      console.log('Review enviada:', { rating, review });
      setSubmitted(true);
      setTimeout(() => navigate('/OwnerHomeInterface'), 1000);
    } else {
      navigate(-1); // Voltar se for "Later"
    }
  };

  const buttonText = rating > 0 ? 'Send' : 'Later';

  return (
    <div style={styles.page}>
      <div style={styles.topSection}></div>

      <img src="/images/joao-ferreira.jpg" alt="João Ferreira" style={styles.profileImage} />

      <div style={styles.name}>João Ferreira</div>
      <div style={styles.details}>35 years old<br />Male</div>

      <div style={styles.sectionLabel}>Leave a rating</div>
      <div style={styles.stars}>
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            style={{
              ...styles.star,
              ...(i <= rating ? styles.starFilled : {}),
            }}
            onClick={() => setRating(rating === i ? 0 : i)}
          >
            ★
          </span>
        ))}
      </div>

      <div style={styles.sectionLabel}>Leave a review</div>
      <input
        type="text"
        placeholder="Type here"
        style={styles.input}
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <button key={buttonText} style={styles.button} onClick={handleSubmit}>
        {buttonText}
      </button>

      {/* Footer igual ao do OwnerFinal */}
      <div style={styles.footer}>
        <div style={styles.footerIcon}>
          <img
            src="/images/home.svg"
            alt="Home"
            style={styles.footerIconImage}
            onClick={() => navigate('/OwnerHomeInterface')}
          />
        </div>
        <div style={styles.footerIcon}>
          <img
            src="/images/map-on.svg"
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

export default OwnerReview;
