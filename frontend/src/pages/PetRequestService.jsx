import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PetRequestService = () => {
  const { petName } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pets/${encodeURIComponent(petName)}`)
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao buscar pet');
        return res.json();
      })
      .then((data) => {
        setPet(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao carregar dados do pet:', err);
        setLoading(false);
      });
  }, [petName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tipo = e.target.elements.tipo.value.trim();

    if (!tipo) {
      alert("Por favor, escolhe o tipo de serviço.");
      return;
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
  };

  if (loading) return <div style={styles.container}>Carregando pet...</div>;
  if (!pet) return <div style={styles.container}>Pet não encontrado.</div>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Pedir Serviço para {pet.name}</h1>
      <img src={pet.image} alt={pet.name} style={styles.image} />
      <p style={styles.info}><strong>Raça:</strong> {pet.race}</p>
      <p style={styles.info}><strong>Género:</strong> {pet.gender}</p>

      <form style={styles.serviceForm} onSubmit={handleSubmit}>
        <select name="tipo" style={styles.select} defaultValue="">
          <option value="" disabled>-- Escolhe o tipo de serviço --</option>
          <option value="bath">Banho</option>
          <option value="walk">Passeio</option>
          <option value="hotel">Hotel</option>
        </select>
        <input name="data" style={styles.input} type="date" />
        <textarea name="notas" style={styles.input} placeholder="Notas adicionais" rows="3" />
        <button style={styles.submitButton} type="submit">Pedir Serviço</button>
      </form>

      <button style={styles.backButton} onClick={() => navigate(`/PetMenu/${encodeURIComponent(pet.name)}`)}>
        Voltar
      </button>
    </div>
  );
};

export default PetRequestService;

