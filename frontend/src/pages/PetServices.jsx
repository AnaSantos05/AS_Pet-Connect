import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const PetServices = () => {
  const navigate = useNavigate();
  const { petName } = useParams();
  const [pet, setPet] = useState(null);
  const [services, setServices] = useState({ active: [], past: [] });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('active');

  const baseFont = "'Londrina Solid', cursive, sans-serif";

  useEffect(() => {
    // Fetch pet data
    if (petName) {
      fetch(`http://localhost:5000/api/pets/${encodeURIComponent(petName)}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            console.error('Pet não encontrado:', data.error);
          } else {
            setPet(data);
            // Fetch services for this pet
            fetchPetServices(data.id);
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar informações do pet:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [petName]);

  const fetchPetServices = async (petId) => {
    try {
      // Add timestamp to prevent caching and ensure fresh data
      const response = await fetch(`http://localhost:5000/api/pets/${petId}/services?timestamp=${Date.now()}`);
      if (response.ok) {
        const data = await response.json();
        console.log('Fetched services:', data); // Debug log
        setServices(data);
      } else {
        console.error('Failed to fetch services from API');
        // Fallback to empty arrays if API fails
        setServices({
          active: [],
          past: []
        });
      }
    } catch (error) {
      console.error('Error fetching pet services:', error);
      // Fallback to empty arrays on network error
      setServices({
        active: [],
        past: []
      });
    }
  };

  // Add effect to listen for storage events (when services are updated)
  useEffect(() => {
    const handleStorageChange = () => {
      // Refetch pet data and services when storage changes
      if (pet && pet.id) {
        fetchPetServices(pet.id);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events
    window.addEventListener('servicesUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('servicesUpdated', handleStorageChange);
    };
  }, [pet]);

  const styles = {
    container: {
      position: 'relative',
      width: '100vw',
      height: '100vh',
      background: 'white',
      fontFamily: baseFont,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: '80px',
    },
    headerCurve: {
      position: 'absolute',
      top: '-110vw',
      left: '-45vw',
      width: '190vw',
      height: '190vw',
      background: '#2D2432',
      borderRadius: '50%',
      zIndex: 0,
    },
    backArrow: {
      position: 'fixed',
      top: '1.5rem',
      left: '1rem',
      fontSize: '2.4rem',
      color: 'white',
      cursor: 'pointer',
      zIndex: 10,
    },
    title: {
      marginTop: '6rem',
      fontSize: '2rem',
      color: '#2D2432',
      textAlign: 'center',
      fontWeight: '900',
      zIndex: 2,
    },
    petInfo: {
      textAlign: 'center',
      marginTop: '1rem',
      fontSize: '1.2rem',
      color: '#78588A',
      zIndex: 2,
    },
    tabContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '2rem',
      zIndex: 2,
    },
    tab: (isActive) => ({
      padding: '0.8rem 2rem',
      background: isActive ? '#2D2432' : 'transparent',
      color: isActive ? 'white' : '#2D2432',
      border: `2px solid #2D2432`,
      borderRadius: '30px',
      cursor: 'pointer',
      fontFamily: baseFont,
      fontSize: '1.1rem',
      fontWeight: '700',
      margin: '0 0.5rem',
      transition: 'all 0.3s ease',
    }),
    servicesContainer: {
      flex: 1,
      overflowY: 'auto',
      padding: '1rem',
      marginTop: '1rem',
      zIndex: 2,
    },
    serviceCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '1rem',
      margin: '0.8rem 0',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      border: '2px solid #2D2432',
    },
    serviceType: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#2D2432',
      marginBottom: '0.5rem',
    },
    serviceProvider: {
      fontSize: '1rem',
      color: '#78588A',
      marginBottom: '0.3rem',
    },
    serviceDate: {
      fontSize: '0.9rem',
      color: '#666',
      marginBottom: '0.3rem',
    },
    serviceStatus: (status) => ({
      fontSize: '0.9rem',
      fontWeight: 'bold',
      color: status === 'In Progress' ? '#059669' : '#666',
    }),
    servicePrice: {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#2D2432',
      textAlign: 'right',
    },
    noServices: {
      textAlign: 'center',
      fontSize: '1.2rem',
      color: '#666',
      marginTop: '2rem',
    },
    refreshButton: {
      padding: '0.5rem 1rem',
      background: '#2D2432',
      color: 'white',
      border: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      margin: '1rem auto',
      display: 'block',
      fontFamily: baseFont,
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
      zIndex: 20,
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

  // Function to manually refresh services
  const refreshServices = () => {
    if (pet && pet.id) {
      setLoading(true);
      fetchPetServices(pet.id).finally(() => setLoading(false));
    }
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.headerCurve} />
        <div style={{ marginTop: '50%', textAlign: 'center', color: '#2D2432', fontSize: '1.5rem' }}>
          Loading services...
        </div>
      </div>
    );
  }

  const currentServices = activeTab === 'active' ? services.active : services.past;

  return (
    <div style={styles.container}>
      <div style={styles.headerCurve} />
      
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={styles.backArrow}
        onClick={() => navigate(-1)}
        aria-label="Back"
      />

      <div style={styles.title}>Services</div>
      {pet && (
        <div style={styles.petInfo}>for {pet.name}</div>
      )}

      <div style={styles.tabContainer}>
        <div
          style={styles.tab(activeTab === 'active')}
          onClick={() => setActiveTab('active')}
        >
          Active ({services.active.length})
        </div>
        <div
          style={styles.tab(activeTab === 'past')}
          onClick={() => setActiveTab('past')}
        >
          Past ({services.past.length})
        </div>
      </div>

      <button 
        style={styles.refreshButton} 
        onClick={refreshServices}
        title="Refresh services"
      >
        🔄 Refresh
      </button>

      <div style={styles.servicesContainer}>
        {currentServices.length === 0 ? (
          <div style={styles.noServices}>
            No {activeTab} services found
            <br />
            <small style={{ color: '#999', fontSize: '0.9rem' }}>
              Try refreshing or check if a payment was completed recently
            </small>
          </div>
        ) : (
          currentServices.map((service) => (
            <div key={service.id} style={styles.serviceCard}>
              <div style={styles.serviceType}>{service.type}</div>
              <div style={styles.serviceProvider}>Provider: {service.provider}</div>
              <div style={styles.serviceDate}>
                {service.startDate === service.endDate 
                  ? `Date: ${service.startDate}`
                  : `${service.startDate} - ${service.endDate}`
                }
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={styles.serviceStatus(service.status)}>{service.status}</div>
                <div style={styles.servicePrice}>{service.price}</div>
              </div>
            </div>
          ))
        )}
      </div>

      <div style={styles.footer}>
        <div style={styles.footerIcon} onClick={() => navigate('/OwnerHomeInterface')}>
          <img
            src="/images/home.svg"
            alt="Home"
            style={styles.footerIconImage}
          />
        </div>
        <div style={styles.footerIcon} onClick={() => navigate('/OwnerMap')}>
          <img
            src="/images/map-on.svg"
            alt="Map"
            style={styles.footerIconImage}
          />
        </div>
        <div style={styles.footerIcon} onClick={() => navigate('/OwnerSettings')}>
          <img
            src="/images/settings.svg"
            alt="Settings"
            style={styles.footerIconImage}
          />
        </div>
      </div>
    </div>
  );
};

export default PetServices;