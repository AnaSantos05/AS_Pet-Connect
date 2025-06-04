import React from 'react';
import { useNavigate } from 'react-router-dom';

const PetAssignedChat = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      width: '100vw',
      height: '100vh',
      background: 'white',
      fontFamily: "'Lexend Peta', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      padding: '1rem',
      boxSizing: 'border-box',
      position: 'relative',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
    },
    backIcon: {
      fontSize: '1.2rem',
      cursor: 'pointer',
    },
    title: {
      flex: 1,
      textAlign: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#F7A55C',
    },
    chatCard: {
      background: '#3D2E47',
      borderRadius: '20px',
      padding: '0.8rem',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    },
    profilePic: {
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginRight: '1rem',
    },
    content: {
      flex: 1,
    },
    name: {
      fontSize: '0.9rem',
      fontWeight: 'bold',
    },
    message: {
      fontSize: '0.8rem',
      marginTop: '0.2rem',
      color: '#e0dede',
    },
    time: {
      color: '#FFB062',
      fontWeight: 'bold',
      fontSize: '0.8rem',
    },
    badge: {
      background: 'red',
      color: 'white',
      borderRadius: '50%',
      padding: '2px 6px',
      fontSize: '0.7rem',
      marginLeft: '0.5rem',
    },
    check: {
      color: '#6cf0a0',
      fontSize: '1rem',
      marginTop: '0.5rem',
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

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src="/images/back.png" alt="Back" style={styles.backIcon} onClick={() => navigate(-1)} />
        <div style={styles.title}>My Chats</div>
      </div>

      {/* Chat 1 */}
      <div style={styles.chatCard} onClick={() => navigate('/ChatOwner')}>
        <img src="/images/joao_ferreira.jpg" alt="João" style={styles.profilePic} />
        <div style={styles.content}>
          <div style={styles.name}>João Ferreira</div>
          <div style={styles.message}>Obrigado por me escolher! 🙏🙏🙏</div>
        </div>
        <div>
          <div style={styles.time}>17:00</div>
          <div style={styles.badge}>4</div>
        </div>
      </div>


      {/* Chat 2 */}
      <div style={styles.chatCard}>
        <img src="/images/bichosolto-logo.png" alt="Hotel" style={styles.profilePic} />
        <div style={styles.content}>
          <div style={styles.name}>Hotel Bicho Solto (Glória, Aveiro)</div>
          <div style={styles.message}>Boa tarde! Sim, a Roxy já tomou...</div>
        </div>
        <div>
          <div style={styles.time}>16:35</div>
          <img src="/images/check.png" alt="Lido" style={styles.check} />
        </div>
      </div>

      {/* Chat 3 */}
      <div style={styles.chatCard}>
        <img src="/images/user2.png" alt="Matilde" style={styles.profilePic} />
        <div style={styles.content}>
          <div style={styles.name}>Matilde Nogueira</div>
          <div style={styles.message}><strong>Me:</strong> Ok, eu passo lá amanhã</div>
        </div>
        <div>
          <div style={styles.time}>20/01/2024</div>
          <img src="/images/check.png" alt="Lido" style={styles.check} />
        </div>
      </div>

      {/* Footer igual ao OwnerMap */}
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

export default PetAssignedChat;

