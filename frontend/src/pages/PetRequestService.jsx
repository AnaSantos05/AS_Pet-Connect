import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PetRequestService = () => {
  const { petName } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    if (petName) {
      fetch(`http://localhost:5000/api/pets/${encodeURIComponent(petName)}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            console.error('Pet não encontrado:', data.error);
          } else {
            setPet(data);
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar informações do pet:', error);
        });
    }
  }, [petName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tipo = e.target.elements.tipo.value.trim();

    if (!tipo) {
      alert("Por favor, escolhe o tipo de serviço.");
      return;
    }

    // Store the pet ID for later use in payment
    if (pet && pet.id) {
      localStorage.setItem('selectedPetId', pet.id.toString());
    }

    navigate(`/PetTakersList/${encodeURIComponent(pet.name)}/${encodeURIComponent(tipo)}`);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: 'white',
      padding: '2rem',
      fontFamily: "'Lexend Peta', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    image: {
      width: '200px',
      height: '200px',
      borderRadius: '12px',
      objectFit: 'cover',
      marginBottom: '1rem',
    },
    title: {
      fontSize: '2rem',
      color: '#2D2432',
      marginBottom: '0.5rem',
    },
    info: {
      fontSize: '1rem',
      margin: '0.3rem 0',
    },
    backButton: {
      marginTop: '2rem',
      padding: '0.5rem 1rem',
      backgroundColor: '#2D2432',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
    },
    serviceForm: {
      marginTop: '1rem',
      width: '100%',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    input: {
      padding: '0.7rem',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontSize: '1rem',
    },
    select: {
      padding: '0.7rem',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontSize: '1rem',
      backgroundColor: 'white',
    },
    submitButton: {
      padding: '0.7rem',
      backgroundColor: '#2D2432',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
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

  if (!pet) {
    return <div>Adicione um pet.</div>;
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Pedir Serviço para {pet.name}</h1>
      <img src={pet.image} alt={pet.name} style={styles.image} />
      <p style={styles.info}><strong>Raça:</strong> {pet.race}</p>
      <p style={styles.info}><strong>Género:</strong> {pet.gender}</p>

      {/* Form */}
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label} htmlFor="tipo">
          Choose service type:
        </label>
        <select
          style={styles.select}
          id="tipo"
          name="tipo"
          required
        >
          <option value="">Select a service...</option>
          <option value="Walking">Walking</option>
          <option value="Feeding">Feeding</option>
          <option value="Grooming">Grooming</option>
          <option value="Pet Sitting">Pet Sitting</option>
          <option value="Training">Training</option>
        </select>

        <button
          type="submit"
          style={styles.submitButton}
          onMouseOver={(e) => e.target.style.backgroundColor = '#1e1a24'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#2D2432'}
        >
          Find Pet Sitters
        </button>
      </form>
      <button style={styles.backButton} onClick={() => navigate(`/PetMenu/${encodeURIComponent(pet.name)}`)}>
        Voltar
      </button>
      {/* Footer */}
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

export default PetRequestService;

