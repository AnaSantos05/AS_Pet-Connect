import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatOwner = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      height: '100vh',
      width: '100vw',
      backgroundImage: 'url(/images/chat-background-cats.png)',
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Lexend Peta', sans-serif",
      position: 'relative',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#2D2432',
      color: 'white',
      justifyContent: 'space-between',
    },
    leftHeader: {
      display: 'flex',
      alignItems: 'center',
    },
    backArrow: {
      fontSize: '1.5rem',
      marginRight: '1rem',
      cursor: 'pointer',
    },
    profileImage: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      marginRight: '1rem',
    },
    callIcon: {
      width: '24px',
      height: '24px',
      cursor: 'pointer',
    },
    chatBody: {
      padding: '1rem',
      flex: 1,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    sentMessage: {
      alignSelf: 'flex-end',
      backgroundColor: '#89CFF0',
      borderRadius: '12px 12px 0 12px',
      padding: '0.6rem',
      maxWidth: '80%',
    },
    receivedMessage: {
      alignSelf: 'flex-start',
      backgroundColor: '#F2F2F2',
      borderRadius: '12px 12px 12px 0',
      padding: '0.6rem',
      maxWidth: '80%',
    },
    inputWrapper: {
      backgroundColor: 'white',
      padding: '0.8rem',
      borderTop: '1px solid #ccc',
      position: 'absolute',
      bottom: '60px',
      width: '100%',
      boxSizing: 'border-box',
    },
    inputArea: {
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      padding: '0.6rem 1rem',
      borderRadius: '20px',
      border: '1px solid #ccc',
      fontSize: '1rem',
    },
    sendIcon: {
      marginLeft: '1rem',
      width: '24px',
      height: '24px',
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
        <div style={styles.leftHeader}>
          <span style={styles.backArrow} onClick={() => navigate(-1)}>←</span>
          <img src="/images/roxy.png" alt="Roxy" style={styles.profileImage} />
          <strong>Roxy</strong>
        </div>
        <img
          src="/images/phone-icon.png"
          alt="Call"
          style={styles.callIcon}
          onClick={() => navigate('/phone')}
        />
      </div>

      <div style={styles.chatBody}>
        <div style={styles.sentMessage}>Boa tarde, já deram banho à Roxy?</div>
        <div style={styles.receivedMessage}>
          Boa tarde! Sim, a Roxy já tomou banho e portou-se muito bem. Está limpinha e tranquila. Se precisar de mais alguma coisa, estamos por aqui!
        </div>
      </div>

      <div style={styles.inputWrapper}>
        <div style={styles.inputArea}>
          <input type="text" placeholder="Type here" style={styles.input} />
          <img src="/images/send-icon.svg" alt="Send" style={styles.sendIcon} />
        </div>
      </div>

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

export default ChatOwner;
