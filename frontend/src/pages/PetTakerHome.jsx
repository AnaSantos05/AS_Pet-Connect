import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const PetTakerHome = () => {
  const navigate = useNavigate();
  const baseFont = 'Lexend Peta, sans-serif';

  const services = [
    {
      title: 'Pet-Walking',
      schedule: 'I choose',
      price: '5$/hour',
      status: 'No new requests.',
      bgColor: '#D9D9D9',
      statusColor: 'red',
    },
    {
      title: 'Pet-sitting',
      schedule: 'Client chooses',
      price: '25$/day',
      status: 'On going',
      bgColor: '#2D2432',
      statusColor: '#059669',
    },
    {
      title: 'Pet-Training',
      schedule: 'I choose',
      price: '20$/hour',
      status: '2 pending',
      bgColor: '#D9D9D9',
      statusColor: 'orange',
    },
  ];

  const styles = {
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

    container: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: 'white',
      fontFamily: 'Lexend Peta, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
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
    title: {
      marginTop: '1rem',
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    location: {
      fontSize: '1rem',
      color: '#666',
    },
    serviceCard: (bgColor) => ({
      width: '90%',
      maxWidth: '400px',
      backgroundColor: bgColor,
      borderRadius: '20px',
      padding: '1rem',
      margin: '1rem 0',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    }),
    serviceTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      font: 'Londrina Solid, sans-serif',
      color: ' rgba(166, 0, 255, 0.9)',

    },
    serviceDetail: {
      fontSize: '1rem',
      margin: '0.25rem 0',
      fontWeight: 'bold',
      font: 'Londrina Solid, sans-serif',
      color: 'rgba(59, 115, 255, 0.9)',
    },
    serviceStatus: (color) => ({
      color,
      fontWeight: 'bold',
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
      right: '20px',
      bottom: '100px',
      cursor: 'pointer',
    },
    texts: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      marginTop: '1rem',
      color: '#2D2432',
      zIndex: 1,
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
  backArrow: {
    position: 'absolute',
      top: '1rem',
        left: '1rem',
          zIndex: 2,
            fontSize: '2rem',
              color: 'white',
                cursor: 'pointer',
    },
};

return (
  <div style={styles.container}>
    <div style={styles.header}>
    <img
          style={styles.profileImage}
          src="./images/OwnerPfp.png"
          alt="Profile"
        />
    </div>
    <div style={styles.title}>My services</div>
    <div style={styles.location}>Glória, Aveiro</div>

    {services.map((service, index) => (
      <div key={index} style={styles.serviceCard(service.bgColor)}>
        <div style={styles.serviceTitle}>{service.title}</div>
        <div style={styles.serviceDetail}>Schedule-type: {service.schedule}</div>
        <div style={styles.serviceDetail}>Price: {service.price}</div>
        <div style={styles.serviceStatus(service.statusColor)}>{service.status}</div>
      </div>
    ))}

    <div style={styles.addCircle} onClick={() => alert('Add new service')}>
      <FontAwesomeIcon icon={faPlus} style={{ color: 'white' }} />
    </div>

    {/* footer com ícones */}
    <div style={styles.footer}>
      <div style={styles.footerIcon}>
        <img src="./images/home-on.svg" alt="Ícone 1" style={styles.footerIconImage} onClick={() => navigate('/PetTakerHome')} />
      </div>
      <div style={styles.footerIcon}>
        <img src="./images/map.svg" alt="Ícone 2" style={styles.footerIconImage} onClick={() => navigate('/PetTakerMap')}/>
      </div>
      <div style={styles.footerIcon}>
        <img src="./images/settings.svg" alt="Ícone 3" style={styles.footerIconImage} onClick={() => navigate('/OwnerSettings')} />
      </div>
    </div>
  </div>
);
};

export default PetTakerHome;