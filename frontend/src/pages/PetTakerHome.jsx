import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const PetTakerHome = () => {
  const navigate = useNavigate();

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
      statusColor: '#FECD63',
    },
  ];

  const styles = {
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
    profileImage: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      objectFit: 'cover',
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
    },
    serviceDetail: {
      fontSize: '0.95rem',
      margin: '0.25rem 0',
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
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
    },
    footerIcon: {
      cursor: 'pointer',
      width: '48px',
      height: '48px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img
          style={styles.profileImage}
          src="./images/PetTakerPfp.png"
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

      <div style={styles.footer}>
        <img src="./images/paw.svg" alt="Paw" style={styles.footerIcon} />
        <img src="./images/map.svg" alt="Map" style={styles.footerIcon} />
        <img src="./images/settings.svg" alt="Settings" style={styles.footerIcon} />
      </div>
    </div>
  );
};

export default PetTakerHome;